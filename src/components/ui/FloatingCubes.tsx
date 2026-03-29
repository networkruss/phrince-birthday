"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function FloatingCubes() {
  const pathname = usePathname();
  const [cubes, setCubes] = useState<{ id: number; left: number; delay: number; duration: number; size: number }[]>([]);

  // Only render on client side to avoid hydration mismatch
  useEffect(() => {
    // Do not render on print/snapshot pages
    if (pathname === "/print") return;

    // Generate 15 random cubes
    const generatedCubes = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // 0 to 100%
      delay: Math.random() * 5, // 0 to 5s delay
      duration: 10 + Math.random() * 15, // 10s to 25s float duration
      size: 20 + Math.random() * 40, // 20px to 60px size
    }));
    setCubes(generatedCubes);
  }, [pathname]);

  if (pathname === "/print" || cubes.length === 0) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {cubes.map((cube) => (
        <div
          key={cube.id}
          className="absolute bottom-[-100px] bg-sky-500/10 border border-sky-400/20 shadow-[0_0_15px_rgba(56,189,248,0.2)] rounded-lg backdrop-blur-sm animate-float"
          style={{
            left: `${cube.left}%`,
            width: `${cube.size}px`,
            height: `${cube.size}px`,
            animationDelay: `${cube.delay}s`,
            animationDuration: `${cube.duration}s`,
          }}
        >
          {/* Inner 3D-like detail */}
          <div className="absolute inset-1 border border-sky-300/10 rounded pointer-events-none"></div>
        </div>
      ))}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 20%;
          }
          100% {
            transform: translateY(-120vh) rotate(360deg);
            opacity: 0;
            border-radius: 50%;
          }
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}} />
    </div>
  );
}
