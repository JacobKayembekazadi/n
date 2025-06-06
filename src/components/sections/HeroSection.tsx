
"use client";

import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import FloatingParticles from '@/components/FloatingParticles';
import Link from 'next/link';

export default function HeroSection() {
  const [gradientAngle, setGradientAngle] = useState(135);
  const [taglineText, setTaglineText] = useState("");
  const fullTagline = "AI enabled Full Stack Marketer at the forefront of digital transformation";
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientAngle((prevAngle) => prevAngle + 0.2);
    }, 50);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullTagline.length) {
        setTaglineText(prev => prev + fullTagline.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 60);

    // Ensure initial visibility for animation
    if (heroRef.current) {
      heroRef.current.style.opacity = '1';
    }

    return () => clearInterval(typingInterval);
  }, []);


  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector("#contact");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center text-center text-white relative overflow-hidden py-20 px-4"
      style={{ background: `linear-gradient(${gradientAngle}deg, #667eea 0%, #764ba2 100%)`, opacity: 0, transition: 'opacity 0.5s ease-in' }}
    >
      <FloatingParticles count={20} />
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp font-headline"
          style={{ animationDelay: '0.3s' }}
        >
          Jacob Kazadi Kayembe
        </h1>
        <p 
          className="text-xl sm:text-2xl mb-8 animate-fadeInUp text-background/90"
          style={{ animationDelay: '0.6s', minHeight: '3em' }} // minHeight for typing
        >
          {taglineText}
          <span className="animate-pulse">|</span>
        </p>
        <p 
          className="text-lg sm:text-xl mb-12 animate-fadeInUp leading-relaxed text-background/80"
          style={{ animationDelay: '0.9s' }}
        >
          I don&apos;t just use AI tools — I map them to real-world problems. My strength lies in bridging the gap between innovative ideas and robust, automated systems.
        </p>
        <Link
          href="#contact"
          onClick={handleCTAClick}
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-full font-semibold text-lg animate-fadeInUp shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-105"
          style={{ animationDelay: '1.2s' }}
        >
          Let&apos;s Transform Together
        </Link>
      </div>
    </section>
  );
}
