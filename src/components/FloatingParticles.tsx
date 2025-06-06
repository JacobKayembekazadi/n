"use client";

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  top: string;
  left: string;
  animationDelay: string;
  animationDuration: string;
  size: string;
}

export default function FloatingParticles({ count = 15 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${Math.random() * 4 + 4}s`,
          size: `${Math.random() * 2 + 2}px`, // 2px to 4px
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    // Optionally, regenerate particles periodically if desired
    // const intervalId = setInterval(generateParticles, 10000);
    // return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-white/30 rounded-full animate-floatParticle"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.animationDelay,
            animationDuration: particle.animationDuration,
          }}
        />
      ))}
    </div>
  );
}
