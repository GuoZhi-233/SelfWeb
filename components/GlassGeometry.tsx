import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { BrandMark } from "./BootSequence";
import useDeviceTilt from "./useDeviceTilt";
import { Language } from "../types";

// The exact two paths of the original brand mark, mapped from SVG to 3D.
export default function GlassGeometry({
  reduced = false,
  language = "zh",
}: {
  reduced?: boolean;
  language?: Language;
}) {
  const host = useRef<HTMLDivElement>(null);
  const [available, setAvailable] = useState(true);
  const { tilt, supported, status, enabled, toggle } = useDeviceTilt(reduced);
  const zh = language === "zh";
  useEffect(() => {
    const element = host.current;
    if (!element) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
    } catch {
      setAvailable(false);
      return;
    }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.6));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    element.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 40);
    camera.position.set(0, 0.1, 8.8);
    const environment = new RoomEnvironment();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const env = pmrem.fromScene(environment, 0.04);
    scene.environment = env.texture;
    environment.dispose();
    scene.add(new THREE.HemisphereLight(0xffffff, 0x516336, 1.8));
    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(-3, 5, 4);
    scene.add(light);
    const group = new THREE.Group();
    scene.add(group);
    const scale = 0.0042;
    const point = (x: number, y: number): [number, number] => [
      (x - 512) * scale, (511.62 - y) * scale,
    ];
    const makeLogoPart = (offset: number, depth: number) => {
      const shape = new THREE.Shape();
      shape.moveTo(...point(709.6, 551.91 + offset));
      shape.lineTo(...point(314.39, 551.91 + offset));
      shape.lineTo(...point(314.39, 327.23 + offset));
      shape.bezierCurveTo(
        ...point(408.57, 327.23 + offset),
        ...point(484.91, 250.88 + offset),
        ...point(484.91, 156.71 + offset),
      );
      shape.lineTo(...point(709.6, 156.71 + offset));
      shape.closePath();
      const geometry = new THREE.ExtrudeGeometry(shape, {
        depth, bevelEnabled: true, bevelSegments: 5, steps: 1,
        bevelSize: 0.016, bevelThickness: 0.018, curveSegments: 64,
      });
      geometry.translate(0, 0, -depth / 2);
      return geometry;
    };
    const darkGlass = new THREE.MeshPhysicalMaterial({
      color: 0x181d18, metalness: 0.12, roughness: 0.17,
      transmission: 0.12, thickness: 0.5, ior: 1.5,
      attenuationColor: new THREE.Color(0x192018), attenuationDistance: 0.3,
      clearcoat: 1, clearcoatRoughness: 0.09, envMapIntensity: 0.9,
    });
    const limeGlass = new THREE.MeshPhysicalMaterial({
      color: 0xb6d22e, metalness: 0, roughness: 0.13,
      transmission: 0.42, thickness: 0.48, ior: 1.5,
      attenuationColor: new THREE.Color(0xb6d22e), attenuationDistance: 0.7,
      clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.1,
    });
    const upper = new THREE.Mesh(makeLogoPart(0, 0.38), darkGlass);
    const lower = new THREE.Mesh(makeLogoPart(314.62, 0.4), limeGlass);
    // Preserve the overlap in the 2D mark: lime sits in front of charcoal.
    upper.position.z = -0.12;
    lower.position.z = 0.31;
    group.add(upper, lower);
    group.rotation.set(0.08, -0.32, -0.025);
    let x = 0,
      y = 0,
      visible = false,
      frame = 0,
      disposed = false;
    const pointer = (e: PointerEvent) => {
      const b = element.getBoundingClientRect();
      x = ((e.clientX - b.left) / b.width - 0.5) * 0.65;
      y = ((e.clientY - b.top) / b.height - 0.5) * 0.4;
    };
    const reset = () => {
      x = 0;
      y = 0;
    };
    const draw = (time: number) => {
      if (disposed) return;
      group.rotation.y += (-0.32 + x + (reduced ? 0 : tilt.current.x) - group.rotation.y) * 0.04;
      group.rotation.x += (0.08 + y + (reduced ? 0 : tilt.current.y) - group.rotation.x) * 0.04;
      if (!reduced) {
        group.position.y = Math.sin(time * 0.00055) * 0.085;
      }
      renderer.render(scene, camera);
      if (visible && !document.hidden && !reduced)
        frame = requestAnimationFrame(draw);
    };
    const restart = () => {
      cancelAnimationFrame(frame);
      if (visible && !document.hidden) frame = requestAnimationFrame(draw);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        restart();
      },
      { rootMargin: "100px" },
    );
    observer.observe(element);
    const resize = new ResizeObserver(() => {
      const b = element.getBoundingClientRect();
      renderer.setSize(b.width, b.height);
      camera.aspect = b.width / b.height;
      camera.updateProjectionMatrix();
      restart();
    });
    resize.observe(element);
    if (!reduced) {
      element.addEventListener("pointermove", pointer);
      element.addEventListener("pointerleave", reset);
    }
    document.addEventListener("visibilitychange", restart);
    const contextLost = (e: Event) => {
      e.preventDefault();
      setAvailable(false);
      cancelAnimationFrame(frame);
    };
    renderer.domElement.addEventListener("webglcontextlost", contextLost);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      resize.disconnect();
      element.removeEventListener("pointermove", pointer);
      element.removeEventListener("pointerleave", reset);
      document.removeEventListener("visibilitychange", restart);
      renderer.domElement.removeEventListener("webglcontextlost", contextLost);
      scene.traverse((o) => {
        if (o instanceof THREE.Mesh || o instanceof THREE.LineSegments) {
          o.geometry.dispose();
          const materials = Array.isArray(o.material)
            ? o.material
            : [o.material];
          materials.forEach((m) => m.dispose());
        }
      });
      env.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [reduced, tilt]);
  return (
    <>
    <div ref={host} className="glass-scene" aria-hidden="true">
      {!available && (
        <span className="glass-fallback">
          <BrandMark />
        </span>
      )}
    </div>
    {supported && available && !reduced && (
      <div className="tilt-control">
        <button onClick={toggle} aria-pressed={enabled} disabled={status === "asking"}>
          {status === "asking" ? (zh ? "等待授权…" : "Awaiting permission…") :
            enabled ? (zh ? "关闭倾斜互动" : "Disable tilt") :
            (zh ? "启用倾斜互动" : "Enable tilt")}
        </button>
        <span role="status">
          {status === "denied" ? (zh ? "未获授权，仍可触摸旋转" : "Permission denied. Touch to rotate.") :
            status === "unavailable" ? (zh ? "未检测到传感器，仍可触摸旋转" : "No sensor detected. Touch to rotate.") :
            status === "waiting" ? (zh ? "轻轻倾斜手机" : "Gently tilt your phone") : ""}
        </span>
      </div>
    )}
    </>
  );
}
