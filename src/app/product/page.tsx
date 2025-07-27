'use client'

import React from 'react';
import { Package } from 'lucide-react';

const ProductPage: React.FC = () => {
  return (
    <div className="h-screen bg-gray-50">
      <section className="h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-42 md:py-52 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/assets/images/productBG.jpg')"
          }}
        />
        <div className="relative container mx-auto px-3 sm:px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-lg px-4 py-2 mb-6 border border-yellow-500/30">
            <Package className="w-4 h-4 text-yellow-400" />
            <span className="text-sm md:text-base">Produk Kami</span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-6 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] bg-clip-text text-transparent leading-tight">
            Produk Yang Kami Sediakan
          </h1>

          <p className="text-sm md:text-base lg:text-lg xl:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-8">
            Kami menyediakan beragam material fasad berkualitas seperti ACP, rangka hollow, dan aksesoris pendukung untuk kebutuhan eksterior dan interior bangunan.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
