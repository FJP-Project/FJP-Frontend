import React from 'react';
import { Instagram, MessageCircle, Phone, Mail, Globe } from 'lucide-react';
import { FaTiktok } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="text-white pt-12 pb-4 px-4" style={{ backgroundColor: '#0f0f0f' }} role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="lg:col-span-1">
            <div className="mb-6">
            <div className="relative w-[90px] h-[60px] md:w-[110px] md:h-[80px]">
              <Image
                src="/assets/images/logo.png"
                alt="FJP - Fahresa Jaya Pratama Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
              <p className="text-gray-300 text-sm sm:text-md leading-relaxed">
                <span className="font-semibold">Fahresa Jaya Pratama</span> jawaban terbaik untuk semua kebutuhan finishing fasad gedung anda.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-yellow-400 font-bold text-md md:text-lg mb-4 uppercase tracking-wider">
              Navigasi
            </h3>
            <nav>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm flex items-center gap-2"
                    aria-label="Beranda - Halaman utama FJP">
                      <span className='w-2 h-2 bg-yellow-400 rounded-sm'></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tentang"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm flex items-center gap-2"
                    aria-label="Tentang - Informasi tentang FJP">
                    <span className='w-2 h-2 bg-yellow-400 rounded-sm'></span>
                    Tentang
                  </Link>
                </li>
                <li>
                  <Link
                    href="/project"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm flex items-center gap-2"
                    aria-label="Project - Portfolio proyek FJP" >
                    <span className='w-2 h-2 bg-yellow-400 rounded-sm'></span>
                    Project
                  </Link>
                </li>
                <li>
                  <Link
                    href="/produk"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm flex items-center gap-2"
                    aria-label="Produk - Layanan dan produk FJP" >
                    <span className='w-2 h-2 bg-yellow-400 rounded-sm'></span>
                    Produk
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm flex items-center gap-2"
                    aria-label="Blog - Artikel dan berita FJP">
                    <span className='w-2 h-2 bg-yellow-400 rounded-sm'></span>
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="text-yellow-400 font-bold text-md md:text-lg mb-4 uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Globe className="w-4 h-4 text-gray-900" />
                </div>
                <Link
                  href="https://fjpofficial.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm flex items-center gap-2"
                  aria-label="Website resmi FJP">
                  fjpofficial.com
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-gray-900" />
                </div>
                <Link
                  href="https://wa.me/+6281230333933/"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm flex items-center gap-2"
                  aria-label="Telepon FJP">
                  0812-3033-3933
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-gray-900" />
                </div>
                <Link
                  href="mailto:fjp.indo@gmail.com"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm flex items-center gap-2"
                  aria-label="Email FJP">
                  support@fjpofficial.com
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-yellow-400 font-bold text-md md:text-lg mb-4 uppercase tracking-wider">
              Follow Us
            </h3>
            <div className="flex space-x-3">
              <Link
                href="https://instagram.com/fjpofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 rounded-sm flex items-center justify-center hover:bg-pink-700 transition-colors duration-200"
                aria-label="Instagram FJP">
                <Instagram className="w-5 h-5 text-white" />
              </Link>

              <Link
                href="https://wa.me/6281230333933"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-sm flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
                aria-label="WhatsApp FJP">
                <MessageCircle className="w-5 h-5 text-white" />
              </Link>

              <Link
                href="https://tiktok.com/@fjpofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-800 rounded-sm flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                aria-label="TikTok FJP" >
                <FaTiktok />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-white">
          <div className="mb-4 sm:mb-0">
            <p className="text-gray-400 text-sm">
              Copyright © 2020 | <span className="text-yellow-400 font-semibold">FJP</span> | All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center space-x-4 text-sm">
            <Link
              href="/faq"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              aria-label="FAQ - Frequently Asked Questions" >
              FAQ
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/terms-of-service"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              aria-label="Terms of Service - Syarat dan Ketentuan">
              Terms of Service
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              aria-label="Privacy Policy - Kebijakan Privasi">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
