"use client";

import { useEffect, useRef } from "react";

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Star class
    class Star {
      x: number;
      y: number;
      z: number;
      prevX: number;
      prevY: number;
      speed: number;
      size: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.prevX = this.x;
        this.prevY = this.y;
        this.speed = Math.random() * 0.5 + 0.1;
        this.size = Math.random() * 2 + 0.5;
        this.opacity = Math.random() * 0.8 + 0.2;
      }

      update() {
        this.prevX = this.x;
        this.prevY = this.y;
        this.z -= this.speed;
        
        if (this.z <= 0) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.z = 1000;
          this.prevX = this.x;
          this.prevY = this.y;
        }

        // Calculate screen position
        const k = 128 / this.z;
        this.x = this.x * k + canvas.width / 2;
        this.y = this.y * k + canvas.height / 2;
      }

      draw() {
        if (ctx) {
          ctx.beginPath();
          ctx.moveTo(this.prevX, this.prevY);
          ctx.lineTo(this.x, this.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
          ctx.lineWidth = this.size;
          ctx.stroke();

          // Draw star point
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
          ctx.fill();
        }
      }
    }

    // Create stars
    const stars: Star[] = [];
    for (let i = 0; i < 100; i++) {
      stars.push(new Star());
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)" }}
      />
    </div>
  );
}
