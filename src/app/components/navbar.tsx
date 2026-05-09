// app/components/navbar.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Prevent body scroll when fullscreen menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Focus trap - focus close button when menu opens
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Facility & Infrastructure', href: '/facility' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const handleGetInTouch = () => {
    setIsMobileMenuOpen(false);
    router.push('/contact');
  };

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ========== STICKY SHRINKING NAVBAR ========== */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
          isScrolled 
  ? 'bg-white/95 backdrop-blur-md shadow-lg py-1' 
  : 'bg-white/10 backdrop-blur-xl border-b border-white/20 py-2'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Logo */}
            <Link
              href="/"
              className="flex items-center transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#E58A2F] rounded-lg"
              aria-label="Seveillar Home"
            >
              <img
                src="/logo.png"
                alt="Seveillar Logo"
                className={`object-contain transition-all duration-500 ${
                  isScrolled
                    ? 'h-16 md:h-20'
                    : 'h-20 md:h-24'
                }`}
              />
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const active = isActiveLink(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-medium transition-all duration-300 hover:text-[#E58A2F] group ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  } ${active ? 'text-[#E58A2F]' : ''}`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.name}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#E58A2F] transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={handleGetInTouch}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#E58A2F] focus:ring-offset-2 ${
                isScrolled
                  ? 'bg-[#E58A2F] text-white hover:bg-[#0E3B5F] shadow-md'
                  : 'bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-[#0E3B5F]'
              }`}
              aria-label="Get in touch with Seveillar"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button - Hamburger with animation */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`md:hidden p-2 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E58A2F] ${
              isScrolled ? 'text-[#0E3B5F]' : 'text-white'
            }`}
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            aria-haspopup="true"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-7 h-7"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ========== FULLSCREEN OVERLAY MOBILE MENU ========== */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-0 z-[100] transition-all duration-700 ease-in-out ${
          isMobileMenuOpen 
            ? 'visible opacity-100' 
            : 'invisible opacity-0 pointer-events-none'
        }`}
        aria-modal="true"
        role="dialog"
        aria-label="Mobile navigation menu"
        inert={!isMobileMenuOpen}
      >
        {/* Dark/Light overlay background with smooth fade */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E3B5F] via-[#1a4a6e] to-[#0a2a44]"></div>
        
        {/* Decorative abstract circles for modern feel */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#E58A2F]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        {/* Close button — positioned top right */}
        <button
          ref={closeButtonRef}
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover:rotate-90 focus:outline-none focus:ring-2 focus:ring-[#E58A2F]"
          aria-label="Close menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Fullscreen Menu Content — HUGE TYPOGRAPHY */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 overflow-y-auto">
          {/* Animated nav links container — staggered fade-in */}
          <div className="space-y-8 md:space-y-12 text-center w-full max-w-4xl">
            {navLinks.map((link, index) => {
              const active = isActiveLink(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-4xl md:text-6xl lg:text-7xl font-bold transition-all duration-300 hover:scale-110 hover:tracking-wider focus:outline-none focus:text-[#E58A2F] ${
                    active ? 'text-[#E58A2F]' : 'text-white/90 hover:text-[#E58A2F]'
                  }`}
                  style={{
                    animation: isMobileMenuOpen ? `fadeInUp 0.5s ease-out ${index * 0.08}s forwards` : 'none',
                    opacity: 0,
                    transform: 'translateY(30px)'
                  }}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <button
            onClick={handleGetInTouch}
            className="mt-12 px-10 py-4 bg-[#E58A2F] text-white text-xl font-semibold rounded-full hover:bg-white hover:text-[#0E3B5F] transition-all duration-300 transform hover:scale-105 shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#E58A2F] focus:ring-offset-2 focus:ring-offset-[#0E3B5F]"
            style={{
              animation: isMobileMenuOpen ? `fadeInUp 0.5s ease-out 0.4s forwards` : 'none',
              opacity: 0,
              transform: 'translateY(30px)'
            }}
            aria-label="Get in touch with Seveillar"
          >
            Get In Touch ✨
          </button>

          {/* Footer text / brand */}
          <p
            className="absolute bottom-8 left-0 right-0 text-center text-white/40 text-sm tracking-wide"
            style={{
              animation: isMobileMenuOpen ? `fadeInUp 0.5s ease-out 0.6s forwards` : 'none',
              opacity: 0,
            }}
          >
            Seveillar — Crafting Digital Excellence
          </p>
        </div>
      </div>

      {/* Global styles for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          /* Smooth scroll behavior for the whole site */
          html {
            scroll-behavior: smooth;
          }
          
          /* Focus visible outline for better accessibility */
          *:focus-visible {
            outline: 2px solid #E58A2F;
            outline-offset: 2px;
          }
          
          /* Inert polyfill for older browsers */
          [inert] {
            pointer-events: none;
            cursor: default;
          }
          
          [inert] * {
            pointer-events: none;
          }
        `
      }} />
    </>
  );
}