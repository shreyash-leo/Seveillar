// app/page.tsx
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
      video: "/videos/clinical-supply-bg.mp4", // Add your video file to public/videos/
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

  // Statistics data for floating cards
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

  // Counter animation for statistics
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

  // Animated world map effect - creates pulsating dots on major locations
  useEffect(() => {
    if (!worldMapRef.current) return;
    
    const locations = [
      { name: "North America", left: "15%", top: "35%" },
      { name: "Europe", left: "45%", top: "30%" },
      { name: "India (HQ)", left: "70%", top: "55%" },
      { name: "Asia Pacific", left: "80%", top: "45%" },
      { name: "Middle East", left: "58%", top: "48%" },
      { name: "South America", left: "28%", top: "60%" },
      { name: "Africa", left: "52%", top: "58%" },
    ];
    
    const mapContainer = worldMapRef.current;
    locations.forEach(loc => {
      const dot = document.createElement('div');
      dot.className = 'world-map-dot';
      dot.style.position = 'absolute';
      dot.style.left = loc.left;
      dot.style.top = loc.top;
      dot.style.width = '10px';
      dot.style.height = '10px';
      dot.style.backgroundColor = '#E58A2F';
      dot.style.borderRadius = '50%';
      dot.style.boxShadow = '0 0 0 0 rgba(229, 138, 47, 0.7)';
      dot.style.animation = 'pulse 2s infinite';
      dot.style.zIndex = '10';
      
      const label = document.createElement('div');
      label.className = 'world-map-label';
      label.innerText = loc.name;
      label.style.position = 'absolute';
      label.style.left = `calc(${loc.left} + 12px)`;
      label.style.top = `calc(${loc.top} - 8px)`;
      label.style.fontSize = '10px';
      label.style.color = '#0E3B5F';
      label.style.fontWeight = '600';
      label.style.backgroundColor = 'rgba(255,255,255,0.9)';
      label.style.padding = '2px 8px';
      label.style.borderRadius = '20px';
      label.style.whiteSpace = 'nowrap';
      label.style.fontFamily = 'sans-serif';
      label.style.zIndex = '10';
      label.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
      
      mapContainer.appendChild(dot);
      mapContainer.appendChild(label);
    });
    
    // Add animation keyframes dynamically
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(229, 138, 47, 0.7); transform: scale(1); }
        70% { box-shadow: 0 0 0 12px rgba(229, 138, 47, 0); transform: scale(1.2); }
        100% { box-shadow: 0 0 0 0 rgba(229, 138, 47, 0); transform: scale(1); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-float {
        animation: float 4s ease-in-out infinite;
      }
      .animate-fade-up {
        animation: fadeUp 0.8s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (mapContainer) {
        const dots = mapContainer.querySelectorAll('.world-map-dot, .world-map-label');
        dots.forEach(dot => dot.remove());
      }
      style.remove();
    };
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
    "USFDA Audited", "QP Certified", "ISO 9001:2015", "GDP Compliant", "cGMP Certified"
  ];

  return (
    <>
    <Navbar />
    <main className="overflow-hidden">
      {/* Hero Section - Fullscreen Video Banner with Gold/Navy Overlay */}
      <div ref={heroRef} className="relative h-screen w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Video Background */}
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
            {/* Gradient Overlay - Gold/Navy Corporate Theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0E3B5F]/85 via-[#0E3B5F]/70 to-[#E58A2F]/60"></div>
            
            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-between px-6 md:px-20 max-w-7xl mx-auto">
              <div className="text-white max-w-2xl animate-fade-up">
                <div className="inline-block bg-[#E58A2F]/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold mb-4 border border-[#E58A2F]/30">
                  Seveillar Clinical Supplies
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90 max-w-xl">{slide.subtitle}</p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#E58A2F] hover:bg-[#c97a28] text-white px-8 py-3 rounded-md font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
                    Explore Services
                  </button>
                  <button className="bg-transparent border-2 border-white/60 hover:border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 backdrop-blur-sm">
                    Contact Us
                  </button>
                </div>
              </div>
              
              {/* Floating Element - Right Side */}
              <div className="hidden lg:block w-80 animate-float">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <div className="text-center text-white">
                    <div className="text-5xl font-bold text-[#E58A2F]">20+</div>
                    <div className="text-sm uppercase tracking-wider mt-1">Years Combined Experience</div>
                    <hr className="my-3 border-white/20" />
                    <div className="text-5xl font-bold text-[#E58A2F]">24/7</div>
                    <div className="text-sm uppercase tracking-wider mt-1">Global Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                activeSlide === index ? 'bg-[#E58A2F] w-8' : 'bg-white/50 w-4 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 hidden md:block z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Floating Statistics Cards Section */}
      <section ref={statsRef} className="relative -mt-16 z-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {statistics.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:-translate-y-2 transition-all duration-300 border-b-4 border-[#E58A2F] group"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#0E3B5F] mb-2">
                  <span className="stat-counter" data-target={stat.value} data-suffix={stat.suffix}>0</span>
                </div>
                <div className="text-[#E58A2F] font-semibold text-sm uppercase tracking-wider mb-1">{stat.label}</div>
                <div className="text-gray-500 text-xs">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section with Gold Accents */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Facility"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Packaging"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8"
                />
                <div className="col-span-2 bg-gradient-to-r from-[#0E3B5F] to-[#1a5276] text-white p-6 rounded-2xl -mt-8 mx-4 shadow-xl">
                  <div className="flex flex-wrap justify-center gap-4">
                    {certifications.map((cert, i) => (
                      <span key={i} className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">✓ {cert}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-block bg-[#E58A2F]/10 px-4 py-1 rounded-full text-sm font-semibold text-[#E58A2F] mb-4">
                About Seveillar
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E3B5F] mb-4">Global Clinical Supply <span className="text-[#E58A2F]">Excellence</span></h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Seveillar Clinical Supplies Services Pvt. Ltd. is a specialized clinical trial supplies management company providing end-to-end solutions for pharmaceutical, biotechnology, and CRO organizations globally.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Established in 2015, Seveillar delivers compliant, reliable, and efficient clinical supply chain solutions including packaging, labeling, storage, distribution, and clinical logistics management for global clinical studies.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                With QP-certified and USFDA-audited infrastructure, Seveillar supports complex multi-regional clinical trials while maintaining the highest standards of quality, compliance, and operational excellence.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl shadow-md text-center border-l-4 border-[#E58A2F]">
                  <div className="text-2xl font-bold text-[#E58A2F]">2015</div>
                  <div className="text-sm text-gray-500">Established</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md text-center border-l-4 border-[#E58A2F]">
                  <div className="text-2xl font-bold text-[#E58A2F]">Global</div>
                  <div className="text-sm text-gray-500">Clinical Trial Support</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md text-center border-l-4 border-[#E58A2F]">
                  <div className="text-2xl font-bold text-[#E58A2F]">USFDA</div>
                  <div className="text-sm text-gray-500">Audited Facility</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md text-center border-l-4 border-[#E58A2F]">
                  <div className="text-2xl font-bold text-[#E58A2F]">QP</div>
                  <div className="text-sm text-gray-500">Certified Operations</div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-[#E58A2F] to-[#f09d4a] text-white px-8 py-3 rounded-md font-semibold shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Animated World Map Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0E3B5F" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#E58A2F]/10 px-4 py-1 rounded-full text-sm font-semibold text-[#E58A2F] mb-4">
              Global Reach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E3B5F] mb-4">Our <span className="text-[#E58A2F]">Worldwide</span> Presence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Supporting clinical trials across six continents with strategic depots and logistics hubs</p>
          </div>
          
          {/* World Map Container */}
          <div 
            ref={worldMapRef} 
            className="relative w-full h-[500px] bg-gradient-to-br from-[#e8f0f7] to-[#d4e2f0] rounded-2xl shadow-xl overflow-hidden mb-8"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'%3E%3Cpath fill='%23c8dbe8' d='M150,150 L160,140 L180,145 L200,130 L220,135 L240,120 L260,125 L280,130 L300,120 L320,125 L340,130 L360,120 L380,115 L400,120 L420,125 L440,115 L460,120 L480,130 L500,125 L520,135 L540,130 L560,140 L580,145 L600,135 L620,140 L640,145 L660,155 L680,165 L700,175 L720,185 L740,195 L750,200 L740,210 L720,215 L700,220 L680,225 L660,230 L640,235 L620,240 L600,245 L580,250 L560,255 L540,260 L520,265 L500,270 L480,275 L460,280 L440,285 L420,290 L400,295 L380,300 L360,305 L340,310 L320,315 L300,310 L280,315 L260,320 L240,315 L220,310 L200,305 L180,300 L160,295 L150,290 L140,280 L130,270 L120,260 L110,250 L120,240 L130,230 L140,220 L150,210 L140,200 L130,190 L140,180 L150,170 Z'/%3E%3C/svg%3E")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Map overlay text - will be populated by useEffect */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#E58A2F] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-[#0E3B5F]">Active Clinical Trial Sites</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-[#E58A2F]">15+</div>
              <div className="text-sm text-gray-600">Global Depots</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-[#E58A2F]">6</div>
              <div className="text-sm text-gray-600">Continents</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-[#E58A2F]">30+</div>
              <div className="text-sm text-gray-600">Countries Served</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-[#E58A2F]">24/7</div>
              <div className="text-sm text-gray-600">Global Logistics</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section - Premium Cards */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#E58A2F]/10 px-4 py-1 rounded-full text-sm font-semibold text-[#E58A2F] mb-4">
              Comprehensive Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E3B5F] mb-4">Our <span className="text-[#E58A2F]">Premium</span> Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">End-to-end clinical trial supply solutions designed for global pharmaceutical and biotech organizations</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2">
                <div className="relative h-2 bg-gradient-to-r from-[#E58A2F] to-[#0E3B5F]"></div>
                <div className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#E58A2F]/10 to-[#E58A2F]/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-[#E58A2F] group-hover:to-[#c97a28] transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-[#E58A2F] group-hover:text-white transition-colors">
                      <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0E3B5F] mb-3 group-hover:text-[#E58A2F] transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{service.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {service.points.map((point, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">✓ {point}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - With Gold/Navy Theme */}
      <section className="py-20 bg-gradient-to-br from-[#0E3B5F] to-[#1a4a6e] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#E58A2F]/20 px-4 py-1 rounded-full text-sm font-semibold text-[#E58A2F] mb-4">
              Why Seveillar
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The <span className="text-[#E58A2F]">Seveillar</span> Advantage</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Setting the standard for clinical supply excellence worldwide</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-10 h-10 bg-[#E58A2F] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#0E3B5F]">USFDA</div>
              <div className="text-xs text-gray-500">Audited Facility</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#0E3B5F]">QP</div>
              <div className="text-xs text-gray-500">Certified</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#0E3B5F]">ISO 9001</div>
              <div className="text-xs text-gray-500">Certified</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#0E3B5F]">GDP</div>
              <div className="text-xs text-gray-500">Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#0E3B5F]">cGMP</div>
              <div className="text-xs text-gray-500">Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E3B5F] mb-4">Get In <span className="text-[#E58A2F]">Touch</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Ready to discuss your clinical supply needs? Our expert team is here to help.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-[#0E3B5F] mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#E58A2F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#E58A2F" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#0E3B5F]">Address</div>
                    <div className="text-gray-600">5 Star MIDC, Ranjangaon, Pune, Maharashtra, India</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#E58A2F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#E58A2F" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.332l-.94.94a.75.75 0 01-1.053.036 11.563 11.563 0 01-5.33-5.33.75.75 0 01.036-1.053l.94-.94c.277-.27.442-.733.332-1.173L9.963 3.102a1.125 1.125 0 00-1.09-.852H7.5A2.25 2.25 0 005.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#0E3B5F]">Phone</div>
                    <div className="text-gray-600">+91 20 1234 5678</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#E58A2F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#E58A2F" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#0E3B5F]">Email</div>
                    <div className="text-gray-600">info@seveillar.com</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 h-48 bg-gray-100 rounded-xl flex items-center justify-center">
                <span className="text-gray-400">Interactive Map</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-[#0E3B5F] mb-6">Send a Message</h3>
              <form className="space-y-5">
                <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#E58A2F] focus:ring-1 focus:ring-[#E58A2F]" />
                <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#E58A2F] focus:ring-1 focus:ring-[#E58A2F]" />
                <input type="text" placeholder="Company" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#E58A2F] focus:ring-1 focus:ring-[#E58A2F]" />
                <select className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#E58A2F] focus:ring-1 focus:ring-[#E58A2F]">
                  <option>Service Interested In</option>
                  <option>Consultancy & Project Management</option>
                  <option>Clinical Supplies Manufacturing</option>
                  <option>Comparator & Ancillary Sourcing</option>
                  <option>Packaging & Labeling</option>
                  <option>Storage & Distribution</option>
                  <option>IRT Services</option>
                </select>
                <textarea rows={4} placeholder="Message" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#E58A2F] focus:ring-1 focus:ring-[#E58A2F]"></textarea>
                <button className="w-full bg-gradient-to-r from-[#E58A2F] to-[#f09d4a] hover:from-[#c97a28] hover:to-[#d4872e] text-white py-3 rounded-lg transition-all duration-300 font-semibold shadow-md">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}