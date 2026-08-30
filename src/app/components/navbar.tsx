// app/components/navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, LayoutGroup } from "framer-motion";

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
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Escape key close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Facility & Infrastructure", href: "/facility" },
    { name: "Why Us", href: "/whyus" },
    { name: "Contact Us", href: "/contact" },
  ];

  const handleGetInTouch = () => {
    setIsMobileMenuOpen(false);
    router.push("/contact");
  };

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-full z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-white/75 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/30 py-2"
            : "bg-white/10 backdrop-blur-2xl border border-white/15 py-3"
        }`}
        aria-label="Main navigation"
      >
        <div className="px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-all duration-500 focus:outline-none rounded-full"
            aria-label="Seveillar Home"
          >
            <img
              src="/logo.png"
              alt="Seveillar Logo"
              className={`object-contain transition-all duration-500 scale-125 origin-left ${
                isScrolled ? "h-14 md:h-16" : "h-16 md:h-20"
              }`}
            />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <LayoutGroup>
            <div
              className={`hidden md:flex items-center gap-1 p-2 rounded-full border transition-all duration-500 backdrop-blur-2xl ${
                isScrolled
                  ? "bg-white/50 border-white/20"
                  : "bg-white/5 border-white/10"
              }`}
            >
              {navLinks.map((link) => {
                const active = isActiveLink(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative px-5 py-2.5 rounded-full overflow-hidden"
                  >
                    {/* Liquid Active Pill */}
                    {active && (
                      <motion.div
                        layoutId="liquid-pill"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 35,
                        }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E58A2F] to-orange-500 shadow-[0_4px_20px_rgba(229,138,47,0.45)]"
                      />
                    )}

                    {/* Hover Layer */}
                    <motion.div
                      whileHover={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      className="absolute inset-0 rounded-full bg-white/10"
                    />

                    {/* Text */}
                    <span
                      className={`relative z-10 text-sm font-medium tracking-wide transition-colors duration-300 ${
                        active
                          ? "text-white"
                          : isScrolled
                          ? "text-gray-700 hover:text-[#E58A2F]"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </LayoutGroup>

          {/* ================= CTA ================= */}
          <div className="hidden md:block">
            <button
              onClick={handleGetInTouch}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? "bg-[#E58A2F] text-white shadow-lg hover:bg-orange-600"
                  : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-[#E58A2F]"
              }`}
            >
              Get In Touch
            </button>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`md:hidden p-2 rounded-full transition-all duration-300 ${
              isScrolled ? "text-[#0E3B5F]" : "text-white"
            }`}
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-0 z-[100] transition-all duration-700 ease-in-out ${
          isMobileMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E3B5F] via-[#1a4a6e] to-[#0a2a44]" />

        {/* Glow Effects */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#E58A2F]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        {/* Close */}
        <button
          ref={closeButtonRef}
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover:rotate-90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Menu Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 overflow-y-auto">
          <div className="space-y-8 md:space-y-12 text-center w-full max-w-4xl">
            {navLinks.map((link, index) => {
              const active = isActiveLink(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-4xl md:text-6xl lg:text-7xl font-bold transition-all duration-300 hover:scale-110 hover:tracking-wider ${
                    active
                      ? "text-[#E58A2F]"
                      : "text-white/90 hover:text-[#E58A2F]"
                  }`}
                  style={{
                    animation: isMobileMenuOpen
                      ? `fadeInUp 0.5s ease-out ${index * 0.08}s forwards`
                      : "none",
                    opacity: 0,
                    transform: "translateY(30px)",
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <button
            onClick={handleGetInTouch}
            className="mt-12 px-10 py-4 bg-[#E58A2F] text-white text-xl font-semibold rounded-full hover:bg-white hover:text-[#0E3B5F] transition-all duration-300 hover:scale-105 shadow-2xl"
            style={{
              animation: isMobileMenuOpen
                ? `fadeInUp 0.5s ease-out 0.4s forwards`
                : "none",
              opacity: 0,
              transform: "translateY(30px)",
            }}
          >
            Get In Touch ✨
          </button>

          {/* Footer */}
          <p
            className="absolute bottom-8 left-0 right-0 text-center text-white/40 text-sm tracking-wide"
            style={{
              animation: isMobileMenuOpen
                ? `fadeInUp 0.5s ease-out 0.6s forwards`
                : "none",
              opacity: 0,
            }}
          >
            Seveillar — Crafting Digital Excellence
          </p>
        </div>
      </div>

      {/* ================= GLOBAL STYLES ================= */}
      <style
        dangerouslySetInnerHTML={{
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

            html {
              scroll-behavior: smooth;
            }
          `,
        }}
      />
    </>
  );
}