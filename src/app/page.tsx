'use client'

import { Star } from 'lucide-react';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="h-screen bg-gray-50">
      <section className="h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-42 md:py-52 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/assets/images/homeBG.jpg')"
          }}/>
        <div className="relative container mx-auto px-3 sm:px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-lg px-4 py-2 mb-6 border border-yellow-500/30">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm md:text-base">Welcome To</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-6 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] bg-clip-text text-transparent leading-tight">
            Fahresa Jaya Pratama
          </h1>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-4">
            Fahresa Jaya Pratama, solusi terbaik untuk semua kebutuhan finishing fasad gedung Anda. menghadirkan kualitas, ketepatan, dan keindahan dalam setiap detail pengerjaan.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
