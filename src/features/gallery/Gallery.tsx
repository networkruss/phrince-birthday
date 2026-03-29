"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

const images = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
  "/8.jpg",
  "/9.jpg",
  "/10.jpg",
  "/11.jpg",
  "/12.jpg"
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight flex items-center justify-center gap-3">
          <Camera size={40} className="text-red-500" />
          Player <span className="text-red-600 underline">Moments</span>
        </h2>
        <p className="opacity-70 mt-2 italic">Epic highlights from Level 1 to 6!</p>
      </div>

      <div className="relative group w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden border-4 border-red-600/50 shadow-[0_0_40px_rgba(226,35,26,0.3)] bg-black">
        {/* Images */}
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`Phrince moment ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                // If photo is missing, show a fallback gamer box
                e.currentTarget.src = "/phrince-profile.jpg"; 
              }}
            />
          </div>
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-red-600 text-white p-3 rounded-full border border-white/20 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-red-600 text-white p-3 rounded-full border border-white/20 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all rounded-full ${
                index === currentIndex ? "w-8 h-3 bg-red-600 shadow-[0_0_10px_red]" : "w-3 h-3 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
