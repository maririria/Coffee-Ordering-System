'use client';
import { useEffect, useState } from 'react';
import '../globals.css';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const videos = [
    '/videos/v1.mp4',
    '/videos/v2.mp4',
    '/videos/v8.mp4',
    '/videos/v6.mp4',
  ];

  const quotes = [
    "Coffee is a language in itself",
    "Life begins after coffee",
    "Good ideas start with great coffee",
    "Brewing happiness in every cup"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {videos.map((videoSrc, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src={videoSrc}
            type="video/mp4"
          />
          <div className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 text-center w-[80%] z-20 animate-slideUp">
            <div className="text-white font-bold text-[2.8rem] font-['Playfair_Display'] leading-[1.2] tracking-[1px] mb-6 drop-shadow-lg">
              "{quotes[index]}"
            </div>
            <a href="/menu">
              <button className="shine-hover bg-gradient-to-r from-[#3b1f1f] via-[#7b3e2e] to-[#3b1f1f] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-transform hover:-translate-y-1">
                Experience Kaif!
              </button>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}