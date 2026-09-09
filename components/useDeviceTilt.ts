import { useEffect, useRef, useState } from "react";

type OrientationAPI = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<"granted" | "denied">;
};
export function tiltRotation(beta: number, gamma: number, angle: number) {
  const radians = angle * Math.PI / 180;
  const clamp = (value: number) => Math.max(-1, Math.min(1, value / 35));
  return {
    x: clamp(gamma * Math.cos(radians) + beta * Math.sin(radians)) * .32,
    y: clamp(beta * Math.cos(radians) - gamma * Math.sin(radians)) * .2,
  };
}

export default function useDeviceTilt(reduced: boolean) {
  const tilt = useRef({ x: 0, y: 0 });
  const [supported, setSupported] = useState(false);
  const [status, setStatus] = useState<"off" | "asking" | "waiting" | "active" | "denied" | "unavailable">("off");
  const mounted = useRef(true);
  useEffect(() => {
    mounted.current = true;
    setSupported(window.isSecureContext && "DeviceOrientationEvent" in window &&
      window.matchMedia("(pointer: coarse)").matches);
    return () => { mounted.current = false; };
  }, []);
  const enabled = status === "waiting" || status === "active";
  useEffect(() => {
    tilt.current = { x: 0, y: 0 };
    if (!enabled || reduced) return;
    let baseline: { beta: number; gamma: number } | null = null;
    let received = false;
    const reset = () => { baseline = null; tilt.current = { x: 0, y: 0 }; };
    const sensor = (event: DeviceOrientationEvent) => {
      if (document.hidden || event.beta === null || event.gamma === null ||
        !Number.isFinite(event.beta) || !Number.isFinite(event.gamma)) return;
      if (!received) { received = true; setStatus("active"); }
      baseline ??= { beta: event.beta, gamma: event.gamma };
      const delta = (value: number, origin: number) => (value - origin + 540) % 360 - 180;
      const angle = screen.orientation?.angle ??
        (window as Window & { orientation?: number }).orientation ?? 0;
      tilt.current = tiltRotation(delta(event.beta, baseline.beta), delta(event.gamma, baseline.gamma), angle);
    };
    const timeout = window.setTimeout(() => {
      if (!received) setStatus("unavailable");
    }, 4000);
    window.addEventListener("deviceorientation", sensor);
    window.addEventListener("orientationchange", reset);
    screen.orientation?.addEventListener("change", reset);
    document.addEventListener("visibilitychange", reset);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("deviceorientation", sensor);
      window.removeEventListener("orientationchange", reset);
      screen.orientation?.removeEventListener("change", reset);
      document.removeEventListener("visibilitychange", reset);
      tilt.current = { x: 0, y: 0 };
    };
  }, [enabled, reduced]);
  const toggle = async () => {
    if (enabled) { setStatus("off"); return; }
    if (status === "asking") return;
    setStatus("asking");
    try {
      const api = window.DeviceOrientationEvent as OrientationAPI;
      // iOS requires this call directly inside the user's button gesture.
      const permission = api.requestPermission ? await api.requestPermission() : "granted";
      if (mounted.current) setStatus(permission === "granted" ? "waiting" : "denied");
    } catch {
      if (mounted.current) setStatus("denied");
    }
  };
  return { tilt, supported, status, enabled, toggle };
}
