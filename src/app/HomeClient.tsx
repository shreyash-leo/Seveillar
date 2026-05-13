"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { motion, AnimatePresence, Variants } from "framer-motion";

// Animation variants - SAME as Facility/Why Us pages
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomeClient() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const worldMapRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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

  const floatingStats = [
    { number: "2015", label: "Founded" },
    { number: "50+", label: "Global Trials" },
    { number: "25+", label: "Countries" },
    { number: "100%", label: "Compliance Focus" },
  ];

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

  const certifications = [
    "USFDA Audited", "QP Certified", "ISO 9001:2015", "GDP Compliant"
  ];

  const timelineData = [
    {
      year: "2015",
      title: "Company Founded",
      short: "Seveillar established its foundation in clinical trial supply management.",
      full: "Founded in 2015, Seveillar Clinical Supplies Services began operations focused on global clinical supply chain management, comparator sourcing, packaging, labeling, and logistics support.",
      image: "https://images.unsplash.com/photo-1581092918484-8313b87f4d2d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      year: "2017",
      title: "Global Sourcing Expansion",
      short: "Expanded comparator sourcing and global wholesaler partnerships.",
      full: "Established a strong global network of approved wholesalers and distributors to support multinational clinical studies efficiently.",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1200&auto=format&fit=crop",
    },
    {
      year: "2019",
      title: "Cold Chain Infrastructure",
      short: "Expanded temperature-controlled storage and logistics systems.",
      full: "Developed advanced infrastructure supporting 15°C to 25°C, 2°C to 8°C, -20°C and -80°C storage and global distribution operations.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      year: "2021",
      title: "Global Clinical Trial Support",
      short: "Successfully supported multi-country global clinical studies.",
      full: "Expanded operational capabilities to manage packaging, labeling, storage, logistics, depot management, and global supply chain execution.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      year: "2023",
      title: "Advanced IRT Solutions",
      short: "Implemented scalable IVRS/IWRS clinical trial systems.",
      full: "Introduced advanced 21 CFR Part 11 compliant IRT platforms supporting randomization, drug supply management, cohort tracking, and study workflows.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const scrollTimelineLeft = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollTimelineRight = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-white">
        
        {/* Hero Section - WITH CINEMATIC ANIMATIONS */}
        {/* Banner (Hero) Background: #FFF5F0 (pale orange tint) per specification */}
        <div ref={heroRef} className="relative min-h-screen w-full overflow-hidden pb-32 md:pb-40 bg-[#FFF5F0]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
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
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[#E95A25]/30"></div>
              
              <div className="relative z-10 flex h-full items-center justify-between px-6 md:px-20 max-w-7xl mx-auto">
                {/* Hero content with animation */}
                <motion.div
                  key={currentSlide}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="text-white max-w-2xl"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-block bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-sm font-semibold mb-4 border border-white/20 shadow-lg"
                  >
                    Seveillar Clinical Supplies
                  </motion.div>
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 tracking-tight"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-lg md:text-xl mb-8 opacity-90 max-w-xl"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-wrap gap-4"
                  >
                    {/* Accent color #E95A25 for buttons */}
                    <button className="bg-[#E95A25] hover:bg-[#4C292F] text-white px-8 py-3 rounded-md font-semibold shadow-lg transition-all duration-300">
                      Explore Services
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300">
                      Contact Us
                    </button>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="hidden lg:block w-80"
                >
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-2xl">
                    <div className="text-center text-white">
                      <div className="text-5xl font-bold text-[#E95A25]">20+</div>
                      <div className="text-sm uppercase tracking-wider mt-1">Years Combined Experience</div>
                      <hr className="my-3 border-white/20" />
                      <div className="text-5xl font-bold text-[#E95A25]">24/7</div>
                      <div className="text-sm uppercase tracking-wider mt-1">Global Support</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
          
          {/* Hero Banner Navigation Buttons */}
          <div className="absolute inset-y-0 left-4 flex items-center z-20">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center text-2xl"
            >
              ←
            </button>
          </div>

          <div className="absolute inset-y-0 right-4 flex items-center z-20">
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center text-2xl"
            >
              →
            </button>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setActiveSlide(index);
                }}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-[#E95A25] w-8' : 'bg-white/50 w-4 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Floating Overlap Cards - WITH VIEWPORT ANIMATION */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-40 px-6 md:px-20 -mt-10 md:-mt-16 bg-transparent"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {floatingStats.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group bg-white/95 backdrop-blur-xl border border-white/40 rounded-3xl p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(233,90,37,0.15)] transition-all duration-500"
                >
                  <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#E95A25] to-[#FAD1C3] mb-5" />
                  <h3 className="text-3xl md:text-4xl font-bold text-[#28151B] tracking-tight">
                    {item.number}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-[#5A3A3E] font-medium">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ========== EDITORIAL ABOUT SECTION - WITH ANIMATIONS ========== */}
        {/* About/Overview Background: #FFFFFF per specification */}
        <section className="relative bg-white pt-16 md:pt-20 pb-24">
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="mb-14 md:mb-16 text-center lg:text-left"
            >
              <div className="inline-block mb-6">
                <span className="text-xs font-mono tracking-wider text-[#E95A25] bg-[#E95A25]/5 px-3 py-1 rounded-full">MANIFESTO</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#28151B] leading-[1.1] max-w-4xl">
                Built for Global
                <br />
                {/* Accent color for emphasis */}
                <span className="font-bold text-[#E95A25]">Clinical Supply Excellence.</span>
              </h2>
              <div className="w-20 h-px bg-[#E95A25] mt-8"></div>
            </motion.div>

            {/* Editorial Text Block */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center"
            >
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-[#5A3A3E] text-sm uppercase tracking-wider font-mono">The Story</p>
                  <p className="text-[#28151B] text-lg leading-relaxed font-light">
                    Seveillar Clinical Supplies Services Pvt. Ltd. is a specialized clinical trial supplies management company providing end-to-end solutions for pharmaceutical, biotechnology, and CRO organizations globally.
                  </p>
                  <p className="text-[#28151B] text-lg leading-relaxed font-light">
                    Established in 2015, Seveillar delivers compliant, reliable, and efficient clinical supply chain solutions including packaging, labeling, storage, distribution, and clinical logistics management for global clinical studies.
                  </p>
                  <p className="text-[#28151B] text-lg leading-relaxed font-light">
                    With <span className="font-semibold text-[#E95A25]">QP-certified</span> and <span className="font-semibold text-[#E95A25]">USFDA-audited</span> infrastructure, Seveillar supports complex multi-regional clinical trials while maintaining the highest standards of quality, compliance, and operational excellence.
                  </p>
                </div>
                <div className="pt-4">
                  <button className="group inline-flex items-center gap-3 text-[#E95A25] hover:text-[#4C292F] font-medium transition-colors border-b border-[#E95A25]/30 pb-1">
                    <span>Read the full story</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="space-y-10">
                {/* Light brown tint background for visual break */}
                <div className="bg-gradient-to-br from-[#FAF7F2] to-white border border-[#FAD1C3]/30 rounded-[28px] p-8 md:p-10 shadow-sm">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-4xl font-light text-[#E95A25] tracking-tight">2015</div>
                      <div className="text-[#5A3A3E] text-sm uppercase tracking-wider mt-1 font-mono">Founded</div>
                    </div>
                    <div>
                      <div className="text-4xl font-light text-[#E95A25] tracking-tight">50<span className="text-2xl">+</span></div>
                      <div className="text-[#5A3A3E] text-sm uppercase tracking-wider mt-1 font-mono">Global Trials</div>
                    </div>
                    <div>
                      <div className="text-4xl font-light text-[#E95A25] tracking-tight">25<span className="text-2xl">+</span></div>
                      <div className="text-[#5A3A3E] text-sm uppercase tracking-wider mt-1 font-mono">Countries</div>
                    </div>
                    <div>
                      <div className="text-4xl font-light text-[#E95A25] tracking-tight">100<span className="text-2xl">%</span></div>
                      <div className="text-[#5A3A3E] text-sm uppercase tracking-wider mt-1 font-mono">Compliance Focus</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 pt-4 border-t border-[#FAD1C3]/30">
                  {certifications.map((cert, i) => (
                    <span key={i} className="text-xs font-medium text-[#5A3A3E] bg-[#FAF7F2] px-3 py-1.5 rounded-full tracking-wide">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========== SERVICES SECTION - WITH STAGGER ANIMATIONS ========== */}
        <section className="py-24 md:py-32 bg-[#F8F2EF]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="text-center mb-16 md:mb-20"
            >
              <div className="inline-flex items-center gap-2 bg-[#E95A25]/5 px-4 py-1.5 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E95A25]"></span>
                <span className="text-xs font-mono tracking-wider text-[#E95A25] font-semibold">OUR CAPABILITIES</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#28151B] mb-5">
                Comprehensive Clinical
                <br />
                <span className="text-[#E95A25]">Supply Solutions</span>
              </h2>
              <p className="text-[#5A3A3E] max-w-2xl mx-auto text-lg font-light leading-relaxed">
                End-to-end clinical trial supply management for pharmaceutical, 
                biotechnology, and CRO organizations worldwide.
              </p>
              <div className="w-12 h-0.5 bg-[#E95A25]/40 mx-auto mt-8"></div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group bg-white rounded-2xl border border-[#FAD1C3]/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="h-1.5 w-full bg-[#E95A25]"></div>
                  <div className="p-6 md:p-7">
                    <div className="w-12 h-12 rounded-xl bg-[#E95A25]/10 flex items-center justify-center mb-5 group-hover:bg-[#E95A25] transition-colors duration-300">
                      <svg className="w-6 h-6 text-[#E95A25] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d={service.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#28151B] mb-3 leading-tight">{service.title}</h3>
                    <p className="text-[#5A3A3E] text-sm leading-relaxed mb-4">{service.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {service.points.map((point, idx) => (
                        <span key={idx} className="text-xs bg-[#FAF7F2] text-[#4C292F] px-2 py-0.5 rounded">{point}</span>
                      ))}
                    </div>
                    <button className="inline-flex items-center gap-2 text-sm font-medium text-[#E95A25] hover:text-[#4C292F] transition-colors group/btn">
                      Learn More 
                      <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="text-center mt-16 pt-4"
            >
              <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#FAD1C3] bg-white text-[#28151B] font-semibold hover:bg-[#FAF7F2] hover:border-[#E95A25]/30 hover:text-[#E95A25] transition-all duration-300 shadow-sm">
                <span>View All Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          </div>
        </section>

        {/* ================= FACILITY INFRASTRUCTURE SECTION - WITH ANIMATIONS ================= */}
        {/* Capabilities Background: #F8F2EF (light brown tint) */}
        <section className="relative overflow-hidden py-32 bg-[#4C292F]">
          <div className="absolute top-14 left-0 w-full h-5 bg-[#E95A25]"></div>

          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} 
              variants={fadeInUp}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#E95A25]/30 bg-[#2A1D18]/80 backdrop-blur-md mb-6">
                <div className="w-2 h-2 rounded-full bg-[#E95A25] animate-pulse"></div>
                <span className="text-sm tracking-[0.25em] uppercase text-[#D6B097] font-medium">
                  Infrastructure Excellence
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                Facility Infrastructure
              </h2>

              <p className="text-[#C6B1A5] text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
                World-class infrastructure designed for precision, compliance,
                operational reliability, and pharmaceutical-grade excellence.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
            >
              {/* Card 1 - Updated colors */}
              <motion.div variants={fadeInUp} className="bg-white rounded-[38px] border border-[#FAD1C3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="bg-[#FAD1C3] px-6 pt-10 pb-20 relative">
                  <h3 className="text-3xl font-bold text-[#28151B] text-center leading-tight">
                    Strategic Location
                  </h3>
                  <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 w-24 h-24 rounded-full bg-white border-2 border-[#FAD1C3] flex items-center justify-center shadow-md">
                    <svg className="w-10 h-10 text-[#E95A25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                </div>
                <div className="px-7 pt-20 pb-8">
                  <div className="h-px bg-[#FAD1C3] mb-7"></div>
                  <ul className="space-y-5 text-[#28151B] text-[15px] leading-relaxed">
                    <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-[#E95A25] mt-2"></span>Located in 5 Star MIDC (Industrial Zone), Ranjangaon, Pune-India</li>
                    <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-[#E95A25] mt-2"></span>Facility is well connected to Road & Air Route</li>
                    <li className="text-[#E95A25] font-semibold pt-2">Connectivity:</li>
                    <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-[#E95A25] mt-2"></span>Connected to Airport by Four Way National Highway</li>
                    <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-[#E95A25] mt-2"></span>50 Km from Pune Airport</li>
                    <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-[#E95A25] mt-2"></span>180 Km from Mumbai Airport</li>
                  </ul>
                </div>
              </motion.div>

              {/* Card 2 - Updated colors */}
              <motion.div variants={fadeInUp} className="bg-white rounded-[38px] border border-[#FAD1C3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="bg-[#FAD1C3] px-6 pt-10 pb-20 relative">
                  <h3 className="text-3xl font-bold text-[#28151B] text-center leading-tight">
                    Packaging Areas
                  </h3>
                  <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 w-24 h-24 rounded-full bg-white border-2 border-[#FAD1C3] flex items-center justify-center shadow-md">
                    <svg className="w-10 h-10 text-[#E95A25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"/>
                    </svg>
                  </div>
                </div>
                <div className="px-7 pt-20 pb-8">
                  <div className="h-px bg-[#FAD1C3] mb-7"></div>
                  <ul className="space-y-5 text-[#28151B] text-[15px] leading-relaxed">
                    <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-[#E95A25] mt-2"></span>2 Primary & Secondary Packaging High Class Maintained GMP Suites</li>
                    <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-[#E95A25] mt-2"></span>Clean Room ISO Class 8 for Primary Packaging Operations</li>
                    <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-[#E95A25] mt-2"></span>cGMP Grade Equipments for Packaging Operations</li>
                    <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-[#E95A25] mt-2"></span>Separate Provision for Personnel & Material Entry in Clean Room</li>
                    <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-[#E95A25] mt-2"></span>Provision of Alarms for Notifications in Case of Deviations</li>
                  </ul>
                </div>
              </motion.div>

              {/* Card 3 - Updated colors */}
              <motion.div variants={fadeInUp} className="bg-white rounded-[38px] border border-[#FAD1C3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="bg-[#FAD1C3] px-6 pt-10 pb-20 relative">
                  <h3 className="text-3xl font-bold text-[#28151B] text-center leading-tight">
                    Storage & Distribution
                  </h3>
                  <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 w-24 h-24 rounded-full bg-white border-2 border-[#FAD1C3] flex items-center justify-center shadow-md">
                    <svg className="w-10 h-10 text-[#E95A25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 7h18M5 7v13h14V7M9 11h6M9 15h4"/>
                    </svg>
                  </div>
                </div>
                <div className="px-7 pt-20 pb-8">
                  <div className="h-px bg-[#FAD1C3] mb-7"></div>
                  <ul className="space-y-5 text-[#28151B] text-[15px] leading-relaxed">
                    <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-[#E95A25] mt-2"></span>12000 Sq.Ft dedicated warehouse & distribution areas</li>
                    <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-[#E95A25] mt-2"></span>Dedicated cGMP, GDP & GWP compliant storage facilities</li>
                    <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-[#E95A25] mt-2"></span>Storage available at 15°C to 25°C, 2°C to 8°C, -15°C to -25°C & -80°C</li>
                    <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-[#E95A25] mt-2"></span>Restricted & controlled access to storage areas</li>
                    <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-[#E95A25] mt-2"></span>21 CFR Part 11 compliant monitoring & acquisition system</li>
                  </ul>
                </div>
              </motion.div>

              {/* Card 4 - Updated colors */}
              <motion.div variants={fadeInUp} className="bg-white rounded-[38px] border border-[#FAD1C3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="bg-[#FAD1C3] px-6 pt-10 pb-20 relative">
                  <h3 className="text-3xl font-bold text-[#28151B] text-center leading-tight">
                    Monitoring & Backup
                  </h3>
                  <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 w-24 h-24 rounded-full bg-white border-2 border-[#FAD1C3] flex items-center justify-center shadow-md">
                    <svg className="w-10 h-10 text-[#E95A25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17v-6m6 6V7m-9 10h12M5 21h14"/>
                    </svg>
                  </div>
                </div>
                <div className="px-7 pt-20 pb-8">
                  <div className="h-px bg-[#FAD1C3] mb-7"></div>
                  <ul className="space-y-5 text-[#28151B] text-[15px] leading-relaxed">
                    <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-[#E95A25] mt-2"></span>DG backup to all cold rooms & critical AHU’s</li>
                    <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-[#E95A25] mt-2"></span>100% standby for deep freezer & critical storage areas</li>
                    <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-[#E95A25] mt-2"></span>24×7 surveillance through CCTV cameras</li>
                    <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-[#E95A25] mt-2"></span>Fire alarm system</li>
                    <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-[#E95A25] mt-2"></span>Fire fighting & sprinkler system</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================= TIMELINE SECTION - WITH ANIMATIONS ================= */}
        {/* Services Offered Background: #FFF8F5 (very pale orange) per specification */}
        <section className="relative overflow-hidden bg-[#FFF8F5] py-28">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E95A25]/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#28151B]/5 blur-3xl rounded-full" />

          <div className="max-w-full mx-auto px-4 md:px-8 lg:px-12 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="mb-20 px-2"
            >
              <p className="text-[#E95A25] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
                Company Journey
              </p>
              <h2 className="text-4xl md:text-6xl font-bold text-[#28151B] leading-tight max-w-4xl">
                Building Global Clinical Supply Excellence
              </h2>
            </motion.div>

            <div className="relative w-full">
              <div className="absolute top-[72px] left-0 right-0 h-[2px] bg-[#FAD1C3]" />
              
              {/* Timeline Navigation Arrows */}
              <button
                onClick={scrollTimelineLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-[#FAD1C3] hover:bg-[#E95A25] hover:text-white hover:scale-110 transition-all duration-300 flex items-center justify-center"
              >
                <span className="text-2xl">←</span>
              </button>

              <div 
                ref={timelineRef}
                className="flex overflow-x-auto scroll-smooth gap-6 px-16 pb-12 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {timelineData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeInUp}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.3,
                    }}
                    onHoverStart={() => setActiveTimeline(index)}
                    onHoverEnd={() => setActiveTimeline(-1)}
                    whileHover={{ y: -5 }}
                    className="relative flex-shrink-0 w-[340px] md:w-[380px] cursor-pointer"
                  >
                    <div
                      className={`absolute top-[68px] left-8 w-5 h-5 rounded-full border-[3px] z-20 transition-all duration-300 ${
                        activeTimeline === index
                          ? "bg-[#E95A25] border-white scale-110 shadow-lg"
                          : "bg-[#28151B] border-white"
                      }`}
                    />

                    <div className="mt-24">
                      <div
                        className={`rounded-xl overflow-hidden border transition-all duration-500 ${
                          activeTimeline === index
                            ? "bg-white shadow-xl border-[#E95A25]/30 relative z-20"
                            : "bg-white/80 border-[#FAD1C3] shadow-sm"
                        }`}
                      >
                        <div className="relative h-52 overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={380}
                            height={208}
                            className={`w-full h-full object-cover transition-transform duration-700 ${
                              activeTimeline === index ? "scale-105" : "scale-100"
                            }`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-5 left-5">
                            <span className="text-[#E95A25] text-xs tracking-[0.2em] uppercase font-semibold">
                              {item.year}
                            </span>
                            <h3 className="text-white text-xl font-bold mt-1">
                              {item.title}
                            </h3>
                          </div>
                        </div>

                        <div className="p-6 relative">
                          <div className="min-h-[72px]">
                            <p className="text-[#5A3A3E] leading-relaxed text-sm">
                              {item.short}
                            </p>
                          </div>

                          {activeTimeline === index && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-[#E95A25]/20 p-6 z-30 min-w-[320px] md:min-w-[380px]"
                              style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                            >
                              <p className="text-[#28151B] leading-relaxed text-sm mb-5">
                                {item.full}
                              </p>
                              <button className="px-5 py-2.5 rounded-lg bg-[#28151B] text-white text-sm font-medium hover:bg-[#E95A25] transition-all duration-300 shadow-md hover:shadow-lg">
                                Learn More
                              </button>
                              <div className="absolute -top-2 left-8 w-4 h-4 bg-white border-t border-l border-[#E95A25]/20 rotate-45"></div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={scrollTimelineRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-[#FAD1C3] hover:bg-[#E95A25] hover:text-white hover:scale-110 transition-all duration-300 flex items-center justify-center"
              >
                <span className="text-2xl">→</span>
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}