"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBlob() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const image = new Image();
    image.src = "/ProPicture.jpg";
    image.crossOrigin = "anonymous";

    image.onload = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 80;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Clip to a circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();

      ctx.drawImage(
        image,
        centerX - radius,
        centerY - radius,
        radius * 2,
        radius * 2
      );
    };
  }, []);

  return (
    <div className="relative w-[200px] h-[200px] flex-shrink-0">
      <canvas
        ref={canvasRef}
        width={200}
        height={200}
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
}
