import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

// Real extruded geometry: the circular hole is subtracted from the square shape.
export default function GlassGeometry({
  reduced = false,
}: {
  reduced?: boolean;
}) {
  const host = useRef<HTMLDivElement>(null);
  const [available, setAvailable] = useState(true);
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
    renderer.toneMappingExposure = 1.35;
    element.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 40);
    camera.position.set(0, 0.1, 8.8);
    const environment = new RoomEnvironment();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const env = pmrem.fromScene(environment, 0.04);
    scene.environment = env.texture;
    environment.dispose();
    scene.add(new THREE.HemisphereLight(0xffffff, 0x516336, 3));
    const light = new THREE.DirectionalLight(0xffffff, 5);
    light.position.set(-3, 5, 4);
    scene.add(light);
    const group = new THREE.Group();
    scene.add(group);
    const shape = new THREE.Shape();
    shape.moveTo(-1.1, -1.1);
    shape.lineTo(1.1, -1.1);
    shape.lineTo(1.1, 1.1);
    shape.lineTo(-1.1, 1.1);
    shape.closePath();
    const hole = new THREE.Path();
    hole.absarc(0, 0, 0.66, 0, Math.PI * 2, true);
    shape.holes.push(hole);
    const geom = new THREE.ExtrudeGeometry(shape, {
      depth: 0.15,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.025,
      bevelThickness: 0.025,
      curveSegments: 72,
    });
    geom.center();
    const glass = new THREE.MeshPhysicalMaterial({
      color: 0xe4f0ca,
      metalness: 0.03,
      roughness: 0.095,
      transmission: 1,
      thickness: 0.45,
      ior: 1.48,
      clearcoat: 1,
      envMapIntensity: 1.3,
    });
    const lime = new THREE.MeshPhysicalMaterial({
      color: 0xb5d32e,
      metalness: 0.18,
      roughness: 0.2,
      transmission: 0.3,
      thickness: 0.35,
      clearcoat: 1,
    });
    const forest = new THREE.MeshPhysicalMaterial({
      color: 0x263c23,
      roughness: 0.23,
      metalness: 0.4,
      clearcoat: 1,
    });
    const back = new THREE.Mesh(geom, forest);
    back.position.set(-0.48, 0.25, -0.45);
    back.scale.setScalar(0.95);
    group.add(back);
    const front = new THREE.Mesh(geom, glass);
    front.position.set(0.2, 0.12, 0.25);
    group.add(front);
    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(0.72, 0.072, 24, 100),
      glass,
    );
    torus.position.set(0.2, 0.12, 0.73);
    group.add(torus);
    const block = new THREE.Mesh(new THREE.BoxGeometry(0.76, 0.76, 0.3), lime);
    block.position.set(-0.75, -0.73, 0.8);
    group.add(block);
    const bead = new THREE.Mesh(new THREE.SphereGeometry(0.2, 32, 24), glass);
    bead.position.set(1.3, -1.05, 0.55);
    group.add(bead);
    const line = new THREE.LineSegments(
      new THREE.EdgesGeometry(geom),
      new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3,
      }),
    );
    front.add(line);
    group.rotation.set(0.2, -0.4, -0.12);
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
      group.rotation.y += (-0.4 + x - group.rotation.y) * 0.04;
      group.rotation.x += (0.2 + y - group.rotation.x) * 0.04;
      if (!reduced) {
        group.position.y = Math.sin(time * 0.00055) * 0.085;
        torus.rotation.z = time * 0.00015;
        front.position.z = 0.25 + Math.sin(time * 0.0004) * 0.09;
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
  }, [reduced]);
  return (
    <div ref={host} className="glass-scene" aria-hidden="true">
      {!available && (
        <span className="glass-fallback">
          ○<br />□
        </span>
      )}
    </div>
  );
}
