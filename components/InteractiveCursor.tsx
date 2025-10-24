"use client";

import { useEffect, useRef } from "react";

export default function InteractiveCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorFollower = cursorFollowerRef.current;
    
    if (!cursor || !cursorFollower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      // Smooth cursor movement
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;

      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
      cursorFollower.style.left = followerX + "px";
      cursorFollower.style.top = followerY + "px";

      requestAnimationFrame(animateCursor);
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
      cursorFollower.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
      cursorFollower.style.opacity = "0";
    };

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.classList.contains("interactive")) {
        cursor.style.transform = "scale(2)";
        cursorFollower.style.transform = "scale(0.5)";
        cursor.style.backgroundColor = "rgba(255, 107, 107, 0.9)";
        cursor.style.boxShadow = "0 0 20px rgba(255, 107, 107, 0.6)";
      } else {
        cursor.style.transform = "scale(1)";
        cursorFollower.style.transform = "scale(1)";
        cursor.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        cursor.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.4)";
      }
    };

    document.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    animateCursor();

    return () => {
      document.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-200 ease-out"
        style={{ opacity: 0 }}
      />
      {/* Cursor follower */}
      <div
        ref={cursorFollowerRef}
        className="fixed w-8 h-8 border-2 border-white rounded-full pointer-events-none z-40 transition-all duration-300 ease-out"
        style={{ opacity: 0, boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)" }}
      />
    </>
  );
}
