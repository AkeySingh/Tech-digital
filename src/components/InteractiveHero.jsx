import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Helper to detect touch devices (mobile/tablet)
function isTouchDevice() {
  return (
    typeof window !== "undefined" &&
    ("ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0)
  );
}

function FloatingBox({ position, color, onClick, isActive }) {
  const meshRef = useRef();
  const isDesktop = !isTouchDevice();

  // Rotate the box continuously
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={isActive ? 1.5 : 1}
      onClick={onClick}
      onPointerOver={() =>
        isDesktop && (document.body.style.cursor = "pointer")
      }
      onPointerOut={() => isDesktop && (document.body.style.cursor = "default")}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={isActive ? "orange" : color} />
    </mesh>
  );
}

const CLICK_SOUND_URL = "https://actions.google.com/sounds/v1/ui/click.ogg";

export default function InteractiveHero() {
  const [activeIndex, setActiveIndex] = useState(null);
  const audioRef = useRef(null);

  // Load audio once on mount
  useEffect(() => {
    const unlockAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        });
      }
      window.removeEventListener("click", unlockAudio);
    };

    window.addEventListener("click", unlockAudio);

    return () => window.removeEventListener("click", unlockAudio);
  }, []);

  const services = [
    {
      name: "Website Design",
      description:
        "Custom, modern, responsive websites tailored to your needs.",
      color: "#6366F1", // Indigo-500
      position: [-2, 0, 0],
    },
    {
      name: "SEO Optimization",
      description: "Boost your rankings with proven SEO strategies.",
      color: "#EC4899", // Pink-500
      position: [0, 1, 0],
    },
    {
      name: "Digital Marketing",
      description: "Drive sales & engagement with targeted campaigns.",
      color: "#10B981", // Emerald-500
      position: [2, 0, 0],
    },
  ];

  const handleClick = (index) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.log("Audio play failed:", err);
      });
    }
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="relative w-full h-[600px] md:h-[700px] bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-900 text-white overflow-hidden rounded-lg shadow-lg">
      <Canvas shadows camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={!isTouchDevice()}
        />

        {services.map(({ position, color }, i) => (
          <FloatingBox
            key={i}
            position={position}
            color={color}
            isActive={activeIndex === i}
            onClick={() => handleClick(i)}
          />
        ))}
      </Canvas>

      {/* Info Box */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black bg-opacity-60 p-6 rounded-lg max-w-xl w-11/12 text-center shadow-lg">
        {activeIndex !== null ? (
          <>
            <h2 className="text-3xl font-bold mb-2">
              {services[activeIndex].name}
            </h2>
            <p className="text-lg">{services[activeIndex].description}</p>
          </>
        ) : (
          <p className="text-lg">
            Click on a cube to learn about our services!
          </p>
        )}
      </div>
    </section>
  );
}
