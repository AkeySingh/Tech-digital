import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    const speed = 0.15;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const loop = () => {
      posX += (mouseX - posX) * speed;
      posY += (mouseY - posY) * speed;
      follower.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", moveCursor);
    loop();

    // Handle magnetic hover effect
    const hoverTargets = document.querySelectorAll("a, button, .cursor-hover");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-hovered");
        follower.classList.add("follower-hovered");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-hovered");
        follower.classList.remove("follower-hovered");
      });
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={followerRef}
        className="fixed top-0 left-0 z-[9998] w-10 h-10 rounded-full bg-[#00a2ad] opacity-30 pointer-events-none blur-md transition-transform duration-300 ease-out"
      ></div>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] w-4 h-4 rounded-full bg-[#f6a801] pointer-events-none transition-transform duration-200 ease-out"
      ></div>
    </>
  );
}
