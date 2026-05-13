"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

// ─── Animation Variants ────────────────────────────────────────────────────────

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.25, 0, 1] },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.25, 0.25, 0, 1] },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.25, 0.25, 0, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// ─── Data ──────────────────────────────────────────────────────────────────────

const differentiators = [
  {
    letter: "A",
    title: "QP Certified Facility for Europe",
    description:
      "Seveillar operates a Qualified Person (QP) certified facility, enabling full support for clinical trials across the European region with complete EU GMP compliance.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    letter: "B",
    title: "USFDA Audited Facility",
    description:
      "Our facility has been audited by USFDA, demonstrating our commitment to the highest quality standards, regulatory compliance, and operational excellence for global clinical trials.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    letter: "C",
    title: "One of the Largest Facilities",
    description:
      "Seveillar offers one of the largest facilities for Labelling, Packaging, and Storage of IMPs — engineered to handle complex, large-scale clinical trials with precision and efficiency.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    letter: "D",
    title: "End-to-End Clinical Supply Solutions",
    description:
      "Comprehensive services spanning trial supply planning, IMP labelling & packaging, secondary packaging, storage, global distribution, and returns & reconciliation — all under one roof.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    letter: "E",
    title: "Quality & Compliance First",
    description:
      "Operations aligned with global regulatory standards including GMP, GDP, and GCP, ensuring quality, traceability, and full supply chain compliance on every study.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    letter: "F",
    title: "Scalable & Agile Operations",
    description:
      "Our infrastructure and experienced team enable management of small to large-scale trials across multiple regions with the speed and flexibility that modern clinical research demands.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    letter: "G",
    title: "Technology-Driven Operations",
    description:
      "We leverage SAP ERP, in-house IRT platforms, and advanced digital monitoring solutions to ensure real-time inventory visibility, traceability, and seamless clinical supply management.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    letter: "H",
    title: "Customer-Centric Approach",
    description:
      "We operate as an extension of your team, offering customized, responsive, and reliable support for every clinical trial — from protocol review through final reconciliation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const capabilities = [
  {
    title: "End-to-End Clinical Supply",
    text: "Strategic Partner across the full Clinical Trial Supply Management domain.",
  },
  {
    title: "Walleting & Booklet Labels",
    text: "In-house developed walleting and booklet label printing capabilities.",
  },
  {
    title: "Global Depot Network",
    text: "Network of approved global depots for regional clinical distribution.",
  },
  {
    title: "Innovative Blinding Technologies",
    text: "Developed and tested proprietary blinding technologies for complex studies.",
  },
  {
    title: "SAP Platform",
    text: "Enterprise-grade SAP ERP platform managing end-to-end supply chain.",
  },
  {
    title: "In-House IRT Platform",
    text: "Proprietary IRT platform supporting patient randomization and supply management.",
  },
];

const commitments = [
  "Global Regulatory Compliance",
  "Quality-Driven Operations",
  "Timely Execution",
  "Scalable Solutions",
  "Long-Term Partnerships",
];

// ─── Component ─────────────────────────────────────────────────────────────────

export default function WhyUsClient() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="bg-white overflow-hidden">

        {/* ============================================================ */}
        {/* HERO SECTION                                                   */}
        {/* ============================================================ */}
        {/* Banner (Hero) Background: #FFF5F0 (pale orange tint) per specification */}
        <section className="relative overflow-hidden min-h-[72vh] flex items-center pt-24 pb-12 bg-[#FFF5F0]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2400&auto=format&fit=crop"
              alt="Why Choose Seveillar"
              fill
              sizes="100vw"
              className="object-cover opacity-30"
              priority
            />
          </div>

          {/* Overlays - using dark brown */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#28151B]/96 via-[#4C292F]/85 to-[#28151B]/90" />
          <div className="absolute top-[-20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#E95A25]/10 blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-[#28151B]/20 blur-[100px]" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20 w-full">
            <div className="grid lg:grid-cols-[1fr_0.8fr] gap-16 items-center">

              {/* Left */}
              <div className="pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl mb-8"
                >
                  <div className="w-2 h-2 rounded-full bg-[#E95A25] animate-pulse" />
                  <span className="text-white uppercase tracking-[0.25em] text-[11px] font-medium">
                    WHY CHOOSE SEVEILLAR
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.05 }}
                  className="text-3xl md:text-4xl lg:text-[4rem] font-bold leading-[0.92] tracking-[-0.05em] text-white"
                >
                  Your Trusted Partner
                  <span className="block text-[#E95A25] mt-1">
                    For Global Clinical
                  </span>
                  <span className="block text-white/80">
                    Trial Supply Solutions
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.15 }}
                  className="mt-8 text-lg md:text-[19px] text-white/72 leading-relaxed font-light max-w-2xl"
                >
                  At Seveillar Clinical Supplies Services Pvt. Ltd., we deliver reliable,
                  compliant, and efficient clinical trial supply solutions designed to support
                  global clinical research. Our infrastructure, regulatory compliance, and
                  operational expertise make us a trusted partner for sponsors, CROs, and
                  pharmaceutical companies worldwide.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.25 }}
                  className="flex flex-wrap gap-10 mt-10"
                >
                  {[
                    ["300+", "GLOBAL STUDIES"],
                    ["100+", "SPONSORS SERVED"],
                    ["25+", "COUNTRIES"],
                  ].map((item, i) => (
                    <div key={i}>
                      <h3 className="text-3xl md:text-4xl font-bold text-[#E95A25] tracking-[-0.04em]">
                        {item[0]}
                      </h3>
                      <p className="mt-2 text-white/55 uppercase tracking-[0.15em] text-[11px]">
                        {item[1]}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right – stacked cards */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="relative hidden lg:flex flex-col gap-5"
              >
                {[
                  { label: "USFDA Audited", sub: "Regulatory Excellence" },
                  { label: "QP Certified", sub: "EU GMP Compliance" },
                  { label: "22,000 Sq. Ft", sub: "State-of-Art GMP Facility" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl px-7 py-6 flex items-center justify-between"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E95A25]/5 to-transparent" />
                    <div className="relative z-10">
                      <p className="text-white/50 uppercase tracking-[0.2em] text-[10px] mb-1">{item.sub}</p>
                      <h4 className="text-2xl font-bold text-white">{item.label}</h4>
                    </div>
                    <div className="relative z-10 w-12 h-12 rounded-2xl bg-[#E95A25]/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-[#E95A25]" />
                    </div>
                  </div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* OUR KEY DIFFERENTIATORS                                        */}
        {/* ============================================================ */}
        <section className="relative py-28 bg-white overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#E95A25]/4 blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#28151B]/4 blur-[120px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
            {/* Section Header */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-3xl mb-20"
            >
              <div className="inline-flex items-center gap-3 mb-7">
                <div className="w-12 h-[2px] bg-[#E95A25]" />
                <span className="text-[#E95A25] uppercase tracking-[0.25em] text-xs font-medium">
                  KEY DIFFERENTIATORS
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-[#28151B] leading-[0.95] tracking-[-0.04em]">
                What Sets Seveillar
                <span className="block text-[#E95A25]">Apart From the Rest</span>
              </h2>
              <p className="mt-7 text-lg text-[#5A3A3E] leading-relaxed font-light max-w-2xl">
                Our combination of USFDA-audited infrastructure, QP certification, proprietary
                technology platforms, and over a century of consolidated CTSM expertise creates
                an unmatched foundation for global clinical trial supply operations.
              </p>
            </motion.div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative overflow-hidden rounded-[28px] border p-7 transition-all duration-500 cursor-default
                    ${hoveredCard === index
                      ? "bg-[#28151B] border-[#E95A25]/30 shadow-[0_20px_60px_rgba(40,21,27,0.2)] -translate-y-2"
                      : "bg-[#FAF7F2] border-[#FAD1C3]/50 hover:-translate-y-1"
                    }`}
                >
                  <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-[#E95A25]/5 blur-[60px]" />

                  {/* Letter badge */}
                  <div className={`relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-2xl font-bold text-xl mb-6 transition-all duration-500
                    ${hoveredCard === index ? "bg-[#E95A25] text-white" : "bg-[#E95A25]/10 text-[#E95A25]"}`}>
                    {item.letter}
                  </div>

                  {/* Icon */}
                  <div className={`relative z-10 mb-5 transition-colors duration-500
                    ${hoveredCard === index ? "text-[#E95A25]" : "text-[#4C292F]"}`}>
                    {item.icon}
                  </div>

                  <h3 className={`relative z-10 text-xl font-bold leading-tight mb-4 transition-colors duration-500
                    ${hoveredCard === index ? "text-white" : "text-[#28151B]"}`}>
                    {item.title}
                  </h3>
                  <p className={`relative z-10 text-sm leading-relaxed transition-colors duration-500
                    ${hoveredCard === index ? "text-white/65" : "text-[#5A3A3E]"}`}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* CAPABILITIES DEEP DIVE – DARK SECTION                         */}
        {/* ============================================================ */}
        <section className="relative py-28 overflow-hidden bg-[#28151B]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1581093450021-4a7360e9a7f8?q=80&w=2400&auto=format&fit=crop"
              alt="Capabilities"
              fill
              sizes="100vw"
              className="object-cover opacity-[0.06]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#28151B] via-[#4C292F]/60 to-[#28151B]" />
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#E95A25]/8 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#28151B]/20 blur-[120px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-start">

              {/* Left */}
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="lg:sticky lg:top-32"
              >
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl mb-8">
                  <div className="w-2 h-2 rounded-full bg-[#E95A25]" />
                  <span className="text-white uppercase tracking-[0.25em] text-[11px] font-medium">
                    CORE CAPABILITIES
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[0.95] tracking-[-0.05em] text-white">
                  Built For
                  <span className="block text-[#E95A25]">Operational</span>
                  Excellence
                </h2>
                <p className="mt-8 text-lg text-white/68 leading-relaxed font-light">
                  From proprietary IRT platforms and SAP-driven supply chain management to
                  in-house blinding technologies and global depot networks, our capabilities
                  are purpose-built for complex multinational studies.
                </p>

                {/* Image */}
                <div className="relative mt-12 overflow-hidden rounded-[28px] h-[260px] border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1800&auto=format&fit=crop"
                    alt="Capabilities facility"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#28151B]/90 via-[#28151B]/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="w-10 h-[3px] bg-[#E95A25] rounded-full mb-3" />
                    <p className="text-white font-semibold leading-tight">
                      22,000 Sq. Ft State-of-Art GMP Certified Facility
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right – capability cards */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid gap-5"
              >
                {capabilities.map((cap, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInRight}
                    className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-7 hover:border-[#E95A25]/30 hover:bg-white/8 transition-all duration-500"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-[#E95A25]/8 blur-[50px]" />
                    <div className="relative z-10 flex items-start gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#E95A25] flex items-center justify-center flex-shrink-0 shadow-[0_12px_30px_rgba(233,90,37,0.3)]">
                        <span className="text-white font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{cap.title}</h3>
                        <p className="text-white/65 leading-relaxed text-sm">{cap.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* END-TO-END SERVICES DETAIL – WHITE SECTION                    */}
        {/* ============================================================ */}
        <section className="relative py-28 bg-[#F8F2EF] overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E95A25]/5 blur-[120px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">

              {/* Left content */}
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="inline-flex items-center gap-3 mb-7">
                  <div className="w-12 h-[2px] bg-[#E95A25]" />
                  <span className="text-[#E95A25] uppercase tracking-[0.25em] text-xs font-medium">
                    SERVICE BREADTH
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-[#28151B] leading-[0.95] tracking-[-0.04em]">
                  Comprehensive
                  End-to-End
                  <span className="block text-[#E95A25]">Supply Services</span>
                </h2>
                <p className="mt-8 text-lg text-[#5A3A3E] leading-relaxed font-light">
                  Seveillar is a strategic partner across the entire Clinical Trial Supply Management
                  domain — from initial planning and comparator sourcing through to packaging,
                  global distribution, and final reconciliation.
                </p>

                <div className="space-y-4 mt-10">
                  {[
                    "Clinical trial supply planning & forecasting",
                    "IMP labelling, packaging & secondary packaging",
                    "Storage, inventory management & reconciliation",
                    "Global distribution & cold-chain logistics",
                    "Returns, destruction & documentation",
                    "IVRS / IWRS (IRT) randomization services",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="relative flex items-center justify-center flex-shrink-0">
                        <div className="absolute w-5 h-5 rounded-full bg-[#E95A25]/20 animate-ping" />
                        <div className="relative w-3 h-3 rounded-full bg-[#E95A25]" />
                      </div>
                      <p className="text-[#28151B] font-medium leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right image stack */}
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-[34px] h-[520px] shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                  <Image
                    src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1800&auto=format&fit=crop"
                    alt="Clinical Supply Operations"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-10 -left-8 bg-[#28151B] rounded-[28px] p-7 w-[260px] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                  <div className="w-12 h-12 rounded-2xl bg-[#E95A25] flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white">25+</h3>
                  <p className="mt-2 text-white/60 text-sm leading-relaxed">
                    Countries served across global clinical trial operations
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* OUR COMMITMENT – DARK BAND                                     */}
        {/* ============================================================ */}
        <section className="relative py-28 overflow-hidden bg-[#4C292F]">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#E95A25]/8 blur-[120px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-20 items-center">

              {/* Left */}
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl mb-8">
                  <div className="w-2 h-2 rounded-full bg-[#E95A25]" />
                  <span className="text-white uppercase tracking-[0.25em] text-[11px] font-medium">
                    OUR COMMITMENT
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[0.95] tracking-[-0.05em] text-white">
                  A Partner You
                  <span className="block text-[#E95A25]">Can Rely On</span>
                  Every Time
                </h2>
                <p className="mt-8 text-lg text-white/68 leading-relaxed font-light max-w-xl">
                  At Seveillar, every engagement is built on a foundation of regulatory
                  discipline, operational transparency, and a relentless commitment to your
                  trial timeline and quality expectations.
                </p>
              </motion.div>

              {/* Right – commitment pillars */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 gap-4"
              >
                {commitments.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInRight}
                    className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-xl px-7 py-5 flex items-center justify-between hover:border-[#E95A25]/30 hover:bg-white/8 transition-all duration-500"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-[#E95A25]/8 blur-[50px]" />
                    <div className="relative z-10 flex items-center gap-5">
                      <div className="w-10 h-10 rounded-xl bg-[#E95A25] flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-white font-semibold text-lg">{item}</p>
                    </div>
                    <div className="relative z-10 text-white/20 group-hover:text-[#E95A25]/50 transition-colors duration-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* COMPLIANCE & CERTIFICATIONS                                    */}
        {/* ============================================================ */}
        <section className="relative py-28 bg-[#FFF8F5] overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#28151B]/4 blur-[120px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <div className="inline-flex items-center gap-3 mb-7">
                <div className="w-12 h-[2px] bg-[#E95A25]" />
                <span className="text-[#E95A25] uppercase tracking-[0.25em] text-xs font-medium">
                  COMPLIANCE & CERTIFICATIONS
                </span>
                <div className="w-12 h-[2px] bg-[#E95A25]" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-[#28151B] leading-[0.95] tracking-[-0.04em]">
                Regulatory Standards
                <span className="block text-[#E95A25]">We Are Aligned With</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
              {[
                {
                  title: "QP Certified — EU GMP",
                  text: "Qualified Person certification enabling direct support for European clinical trials under EU GMP requirements.",
                  accent: "#E95A25",
                },
                {
                  title: "USFDA Audited",
                  text: "Independently audited by USFDA demonstrating compliance with 21 CFR and US clinical supply quality standards.",
                  accent: "#4C292F",
                },
                {
                  title: "GDP Compliant",
                  text: "Good Distribution Practice aligned storage, handling, and global distribution operations.",
                  accent: "#E95A25",
                },
                {
                  title: "GMP Certified Facility",
                  text: "22,000 sq. ft GMP certified facility with validated environmental monitoring and controlled operations.",
                  accent: "#4C292F",
                },
                {
                  title: "21 CFR Part 11",
                  text: "Electronic records and signatures technology aligned with FDA electronic compliance requirements.",
                  accent: "#E95A25",
                },
                {
                  title: "5-Star Industrial Zone",
                  text: "Located in a 5-star industrial zone with robust infrastructure, power backup, and logistical advantages.",
                  accent: "#4C292F",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="relative overflow-hidden rounded-[28px] bg-white border border-[#FAD1C3]/50 p-8 hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-lg group"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[60px]"
                    style={{ backgroundColor: item.accent + "15" }} />
                  <div className="w-[3px] h-14 rounded-full mb-7"
                    style={{ backgroundColor: item.accent }} />
                  <h3 className="text-xl font-bold text-[#28151B] leading-tight mb-4">{item.title}</h3>
                  <p className="text-[#5A3A3E] leading-relaxed text-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FINAL CTA                                                      */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden py-32">
          <Image
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2400&auto=format&fit=crop"
            alt="Partner With Seveillar"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#28151B]/87" />
          <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#E95A25]/10 blur-[100px]" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl mb-8">
                <div className="w-2 h-2 rounded-full bg-[#E95A25] animate-pulse" />
                <span className="text-white uppercase tracking-[0.25em] text-[11px] font-medium">
                  YOUR TRUSTED PARTNER
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[4rem] font-bold leading-[0.95] tracking-[-0.05em] text-white">
                Ready to Partner With
                <span className="block text-[#E95A25]">Seveillar Clinical Supplies?</span>
              </h2>
              <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed font-light max-w-3xl mx-auto">
                Discover how our USFDA-audited, QP-certified, technology-driven clinical supply
                infrastructure can accelerate your next global clinical trial.
              </p>
              <div className="flex flex-wrap justify-center gap-5 mt-12">
                <button className="bg-[#E95A25] hover:bg-[#4C292F] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-[0_20px_60px_rgba(233,90,37,0.25)] hover:shadow-[0_20px_60px_rgba(233,90,37,0.4)]">
                  Contact Our Team
                </button>
                <button className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300">
                  Explore Our Services
                </button>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}