// // src/components/Hero.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, MeshDistortMaterial, Sphere } from "@react-three/drei";

// export default function Hero() {
//   return (
//     <motion.section
//       className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-indigo-500 to-purple-600 px-6 md:px-20 py-16 text-white"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Left content */}
//       <div className="w-full md:w-1/2 mb-10 md:mb-0 space-y-6">
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//           Boost Your Business with <br />
//           <span className="text-yellow-300">Tech Digital Solutions</span>
//         </h1>
//         <p className="text-lg text-gray-200">
//           We help startups and businesses grow online with powerful websites,
//           SEO, Google Ads, and creative marketing strategies.
//         </p>
//         <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow hover:bg-yellow-300 transition">
//           Start Your Journey
//         </button>
//       </div>

//       {/* Right 3D animation */}
//       <div className="w-full md:w-1/2 h-[400px] md:h-[500px]">
//         <Canvas>
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[1, 1, 2]} />
//           <OrbitControls enableZoom={false} autoRotate />
//           <Sphere args={[1.2, 100, 200]} scale={1.5}>
//             <MeshDistortMaterial
//               color="#ffffff"
//               attach="material"
//               distort={0.5}
//               speed={2}
//               roughness={0.2}
//             />
//           </Sphere>
//         </Canvas>
//       </div>
//     </motion.section>
//   );
// }

//--------------------------------------------------------------------------------------------------

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import { Link } from "react-router-dom";

function AnimatedCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.style.width = "24px";
    cursor.style.height = "24px";
    cursor.style.border = "2px solid #00a2ad";
    cursor.style.borderRadius = "50%";
    cursor.style.position = "fixed";
    cursor.style.pointerEvents = "none";
    cursor.style.transform = "translate(-50%, -50%)";
    cursor.style.transition = "transform 0.15s ease-out, background-color 0.3s";
    cursor.style.zIndex = "9999";
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const clickEffect = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
      cursor.style.backgroundColor = "#00a2ad";
      setTimeout(() => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.backgroundColor = "transparent";
      }, 150);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", clickEffect);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", clickEffect);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
}

export default function Hero() {
  return (
    <>
      <AnimatedCursor />

      <section
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 text-white overflow-hidden"
        style={{ backgroundColor: "#f9f7f6" }}
      >
        {/* Background Gradient Flares */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            background:
              "radial-gradient(circle at top left, #00a2ad33, transparent 60%), radial-gradient(circle at bottom right, #f6a80133, transparent 70%)",
            filter: "blur(120px)",
          }}
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 max-w-xl space-y-8 z-10"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#1e293b]">
            Boost Growth with <br />
            <span className="text-[#00a2ad]">Tech Digital Solutions</span>
          </h1>

          <p className="text-lg md:text-xl text-[#334155] font-medium leading-relaxed">
            Websites, SEO, Google Ads, and creative strategies powered by design
            and tech.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 12px #f6a801" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#f6a801] text-white font-semibold px-8 py-4 rounded-full shadow-md transition-all"
          >
            <Link to="/startjourney">Start Your Journey </Link>
          </motion.button>
        </motion.div>

        {/* Right 3D Canvas */}

        <div className="w-full md:w-1/2 h-[450px] md:h-[600px] relative z-10">
          {/* Canvas */}
          <Canvas
            shadows
            camera={{ position: [0, 0, 5], fov: 50 }}
            style={{
              background: "linear-gradient(135deg, #f9f7f6 0%, #e0f7f9 100%)",
              borderRadius: "12px",
              borderRadius: "12px",
            }} // ← Off-white background
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
            <PulsingSphere />
          </Canvas>

          {/* Overlayed Text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h3 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
              Explore Innovation
            </h3>
            <p className="text-white text-sm md:text-base mt-2 opacity-80">
              A futuristic visual powered by Tech Digital solutions
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function PulsingSphere() {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.material.distort = 0.3 + 0.2 * Math.sin(t * 3);
      ref.current.material.speed = 1 + 0.5 * Math.cos(t * 2);
      ref.current.rotation.y += 0.005;
      ref.current.rotation.x = 0.1 * Math.sin(t * 1.5);
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.5, 128, 128]} />
      <MeshDistortMaterial
        ref={ref}
        color="#00a2ad"
        attach="material"
        distort={0.5}
        speed={1.5}
        roughness={0.1}
        metalness={0.7}
      />
    </mesh>
  );
}
