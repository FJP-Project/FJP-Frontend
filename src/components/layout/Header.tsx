'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Tentang' },
    { href: '/project', label: 'Proyek Kami' },
    { href: '/product', label: 'Produk Kami' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'backdrop-blur-md bg-black/90 shadow-lg'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Navigasi utama">
        <div className="max-w-7xl mx-auto py-2 sm:py-3 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center group"
              aria-label="Beranda FJP">
              <div className="relative w-18 h-24 sm:w-24 sm:h-24 mr-2">
                <Image
                  src="/assets/images/logo.png"
                  alt="Logo Fahresa Jaya Pratama"
                  fill
                  className="object-contain"
                  priority
                />
                <span className="sr-only">FJP - Fahresa Jaya Pratama</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <ul className="flex space-x-6 items-center">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-sm group ${
                        pathname === item.href ? 'text-yellow-400' : 'text-white'
                      }`}
                      aria-current={pathname === item.href ? 'page' : undefined}>
                      {item.label}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                          pathname === item.href
                            ? 'w-full'
                            : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/sign-in"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
                Sign In
              </Link>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-sm text-white hover:bg-white/10 transition-colors duration-300"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Buka menu mobile">
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isMobileMenuOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
        aria-hidden={!isMobileMenuOpen}
      />

      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-80 bg-black/90 backdrop-blur-md border-l border-white/20 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="flex flex-col h-full pt-20 px-6">
          <button
            onClick={closeMobileMenu}
            className="absolute top-4 right-4 p-2 rounded-sm text-white hover:bg-white/10 transition-colors duration-300"
            aria-label="Tutup menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav aria-label="Navigasi mobile" className="space-y-4">
            <ul>
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 text-base font-medium transition-all duration-300 rounded-sm hover:bg-white/10 hover:text-yellow-400 transform hover:translate-x-2 ${
                      pathname === item.href
                        ? 'text-yellow-400 bg-white/20 border-l-4 border-yellow-400'
                        : 'text-white'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    aria-current={pathname === item.href ? 'page' : undefined}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/sign-in"
              onClick={closeMobileMenu}
              className="block w-full mt-8 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-3 rounded-sm font-medium text-center transition-all duration-300 transform hover:scale-105">
              Sign In
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
