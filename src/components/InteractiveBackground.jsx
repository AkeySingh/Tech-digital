// src/components/InteractiveBackground.jsx
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingOrbs() {
  const groupRef = useRef();

  // Store mouse position normalized -1 to 1
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = elapsed * 0.1;
      groupRef.current.position.x = mouse.current.x * 2;
      groupRef.current.position.y = mouse.current.y * 1.5;
    }
  });

  // Create 10 orbs with random positions and sizes
  const orbs = [];
  for (let i = 0; i < 10; i++) {
    const x = (Math.random() - 0.5) * 10;
    const y = (Math.random() - 0.5) * 6;
    const z = (Math.random() - 0.5) * 5;
    const scale = 0.5 + Math.random();
    orbs.push(
      <mesh key={i} position={[x, y, z]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={`hsl(${(i * 36) % 360}, 80%, 60%)`}
          transparent
          opacity={0.4}
          roughness={0.1}
          metalness={0.7}
          emissive={`hsl(${(i * 36) % 360}, 80%, 70%)`}
          emissiveIntensity={0.6}
        />
      </mesh>
    );
  }

  return <group ref={groupRef}>{orbs}</group>;
}

export default function InteractiveBackground() {
  return (
    <div className="fixed inset-0 -z-20">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
}
