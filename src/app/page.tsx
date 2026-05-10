'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const worldMapRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      title: "Global Clinical Supply Management",
      subtitle: "Supporting Clinical Trials Worldwide",
      video: "/videos/clinical-supply-bg.mp4",
      fallbackBg: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Precision. Compliance. Reliability.",
      subtitle: "End-to-End Clinical Supply Solutions",
      video: "/videos/precision-bg.mp4",
      fallbackBg: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Trusted Global Clinical Trial Partner",
      subtitle: "Efficient Distribution Across Global Regions",
      video: "/videos/global-trial-bg.mp4",
      fallbackBg: "https://images.unsplash.com/photo-1581092335873-4b5b7d7e8f9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  const statistics = [
    { value: 50, suffix: "+", label: "Global Trials", description: "Successfully Managed" },
    { value: 25, suffix: "", label: "Countries", description: "Worldwide Reach" },
    { value: 100, suffix: "%", label: "Compliance", description: "cGMP & GDP Standards" },
    { value: 200, suffix: "+", label: "Clinical Sites", description: "Supported Globally" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = document.querySelectorAll('.stat-counter');
            counters.forEach((counter) => {
              const counterElement = counter as HTMLElement;
              const target = parseInt(counterElement.getAttribute('data-target') || '0');
              const suffix = counterElement.getAttribute('data-suffix') || '';
              let current = 0;
              const increment = target / 60;
              const updateCounter = () => {
                if (current < target) {
                  current = Math.min(current + increment, target);
                  counterElement.innerText = Math.floor(current) + suffix;
                  requestAnimationFrame(updateCounter);
                } else {
                  counterElement.innerText = target + suffix;
                }
              };
              updateCounter();
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
  }, []);

  const services = [
    {
      title: "Clinical Supplies Consultancy & Project Management",
      desc: "Strategic planning and end-to-end project management solutions for efficient global clinical supply execution.",
      points: ["Supply Chain Consultation", "Clinical Supply Strategy", "Risk Management", "Study Start-up Support"],
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
      title: "Clinical Supplies Manufacturing",
      desc: "Manufacturing solutions for placebo and active dosage forms supported by qualified cGMP facilities.",
      points: ["Placebo Manufacturing", "Active Dosage Forms", "Over Encapsulation", "Third-Party cGMP Partnerships"],
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    },
    {
      title: "Comparator & Ancillary Supplies Sourcing",
      desc: "Global sourcing capabilities ensuring compliant procurement and supply continuity for clinical trials.",
      points: ["Comparator Drug Sourcing", "Approved Global Wholesalers", "Cold Chain Management", "Traceability & Documentation"],
      icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M7 19h10M9 13v6M15 13v6"
    },
    {
      title: "Clinical Supplies Blinding, Packaging & Labeling",
      desc: "Customized packaging and labeling solutions maintaining protocol compliance and study blinding integrity.",
      points: ["Blinding Strategy Design", "Primary & Secondary Packaging", "Multi-language Labels", "Protocol-Specific Solutions"],
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Storage, Distribution & Global Logistics Management",
      desc: "Temperature-controlled storage and global logistics management ensuring secure clinical supply distribution.",
      points: ["15°C–25°C Storage", "Cold Chain Distribution", "Global Depot Network", "GDP/cGMP Compliance"],
      icon: "M5 13l4 4L19 7"
    },
    {
      title: "IVRS / IWRS (IRT) Services",
      desc: "Customized interactive response technology solutions for efficient patient randomization and supply tracking.",
      points: ["Patient Randomization", "Site Resupply", "Enrollment Tracking", "24×7 Global Support"],
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    },
  ];

  const whyUs = [
    { title: "Global Compliance Standards", desc: "USFDA-audited and QP-certified operational infrastructure." },
    { title: "End-to-End Clinical Supply Solutions", desc: "Complete support from sourcing to global distribution." },
    { title: "Global Network & Reach", desc: "Strategic worldwide logistics and sourcing capabilities." },
    { title: "Quality & Regulatory Excellence", desc: "Strict adherence to cGMP, GDP, WHO, and regional regulations." },
    { title: "Temperature-Controlled Infrastructure", desc: "Validated storage systems from ambient to ultra-low temperatures." },
    { title: "Experienced Clinical Supply Team", desc: "Dedicated professionals with deep expertise in clinical trial operations." },
  ];

  const certifications = [
    "USFDA Audited", "QP Certified", "ISO 9001:2015", "GDP Compliant"
  ];

  const floatingStats = [
    { number: "2015", label: "Founded" },
    { number: "50+", label: "Global Trials" },
    { number: "25+", label: "Countries" },
    { number: "100%", label: "Compliance Focus" },
  ];

  const floatingPills = [
    "✓ 2015 Founded",
    "✓ USFDA Audited", 
    "✓ Global Trials",
    "✓ QP Certified"
  ];

  return (
    <>
    <Navbar />
    <main className="overflow-hidden bg-white">
      {/* Hero Section - Added bottom padding for overlap */}
      <div ref={heroRef} className="relative min-h-screen w-full overflow-hidden pb-32 md:pb-40">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster={slide.fallbackBg}
            >
              <source src={slide.video} type="video/mp4" />
            </video>
            {/* Gradient Overlay - Orange/Maroon theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[#800020]/40"></div>
            
            <div className="relative z-10 flex h-full items-center justify-between px-6 md:px-20 max-w-7xl mx-auto">
              <div className="text-white max-w-2xl animate-fade-up">
                <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-sm font-semibold mb-4 border border-white/20 shadow-lg">
                  Seveillar Clinical Supplies
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90 max-w-xl">{slide.subtitle}</p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#F97316] hover:bg-[#800020] text-white px-8 py-3 rounded-md font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
                    Explore Services
                  </button>
                  <button className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
              
              <div className="hidden lg:block w-80 animate-float">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-2xl">
                  <div className="text-center text-white">
                    <div className="text-5xl font-bold text-[#F97316]">20+</div>
                    <div className="text-sm uppercase tracking-wider mt-1">Years Combined Experience</div>
                    <hr className="my-3 border-white/20" />
                    <div className="text-5xl font-bold text-[#F97316]">24/7</div>
                    <div className="text-sm uppercase tracking-wider mt-1">Global Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                activeSlide === index ? 'bg-[#F97316] w-8' : 'bg-white/50 w-4 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
        
        <div className="absolute bottom-8 right-8 hidden md:block z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Floating Overlap Cards - Premium Design with backdrop blur */}
      <section className="relative z-40 px-6 md:px-20 -mt-10 md:-mt-16 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {floatingStats.map((item, index) => (
              <div
                key={index}
                className="group bg-white/95 backdrop-blur-xl border border-white/40 rounded-3xl p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(255,115,0,0.15)] hover:-translate-y-2 transition-all duration-500"
              >
                {/* Orange Accent */}
                <div className="w-12 h-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-300 mb-5" />

                {/* Number */}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                  {item.number}
                </h3>

                {/* Label */}
                <p className="mt-2 text-sm md:text-base text-gray-600 font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PREMIUM EDITORIAL ABOUT SECTION ========== */}
      {/* Added white background and proper padding */}
      <section className="relative bg-white pt-16 md:pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
          {/* Large Editorial Heading */}
          <div className="mb-14 md:mb-16 text-center lg:text-left">
            <div className="inline-block mb-6">
              <span className="text-xs font-mono tracking-wider text-[#F97316] bg-[#F97316]/5 px-3 py-1 rounded-full">MANIFESTO</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 leading-[1.1] max-w-4xl">
              Built for Global
              <br />
              <span className="font-bold text-[#800020]">Clinical Supply Excellence.</span>
            </h2>
            <div className="w-20 h-px bg-[#F97316] mt-8"></div>
          </div>

          {/* ========== HORIZONTAL PREMIUM IMAGE COLLAGE ========== */}
          <div className="relative mb-20 md:mb-24 -mx-2 md:-mx-4 lg:-mx-8">
            {/* Main Horizontal Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-14 gap-5 lg:gap-6 items-stretch">
              {/* Large Left Image */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-[28px] shadow-2xl group h-full">
                  <img
                    src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                    alt="Clinical facility"
                    className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Middle Image */}
              <div className="lg:col-span-3">
                <div className="relative overflow-hidden rounded-[26px] shadow-xl group h-full">
                  <img
                    src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Packaging process"
                    className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Vertical Stack */}
              <div className="lg:col-span-3 space-y-5">
                <div className="relative overflow-hidden rounded-[24px] shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Lab closeup"
                    className="w-full h-[250px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="relative overflow-hidden rounded-[24px] shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Global operations"
                    className="w-full h-[245px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Extra Side Image */}
              <div className="hidden lg:block lg:col-span-3">
                <div className="relative overflow-hidden rounded-[26px] shadow-xl group h-full">
                  <img
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Research laboratory"
                    className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Horizontal Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
              <div className="relative overflow-hidden rounded-[22px] shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                  alt="Clinical logistics"
                  className="w-full h-[190px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="relative overflow-hidden rounded-[22px] shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1580281657527-47f249e8f4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                  alt="Medical storage"
                  className="w-full h-[190px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="relative overflow-hidden rounded-[22px] shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                  alt="Clinical packaging"
                  className="w-full h-[190px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="relative overflow-hidden rounded-[22px] shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                  alt="Clinical analysis"
                  className="w-full h-[190px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Floating Pills */}
<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 w-full px-4">
  <div className="flex flex-wrap justify-center items-center gap-3 max-w-4xl mx-auto">

    {[
      "2015 Founded",
      "USFDA Audited",
      "Global Trials",
      "QP Certified",
    ].map((item, index) => (
      <span
        key={index}
        className="flex items-center justify-center min-w-[180px] h-12 bg-white/95 backdrop-blur-md text-[#800020] text-sm font-medium px-5 rounded-full shadow-lg border border-gray-100 tracking-wide whitespace-nowrap">
        ✓ {item}
      </span>
    ))}

  </div>
</div>
          </div>

          {/* Editorial Text Block + Metrics - Minimal, spacious */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-gray-500 text-sm uppercase tracking-wider font-mono">The Story</p>
                <p className="text-gray-700 text-lg leading-relaxed font-light">
                  Seveillar Clinical Supplies Services Pvt. Ltd. is a specialized clinical trial supplies management company providing end-to-end solutions for pharmaceutical, biotechnology, and CRO organizations globally.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed font-light">
                  Established in 2015, Seveillar delivers compliant, reliable, and efficient clinical supply chain solutions including packaging, labeling, storage, distribution, and clinical logistics management for global clinical studies.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed font-light">
                  With <span className="font-semibold text-[#800020]">QP-certified</span> and <span className="font-semibold text-[#800020]">USFDA-audited</span> infrastructure, Seveillar supports complex multi-regional clinical trials while maintaining the highest standards of quality, compliance, and operational excellence.
                </p>
              </div>
              <div className="pt-4">
                <button className="group inline-flex items-center gap-3 text-[#F97316] hover:text-[#800020] font-medium transition-colors border-b border-[#F97316]/30 pb-1">
                  <span>Read the full story</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Thin Horizontal Metrics - Very elegant */}
            <div className="space-y-10">
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-[28px] p-8 md:p-10 shadow-sm">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-light text-[#800020] tracking-tight">2015</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider mt-1 font-mono">Founded</div>
                  </div>
                  <div>
                    <div className="text-4xl font-light text-[#800020] tracking-tight">50<span className="text-2xl">+</span></div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider mt-1 font-mono">Global Trials</div>
                  </div>
                  <div>
                    <div className="text-4xl font-light text-[#800020] tracking-tight">25<span className="text-2xl">+</span></div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider mt-1 font-mono">Countries</div>
                  </div>
                  <div>
                    <div className="text-4xl font-light text-[#800020] tracking-tight">100<span className="text-2xl">%</span></div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider mt-1 font-mono">Compliance Focus</div>
                  </div>
                </div>
              </div>
              
              {/* Certification Badges - Minimal */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                {certifications.map((cert, i) => (
                  <span key={i} className="text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full tracking-wide">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

                {/* ========== PREMIUM SERVICES OVERVIEW - BENTO GRID ========== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-[#F97316]/5 px-4 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
              <span className="text-xs font-mono tracking-wider text-[#F97316] font-semibold">OUR CAPABILITIES</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1F2E] mb-5">
              Comprehensive Clinical
              <br />
              <span className="text-[#F97316]">Supply Solutions</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              End-to-end clinical trial supply management for pharmaceutical, 
              biotechnology, and CRO organizations worldwide.
            </p>
            <div className="w-12 h-0.5 bg-[#F97316]/40 mx-auto mt-8"></div>
          </div>

          {/* Wide Banner with Image - No Gradient */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl relative">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Clinical laboratory facility"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="relative z-20 px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="text-white">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold tracking-wide mb-3">
                  TRUSTED PARTNER SINCE 2015
                </div>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                  Supporting Global Clinical Trials Across 25+ Countries
                </h3>
                <p className="text-white/80 text-base md:text-lg mt-2 max-w-2xl">
                  USFDA-audited and QP-certified infrastructure with 100% compliance focus
                </p>
              </div>
              <div className="flex-shrink-0">
                <button className="bg-[#F97316] hover:bg-[#800020] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                  <span>Request a Consultation</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* 6 Equal Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* Card 1 - Consultancy & Project Management */}
            <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="h-1.5 w-full bg-[#F97316]"></div>
              <div className="p-6 md:p-7">
                <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center mb-5 group-hover:bg-[#F97316] transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#F97316] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">Clinical Supplies Consultancy & Project Management</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Strategic clinical supply planning, risk management, and end-to-end project oversight for global trials. Includes protocol review, demand forecasting, and study start-up support.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">Supply Chain Strategy</span>
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">Risk Mitigation</span>
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">Vendor Coordination</span>
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">Global Trial Support</span>
                </div>
                <button className="inline-flex items-center gap-2 text-sm font-medium text-[#F97316] hover:text-[#800020] transition-colors group/btn">
                  Learn More 
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 2 - Manufacturing */}
            <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="h-1.5 w-full bg-[#F97316]"></div>
              <div className="p-6 md:p-7">
                <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center mb-5 group-hover:bg-[#F97316] transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#F97316] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">Clinical Supplies Manufacturing</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  cGMP-compliant manufacturing for placebo and active dosage forms. Over encapsulation services and strategic partnerships with qualified third-party cGMP contract manufacturers.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">Placebo Manufacturing</span>
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">Active Dosage Forms</span>
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">Over Encapsulation</span>
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">cGMP Facilities</span>
                </div>
                <button className="inline-flex items-center gap-2 text-sm font-medium text-[#F97316] hover:text-[#800020] transition-colors group/btn">
                  Learn More 
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 3 - Comparator & Ancillary Sourcing */}
            <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="h-1.5 w-full bg-[#F97316]"></div>
              <div className="p-6 md:p-7">
                <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center mb-5 group-hover:bg-[#F97316] transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#F97316] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M7 19h10M9 13v6M15 13v6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">Comparator & Ancillary Supplies Sourcing</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Global sourcing of comparator drugs and ancillary supplies from approved wholesalers. Cold chain management, traceability, and complete documentation including CoA.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">Branded & Generic Comparators</span>
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">Medical Devices</span>
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">Lab Kits</span>
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">Temperature Monitoring</span>
                </div>
                <button className="inline-flex items-center gap-2 text-sm font-medium text-[#F97316] hover:text-[#800020] transition-colors group/btn">
                  Learn More 
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 4 - Blinding, Packaging & Labeling */}
            <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="h-1.5 w-full bg-[#F97316]"></div>
              <div className="p-6 md:p-7">
                <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center mb-5 group-hover:bg-[#F97316] transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#F97316] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">Clinical Supplies Blinding, Packaging & Labeling</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Primary packaging of oral solids, secondary packaging for all dosage forms under controlled temperatures. Multi-language labels, booklet labels, and expiry date extension labels.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">Blinding Strategy Design</span>
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">CRT 15-25°C / 2-8°C</span>
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">Multi-language Labels</span>
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">Protocol-Specific</span>
                </div>
                <button className="inline-flex items-center gap-2 text-sm font-medium text-[#F97316] hover:text-[#800020] transition-colors group/btn">
                  Learn More 
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 5 - Storage, Distribution & Logistics */}
            <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="h-1.5 w-full bg-[#F97316]"></div>
              <div className="p-6 md:p-7">
                <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center mb-5 group-hover:bg-[#F97316] transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#F97316] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">Storage, Distribution & Global Logistics Management</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Temperature-controlled storage from ambient to -80°C ultra-low. Global depot network, cold chain distribution, and GDP/cGMP compliant logistics across 25+ countries.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">CRT 15-25°C / 20-25°C</span>
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">Refrigerated 2-8°C</span>
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">Frozen -15 to -25°C</span>
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">ULT -80°C</span>
                </div>
                <button className="inline-flex items-center gap-2 text-sm font-medium text-[#F97316] hover:text-[#800020] transition-colors group/btn">
                  Learn More 
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 6 - IVRS/IWRS (IRT) Services */}
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="h-1.5 w-full bg-[#F97316]"></div>
              <div className="p-6 md:p-7">
                <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center mb-5 group-hover:bg-[#F97316] transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#F97316] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">IVRS / IWRS (IRT) Services</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Customized interactive response technology for patient randomization, site resupply management, cohort management, and enrollment tracking with 24×7 global support.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">Patient Randomization</span>
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">Site Resupply Management</span>
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">Enrollment Tracking</span>
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded">24×7 Global Call Support</span>
                </div>
                <button className="inline-flex items-center gap-2 text-sm font-medium text-[#F97316] hover:text-[#800020] transition-colors group/btn">
                  Learn More 
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* CTA Footer Line */}
          <div className="text-center mt-16 pt-4">
            <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-200 bg-white text-gray-700 font-semibold hover:bg-gray-50 hover:border-[#F97316]/30 hover:text-[#F97316] transition-all duration-300 shadow-sm">
              <span>View All Services</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ================= FACILITY INFRASTRUCTURE SECTION ================= */}
<section className="py-24 bg-[#f7f4f1] relative overflow-hidden">
  
  {/* Top Accent Line */}
  <div className="absolute top-14 left-0 w-full h-5 bg-[#E86A3A]"></div>

  <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 relative z-10">

    {/* Heading */}
    <div className="flex justify-center mb-16">
      <div className="bg-[#E8923A] px-12 md:px-24 py-5 rounded-full shadow-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          FACILITY
        </h2>
      </div>
    </div>

    {/* Facility Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="bg-white rounded-[38px] border border-[#EBC9A8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
        
        <div className="bg-[#EBC9A8] px-6 pt-10 pb-20 relative">
          <h3 className="text-3xl font-bold text-[#4A2D23] text-center leading-tight">
            Strategic Location
          </h3>

          {/* Icon */}
          <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 w-24 h-24 rounded-full bg-white border-2 border-[#EBC9A8] flex items-center justify-center shadow-md">
            <svg className="w-10 h-10 text-[#E86A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
        </div>

        <div className="px-7 pt-20 pb-8">
          <div className="h-px bg-[#EBC9A8] mb-7"></div>

          <ul className="space-y-5 text-gray-700 text-[15px] leading-relaxed">
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#D39A6D] mt-2"></span>
              Located in 5 Star MIDC (Industrial Zone), Ranjangaon, Pune-India
            </li>

            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#D39A6D] mt-2"></span>
              Facility is well connected to Road & Air Route
            </li>

            <li className="text-[#2D6BB2] font-semibold pt-2">
              Connectivity:
            </li>

            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#D39A6D] mt-2"></span>
              Connected to Airport by Four Way National Highway
            </li>

            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#D39A6D] mt-2"></span>
              50 Km from Pune Airport
            </li>

            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#D39A6D] mt-2"></span>
              180 Km from Mumbai Airport
            </li>
          </ul>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-[38px] border border-[#B8D7CD] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="bg-[#B8D7CD] px-6 pt-10 pb-20 relative">
          <h3 className="text-3xl font-bold text-[#214C44] text-center leading-tight">
            Packaging Areas
          </h3>

          <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 w-24 h-24 rounded-full bg-white border-2 border-[#B8D7CD] flex items-center justify-center shadow-md">
            <svg className="w-10 h-10 text-[#00A651]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"/>
            </svg>
          </div>
        </div>

        <div className="px-7 pt-20 pb-8">
          <div className="h-px bg-[#B8D7CD] mb-7"></div>

          <ul className="space-y-5 text-gray-700 text-[15px] leading-relaxed">
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#9BC8BB] mt-2"></span>
              2 Primary & Secondary Packaging High Class Maintained GMP Suites
            </li>

            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#9BC8BB] mt-2"></span>
              Clean Room ISO Class 8 for Primary Packaging Operations
            </li>

            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#9BC8BB] mt-2"></span>
              cGMP Grade Equipments for Packaging Operations
            </li>

            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#9BC8BB] mt-2"></span>
              Separate Provision for Personnel & Material Entry in Clean Room
            </li>

            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#9BC8BB] mt-2"></span>
              Provision of Alarms for Notifications in Case of Deviations
            </li>
          </ul>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-[38px] border border-[#E7D38A] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="bg-[#EEDB9C] px-6 pt-10 pb-20 relative">
          <h3 className="text-3xl font-bold text-[#4E4318] text-center leading-tight">
            Storage & Distribution
          </h3>

          <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 w-24 h-24 rounded-full bg-white border-2 border-[#E7D38A] flex items-center justify-center shadow-md">
            <svg className="w-10 h-10 text-[#7C6DB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 7h18M5 7v13h14V7M9 11h6M9 15h4"/>
            </svg>
          </div>
        </div>

        <div className="px-7 pt-20 pb-8">
          <div className="h-px bg-[#E7D38A] mb-7"></div>

          <ul className="space-y-5 text-gray-700 text-[15px] leading-relaxed">
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E7D38A] mt-2"></span>
              12000 Sq.Ft dedicated warehouse & distribution areas
            </li>

            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E7D38A] mt-2"></span>
              Dedicated cGMP, GDP & GWP compliant storage facilities
            </li>

            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E7D38A] mt-2"></span>
              Storage available at 15°C to 25°C, 2°C to 8°C, -15°C to -25°C & -80°C
            </li>

            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E7D38A] mt-2"></span>
              Restricted & controlled access to storage areas
            </li>

            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E7D38A] mt-2"></span>
              21 CFR Part 11 compliant monitoring & acquisition system
            </li>
          </ul>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-[38px] border border-[#E9CFC7] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">

        <div className="bg-[#E9CFC7] px-6 pt-10 pb-20 relative">
          <h3 className="text-3xl font-bold text-[#5B3C37] text-center leading-tight">
            Monitoring & Backup
          </h3>

          <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 w-24 h-24 rounded-full bg-white border-2 border-[#E9CFC7] flex items-center justify-center shadow-md">
            <svg className="w-10 h-10 text-[#E86A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17v-6m6 6V7m-9 10h12M5 21h14"/>
            </svg>
          </div>
        </div>

        <div className="px-7 pt-20 pb-8">
          <div className="h-px bg-[#E9CFC7] mb-7"></div>

          <ul className="space-y-5 text-gray-700 text-[15px] leading-relaxed">
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E9CFC7] mt-2"></span>
              DG backup to all cold rooms & critical AHU’s
            </li>

            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E9CFC7] mt-2"></span>
              100% standby for deep freezer & critical storage areas
            </li>

            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E9CFC7] mt-2"></span>
              24×7 surveillance through CCTV cameras
            </li>

            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E9CFC7] mt-2"></span>
              Fire alarm system
            </li>

            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E9CFC7] mt-2"></span>
              Fire fighting & sprinkler system
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>
{/* ================= MODERN COMPANY TIMELINE ================= */}
<section className="relative py-28 bg-[#f6f6f7] overflow-hidden">

  <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-16">

    {/* Header */}
    <div className="text-center mb-20">

      <div className="inline-flex items-center gap-2 border border-[#F97316]/30 px-5 py-2 rounded-full mb-6 bg-white">
        <span className="w-2 h-2 rounded-full bg-[#F97316]"></span>

        <span className="text-[#F97316] text-sm font-semibold tracking-[0.2em] uppercase">
          Our Journey
        </span>
      </div>

      <h2 className="text-5xl md:text-7xl font-black text-[#1F2940] tracking-tight">
        COMPANY TIMELINE
      </h2>

      <div className="flex items-center justify-center gap-4 mt-6">
        <div className="w-20 h-[2px] bg-gray-300"></div>

        <div className="w-3 h-3 rounded-full bg-[#F97316]"></div>

        <div className="w-20 h-[2px] bg-gray-300"></div>
      </div>

      <p className="text-gray-500 text-lg mt-6">
        A timeline of growth, innovation and excellence
      </p>

    </div>

    {/* Timeline Navigation */}
    <div className="relative mb-20">

      {/* Line */}
      <div className="absolute top-6 left-0 w-full h-[3px] bg-[#E4E4E7] rounded-full"></div>

      <div className="relative flex items-center justify-between">

        {/* Arrow Left */}
        <button className="w-14 h-14 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#1F2940] hover:bg-[#F97316] hover:text-white transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Timeline Dots */}
        <div className="flex-1 flex items-center justify-between px-8">

          {[
            "1",
            "5",
            "8",
            "11",
            "16",
            "19",
            "23",
            "27",
            "2",
            "6",
            "May, 12",
          ].map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">

              {/* Active Dot */}
              <div
                className={`w-7 h-7 rounded-full border-[4px] bg-white relative z-10 transition-all duration-300 ${
                  item === "11"
                    ? "border-[#800020] scale-125"
                    : "border-[#F97316]"
                }`}
              >
                {item === "11" && (
                  <div className="absolute inset-0 rounded-full bg-[#800020] scale-50"></div>
                )}
              </div>

              <span
                className={`mt-4 text-lg font-medium ${
                  item === "11"
                    ? "text-[#800020]"
                    : "text-gray-500"
                }`}
              >
                {item}
              </span>
            </div>
          ))}

        </div>

        {/* Arrow Right */}
        <button className="w-14 h-14 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#1F2940] hover:bg-[#F97316] hover:text-white transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>

      {/* Month Labels */}
      <div className="flex justify-center gap-[450px] mt-10 text-3xl font-semibold">

        <span className="text-[#F97316]">
          April 2015
        </span>

        <span className="text-[#F97316]">
          May 2015
        </span>

      </div>

    </div>

    {/* Cards Slider */}
    <div className="relative overflow-x-auto scrollbar-hide pb-10">

      <div className="flex gap-8 min-w-max px-2">

        {[
          {
            date: "APRIL, 1",
            title: "Global Expansion",
            icon: "building",
            active: false,
          },
          {
            date: "APRIL, 5",
            title: "Air Freight",
            icon: "plane",
            active: false,
          },
          {
            date: "APRIL, 8",
            title: "Clinical Operations",
            icon: "globe",
            active: false,
          },
          {
            date: "APRIL, 11",
            title: "Packaging Division",
            icon: "box",
            active: true,
          },
          {
            date: "APRIL, 16",
            title: "Warehouse Expansion",
            icon: "warehouse",
            active: false,
          },
          {
            date: "APRIL, 19",
            title: "Distribution Network",
            icon: "truck",
            active: false,
          },
          {
            date: "APRIL, 23",
            title: "Global Logistics",
            icon: "ship",
            active: false,
          },
        ].map((item, index) => (

          <div
            key={index}
            className={`w-[320px] rounded-[30px] overflow-hidden bg-white flex-shrink-0 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
              item.active
                ? "border border-[#C54A5A] shadow-xl"
                : "border border-gray-200 shadow-sm"
            }`}
          >

            {/* Top */}
            <div className="bg-[#FBF3E7] h-[170px] flex items-center justify-center">

              {/* ICONS */}
              {item.icon === "building" && (
                <svg className="w-20 h-20 text-[#800020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 21V7a1 1 0 011-1h4v15M9 21h6M15 21V3a1 1 0 011-1h3a1 1 0 011 1v18"/>
                </svg>
              )}

              {item.icon === "plane" && (
                <svg className="w-20 h-20 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M10.18 9"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M2.5 19l19-7L2.5 5v5l15 2-15 2v5z"/>
                </svg>
              )}

              {item.icon === "globe" && (
                <svg className="w-20 h-20 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" strokeWidth="1.7"/>
                  <path strokeWidth="1.7" d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18"/>
                </svg>
              )}

              {item.icon === "box" && (
                <svg className="w-20 h-20 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="1.7" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                  <path strokeWidth="1.7" d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>
                </svg>
              )}

              {item.icon === "warehouse" && (
                <svg className="w-20 h-20 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="1.7" d="M3 10l9-7 9 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"/>
                  <path strokeWidth="1.7" d="M9 21V12h6v9"/>
                </svg>
              )}

              {item.icon === "truck" && (
                <svg className="w-20 h-20 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="1.7" d="M9 17H6a2 2 0 01-2-2V7a2 2 0 012-2h9v12"/>
                  <path strokeWidth="1.7" d="M15 8h4l3 4v5h-7V8z"/>
                </svg>
              )}

              {item.icon === "ship" && (
                <svg className="w-20 h-20 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="1.7" d="M3 20s2 2 5 2 5-2 5-2 2 2 5 2 5-2 5-2"/>
                  <path strokeWidth="1.7" d="M5 18l2-8h10l2 8"/>
                  <path strokeWidth="1.7" d="M12 10V3"/>
                </svg>
              )}

            </div>

            {/* Bottom */}
            <div className="p-8 text-center">

              <h3
                className={`text-3xl font-black uppercase ${
                  item.active
                    ? "text-[#800020]"
                    : "text-[#1F2940]"
                }`}
              >
                {item.date}
              </h3>

              <div className="w-10 h-[3px] bg-[#F97316] mx-auto my-5 rounded-full"></div>

              <p className="text-gray-500 leading-relaxed text-[17px]">
                As a market leader in global clinical supply and logistics,
                Seveillar excels in providing tailored pharmaceutical solutions.
              </p>

            </div>
          </div>

        ))}

      </div>

    </div>

    {/* Bottom Navigation */}
    <div className="flex justify-center gap-8 mt-14">

      <button className="w-20 h-20 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#800020] hover:bg-[#800020] hover:text-white transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button className="w-20 h-20 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#800020] hover:bg-[#800020] hover:text-white transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>

  </div>
</section>
    </main>
    <Footer />
    </>
  );
}