"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

// Animation variants (memoized outside component)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.25, 0, 1] }
  }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.25, 0.25, 0, 1] }
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.25, 0.25, 0, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function FacilityClient() {
  return (
    <>
      <Navbar />
      <main className="bg-white overflow-hidden">

        {/* ================================================= */}
{/* FACILITY HERO SECTION */}
{/* ================================================= */}
<section className="relative overflow-hidden min-h-[72vh] flex items-center pt-24 pb-10">

  {/* ORIGINAL BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <Image
      src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2400&auto=format&fit=crop"
      alt="Facility Background"
      fill
      sizes="100vw"
      className="object-cover"
      priority
    />
  </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20 w-full">
    <div className="grid lg:grid-cols-[1fr_0.85fr] gap-14 items-center">

      {/* LEFT CONTENT */}
      <div className="pt-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-3xl md:text-4xl lg:text-[4rem] font-bold leading-[0.92] tracking-[-0.05em] text-white"
        >
          Facility, Infrastructure
          <span className="block text-[#E95A25]">
            & Global Operations
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mt-7 text-lg md:text-[19px] text-white leading-relaxed font-light max-w-2xl"
        >
          Seveillar operates advanced cGMP-compliant
          infrastructure supporting clinical packaging,
          cold-chain storage, warehousing,
          labeling, and worldwide clinical
          trial distribution operations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-wrap gap-10 mt-10"
        >
          {[
            ['22000', 'SQ. FT FACILITY'],
            ['1200+', 'PALLET CAPACITY'],
            ['24/7', 'MONITORING'],
          ].map((item, index) => (
            <div key={index}>
              <h3 className="text-3xl md:text-4xl font-bold text-[#E95A25] tracking-[-0.04em]">
                {item[0]}
              </h3>
              <p className="mt-2 text-white uppercase tracking-[0.15em] text-[11px]">
                {item[1]}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative flex justify-center lg:justify-end"
      >
        <div className="relative overflow-hidden rounded-[34px] w-full max-w-[720px] h-[360px] border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
          <Image
            src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2000&auto=format&fit=crop"
            alt="Clinical Facility"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

          <div className="relative z-10 h-full flex flex-col justify-end p-8">
            <div className="w-14 h-[3px] bg-[#E95A25] rounded-full mb-5" />
            <h3 className="text-3xl font-bold text-white leading-tight">
              Advanced cGMP Infrastructure
            </h3>
            <p className="mt-4 text-white leading-relaxed">
              Purpose-built operational facility supporting global clinical supply management workflows.
            </p>
          </div>
        </div>
      </motion.div>

    </div>
  </div>
</section>

        {/* ================================================= */}
        {/* FACILITY OVERVIEW SECTION - OPTIMIZED */}
        {/* ================================================= */}
        {/* About/Overview Background: #FFFFFF per specification */}
        <section className="relative py-28 bg-white overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E95A25]/5 blur-[120px]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-20 items-center">
              {/* LEFT IMAGES */}
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-[34px] h-[560px] shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                  <Image
                    src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1800&auto=format&fit=crop"
                    alt="Clinical Facility"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -right-8 md:right-[-40px] bg-[#4C292F] rounded-[30px] p-8 w-[280px] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                  <div className="w-14 h-14 rounded-2xl bg-[#E95A25] flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                    </svg>
                  </div>
                  <h3 className="text-4xl font-bold text-white">24/7</h3>
                  <p className="mt-3 text-white/65 leading-relaxed">
                    Real-time environmental monitoring and validated operational systems.
                  </p>
                </div>
              </motion.div>

              {/* RIGHT CONTENT */}
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="inline-flex items-center gap-3 mb-7">
                  <div className="w-12 h-[2px] bg-[#E95A25]" />
                  <span className="text-[#E95A25] uppercase tracking-[0.25em] text-xs font-medium">
                    FACILITY OVERVIEW
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-[#28151B] leading-[0.95] tracking-[-0.04em]">
                  Engineered For Reliable Clinical
                  <span className="block text-[#4C292F]">Trial Operations</span>
                </h2>
                <p className="mt-8 text-lg text-[#5A3A3E] leading-relaxed font-light">
                  Seveillar Clinical Supplies Services Pvt. Ltd.
                  operates purpose-built cGMP-compliant
                  infrastructure strategically designed for
                  clinical trial supply management,
                  temperature-controlled storage,
                  packaging operations, and global logistics.
                </p>
                <p className="mt-6 text-lg text-[#5A3A3E] leading-relaxed font-light">
                  Our facility integrates warehousing,
                  cold-chain systems, online monitoring,
                  quality-controlled packaging suites,
                  and validated operational workflows
                  supporting multinational clinical studies.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-12">
                  {[
                    ['22000', 'Sq. Ft Infrastructure'],
                    ['1200+', 'Pallet Storage'],
                    ['5-Star', 'Industrial Zone'],
                    ['GDP/GMP', 'Operational Compliance'],
                  ].map((item, index) => (
                    <div key={index} className="relative overflow-hidden rounded-[24px] border border-[#FAD1C3]/50 bg-[#FAF7F2] p-6">
                      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#E95A25]/5 blur-[50px]" />
                      <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-[#4C292F]">{item[0]}</h3>
                        <p className="mt-2 text-[#5A3A3E] text-sm uppercase tracking-[0.15em]">{item[1]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* COLD CHAIN & STORAGE SECTION - OPTIMIZED */}
        {/* ================================================= */}
        {/* Using dark brown background with orange accents */}
        <section className="relative py-28 overflow-hidden bg-[#28151B]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2200&auto=format&fit=crop"
              alt="Cold Chain Infrastructure"
              fill
              sizes="100vw"
              className="object-cover opacity-[0.06]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#28151B] via-[#28151B] to-[#28151B]" />
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#E95A25]/10 blur-[120px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl mb-8">
                <div className="w-2 h-2 rounded-full bg-[#E95A25]" />
                <span className="text-white uppercase tracking-[0.25em] text-[11px] font-medium">
                  COLD CHAIN & STORAGE
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[4rem] font-bold leading-[0.95] tracking-[-0.05em] text-white">
                Controlled Storage & Temperature
                <span className="block text-[#E95A25]">Monitoring Systems</span>
              </h2>
              <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed font-light max-w-3xl">
                Advanced temperature-controlled infrastructure supporting global clinical trial operations with
                validated monitoring systems, backup power, and continuous environmental tracking.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 mt-20">
              {/* LEFT LARGE PANEL - OPTIMIZED: removed hover scale */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative overflow-hidden rounded-[36px] border border-white/10 min-h-[540px]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?q=80&w=2000&auto=format&fit=crop"
                  alt="Cold Storage"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#28151B]/95 via-[#28151B]/45 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-between p-10">
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-[#E95A25] flex items-center justify-center shadow-[0_20px_60px_rgba(233,90,37,0.3)]">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3">
                      <span className="text-white text-sm uppercase tracking-[0.2em]">VALIDATED STORAGE</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-white leading-tight">Advanced Cold Chain Infrastructure</h3>
                    <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl">
                      Dedicated temperature-controlled environments designed for pharmaceutical and clinical trial
                      material storage with uninterrupted monitoring, backup systems, and validated operational controls.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT SIDE - OPTIMIZED: reduced scale on hover */}
              <div className="grid gap-8">
                {[
                  {
                    title: '2°C to 8°C Storage',
                    desc: 'Controlled cold-room environments for sensitive clinical products.',
                    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1400&auto=format&fit=crop',
                  },
                  {
                    title: '-20°C Freezer Systems',
                    desc: 'Deep freezer storage with backup systems and monitoring.',
                    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1400&auto=format&fit=crop',
                  },
                  {
                    title: '24/7 Monitoring',
                    desc: 'Continuous environmental monitoring and alarm systems.',
                    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1400&auto=format&fit=crop',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group relative overflow-hidden rounded-[30px] border border-white/10 min-h-[155px]"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#28151B]/95 to-[#28151B]/55" />
                    <div className="relative z-10 h-full flex flex-col justify-end p-8">
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      <p className="mt-3 text-white/65 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-16">
              {[
                'Validated Temperature Mapping',
                'Backup Power Infrastructure',
                'Online Monitoring Systems',
                'GDP/GMP Compliant Storage',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl bg-white/5 border border-white/10 px-6 py-5 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-[#E95A25]" />
                    <p className="text-white font-medium leading-relaxed">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* PACKAGING & LABELING INFRASTRUCTURE - OPTIMIZED */}
        {/* ================================================= */}
        {/* Capabilities Background: #F8F2EF (light brown tint) per specification */}
        <section className="relative py-28 bg-[#F8F2EF] overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#E95A25]/5 blur-[120px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-12 h-[2px] bg-[#E95A25]" />
                <span className="text-[#E95A25] uppercase tracking-[0.25em] text-xs font-medium">
                  PACKAGING & LABELING
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[4rem] font-bold leading-[0.95] tracking-[-0.05em] text-[#28151B]">
                Advanced Clinical<br />Packaging &
                <span className="block text-[#4C292F]">Labeling Operations</span>
              </h2>
              <p className="mt-8 text-lg md:text-xl text-[#5A3A3E] leading-relaxed font-light max-w-3xl">
                Dedicated packaging and labeling infrastructure engineered for multinational clinical studies,
                supporting booklet labeling, blister packaging, bottle packaging, kitting, and protocol-driven operational execution.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 mt-20">
              {/* LEFT LARGE PANEL */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative overflow-hidden rounded-[36px] min-h-[620px]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1581093450021-4a7360e9a7f8?q=80&w=2200&auto=format&fit=crop"
                  alt="Packaging Facility"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4C292F]/95 via-[#4C292F]/40 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-between p-10">
                  <div className="flex items-center justify-between">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3">
                      <span className="text-white uppercase tracking-[0.2em] text-xs">ISO CLASSIFIED SUITES</span>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-[#E95A25] flex items-center justify-center shadow-[0_20px_60px_rgba(233,90,37,0.3)]">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-white leading-tight">Integrated Packaging & Labeling Suites</h3>
                    <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl">
                      Dedicated infrastructure supporting protocol-specific packaging, relabeling, booklet labels,
                      randomization workflows, and temperature-sensitive operations.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT GRID - OPTIMIZED: reduced scale on hover */}
              <div className="grid gap-8">
                {[
                  {
                    title: 'Booklet Labeling',
                    desc: 'Multilingual booklet label generation and application.',
                    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1400&auto=format&fit=crop',
                  },
                  {
                    title: 'Blister Packaging',
                    desc: 'Clinical blister packaging with validated workflows.',
                    image: 'https://images.unsplash.com/photo-1581092919535-7146ff1a5905?q=80&w=1400&auto=format&fit=crop',
                  },
                  {
                    title: 'Bottle Packaging',
                    desc: 'Automated bottle packaging and secondary packaging systems.',
                    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1400&auto=format&fit=crop',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group relative overflow-hidden rounded-[30px] min-h-[175px]"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4C292F]/92 to-[#4C292F]/55" />
                    <div className="relative z-10 h-full flex flex-col justify-end p-8">
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      <p className="mt-3 text-white/65 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-16">
              {[
                'ISO Class 7 Suites',
                'ISO Class 8 Suites',
                'Dedicated HVAC Systems',
                'Validated Packaging Processes',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative overflow-hidden rounded-2xl border border-[#FAD1C3]/50 bg-white px-6 py-5"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-[#E95A25]/5 blur-[50px]" />
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-[#E95A25]" />
                    <p className="text-[#28151B] font-medium leading-relaxed">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* GLOBAL DEPOT NETWORK SECTION - OPTIMIZED */}
        {/* ================================================= */}
        {/* Using dark brown background */}
        <section className="relative py-28 overflow-hidden bg-[#4C292F]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2400&auto=format&fit=crop"
              alt="Global Logistics"
              fill
              sizes="100vw"
              className="object-cover opacity-[0.05]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#4C292F] via-[#4C292F] to-[#4C292F]" />
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#E95A25]/10 blur-[120px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl mb-8">
                <div className="w-2 h-2 rounded-full bg-[#E95A25]" />
                <span className="text-white uppercase tracking-[0.25em] text-[11px] font-medium">
                  GLOBAL DEPOT NETWORK
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[4rem] font-bold leading-[0.95] tracking-[-0.05em] text-white">
                Connected Global Distribution &
                <span className="block text-[#E95A25]">Depot Operations</span>
              </h2>
              <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed font-light max-w-3xl mx-auto">
                Integrated global depot and logistics networks supporting multinational clinical trial supply
                operations with efficient regional distribution, storage coordination, and uninterrupted supply continuity.
              </p>
            </div>

            <div className="relative mt-20 overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl min-h-[650px]">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2400&auto=format&fit=crop"
                alt="Global Map"
                fill
                sizes="100vw"
                className="object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#4C292F]/80 via-[#4C292F]/65 to-[#4C292F]/90" />

              {/* GLOW NODES */}
              {[
                { top: '24%', left: '22%', city: 'North America' },
                { top: '38%', left: '48%', city: 'Europe' },
                { top: '52%', left: '67%', city: 'Asia Pacific' },
                { top: '68%', left: '52%', city: 'Middle East' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="absolute"
                  style={{ top: item.top, left: item.left }}
                >
                  <div className="absolute inset-0 w-5 h-5 rounded-full bg-[#E95A25]/40 animate-ping" />
                  <div className="relative w-5 h-5 rounded-full bg-[#E95A25] shadow-[0_0_25px_rgba(233,90,37,0.8)]" />
                  <div className="mt-4 whitespace-nowrap">
                    <p className="text-white text-sm font-medium tracking-wide">{item.city}</p>
                  </div>
                </motion.div>
              ))}

              <div className="absolute bottom-10 left-10 right-10 grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Regional Depot Network', desc: 'Integrated regional distribution support across global clinical trial operations.' },
                  { title: 'Global Distribution', desc: 'Efficient logistics coordination for multinational clinical study requirements.' },
                  { title: 'Supply Continuity', desc: 'Optimized inventory movement and uninterrupted clinical material availability.' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="relative overflow-hidden rounded-[28px] bg-white/8 backdrop-blur-xl border border-white/10 p-7"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-[#E95A25]/10 blur-[50px]" />
                    <div className="relative z-10">
                      <div className="w-12 h-[3px] bg-[#E95A25] rounded-full mb-5" />
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      <p className="mt-4 text-white/65 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* COMPLIANCE & QUALITY SYSTEMS - OPTIMIZED */}
        {/* ================================================= */}
        {/* Services Offered Background: #FFF8F5 (very pale orange) per specification */}
        <section className="relative py-28 overflow-hidden bg-[#FFF8F5]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?q=80&w=2400&auto=format&fit=crop"
              alt="Compliance Systems"
              fill
              sizes="100vw"
              className="object-cover opacity-[0.1]"
            />
          </div>
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#E95A25]/6 blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#28151B]/5 blur-[120px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-[#FAD1C3]/50 mb-8">
                  <div className="w-2 h-2 rounded-full bg-[#E95A25]" />
                  <span className="text-[#28151B] uppercase tracking-[0.25em] text-[11px] font-medium">
                    QUALITY & COMPLIANCE
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[0.95] tracking-[-0.05em] text-[#28151B]">
                  Compliance-Driven Clinical Supply
                  <span className="block text-[#4C292F]">Infrastructure</span>
                </h2>
                <p className="mt-8 text-lg md:text-xl text-[#5A3A3E] leading-relaxed font-light">
                  Seveillar maintains strict quality systems, validated operational workflows,
                  environmental monitoring, and regulatory-ready infrastructure aligned with international
                  clinical supply standards.
                </p>
                <div className="space-y-5 mt-12">
                  {[
                    'GDP Compliant Operations',
                    'GMP Aligned Infrastructure',
                    'Validated Quality Systems',
                    'Audit Ready Documentation',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-5 h-5 rounded-full bg-green-500/20 animate-ping" />
                        <div className="relative w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <p className="text-[#28151B] text-lg font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[36px] border border-[#FAD1C3]/50 bg-white overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center justify-between px-8 py-6 border-b border-[#FAD1C3]/30">
                    <h3 className="text-[#28151B] text-xl font-semibold">Compliance Monitoring</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-green-600 text-sm font-medium">Operational</span>
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    {[
                      { title: 'Environmental Monitoring', value: '24/7 Active' },
                      { title: 'Temperature Validation', value: 'Validated' },
                      { title: 'Quality Documentation', value: 'Compliant' },
                      { title: 'Audit Readiness', value: 'Maintained' },
                    ].map((item, index) => (
                      <div key={index} className="relative overflow-hidden rounded-[24px] bg-[#FAF7F2] border border-[#FAD1C3]/40 p-6">
                        <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-[#E95A25]/5 blur-[40px]" />
                        <div className="relative z-10 flex items-center justify-between">
                          <div>
                            <p className="text-[#5A3A3E] text-sm uppercase tracking-[0.15em]">{item.title}</p>
                            <h4 className="mt-3 text-2xl font-bold text-[#28151B]">{item.value}</h4>
                          </div>
                          <div className="w-14 h-14 rounded-2xl bg-[#E95A25]/10 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-[#E95A25]" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* TECHNOLOGY & MONITORING INFRASTRUCTURE - OPTIMIZED */}
        {/* ================================================= */}
        <section className="relative py-28 bg-white overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#E95A25]/5 blur-[120px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-12 h-[2px] bg-[#E95A25]" />
                <span className="text-[#E95A25] uppercase tracking-[0.25em] text-xs font-medium">
                  TECHNOLOGY INFRASTRUCTURE
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[0.95] tracking-[-0.05em] text-[#28151B]">
                Intelligent Systems<br />For Clinical Supply
                <span className="block text-[#4C292F]">Visibility & Control</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 mt-20">
              <div className="relative overflow-hidden rounded-[36px] bg-[#4C292F] p-10">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop"
                  alt="Technology"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-10"
                />
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold text-white">Operational Intelligence</h3>
                  <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl">
                    Integrated monitoring and operational systems designed to support inventory visibility,
                    shipment tracking, environmental monitoring, and global clinical supply coordination.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-12">
                    {[
                      'SAP ERP Integration',
                      'Inventory Visibility',
                      'Online Monitoring',
                      'Backup Alert Systems',
                    ].map((item, index) => (
                      <div key={index} className="rounded-[24px] border border-white/10 bg-white/5 p-6">
                        <div className="w-3 h-3 rounded-full bg-[#E95A25] mb-5" />
                        <p className="text-white font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-8">
                {[
                  { title: 'Inventory Tracking', desc: 'Real-time stock visibility and supply monitoring.' },
                  { title: 'Automated Monitoring', desc: 'Continuous environmental and operational tracking systems.' },
                  { title: 'Integrated Logistics', desc: 'Connected workflows supporting global clinical distribution.' },
                ].map((item, index) => (
                  <div key={index} className="relative overflow-hidden rounded-[30px] border border-[#FAD1C3]/50 bg-[#FAF7F2] p-8">
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#E95A25]/5 blur-[50px]" />
                    <div className="relative z-10">
                      <div className="w-14 h-[3px] bg-[#E95A25] rounded-full mb-6" />
                      <h3 className="text-2xl font-bold text-[#28151B]">{item.title}</h3>
                      <p className="mt-4 text-[#5A3A3E] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* FINAL CTA SECTION - OPTIMIZED */}
        {/* ================================================= */}
        <section className="relative overflow-hidden py-32">
          <Image
            src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2400&auto=format&fit=crop"
            alt="Facility CTA"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#28151B]/85" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl mb-8">
              <div className="w-2 h-2 rounded-full bg-[#E95A25]" />
              <span className="text-white uppercase tracking-[0.25em] text-[11px] font-medium">
                GLOBAL INFRASTRUCTURE
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[4rem] font-bold leading-[0.95] tracking-[-0.05em] text-white">
              Built To Support Global Clinical
              <span className="block text-[#E95A25]">Trial Operations</span>
            </h2>
            <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed font-light max-w-3xl mx-auto">
              Partner with Seveillar for compliant, scalable, and technology-driven
              clinical supply infrastructure supporting multinational studies.
            </p>
            <div className="flex flex-wrap justify-center gap-5 mt-12">
              <button className="bg-[#E95A25] hover:bg-[#4C292F] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-[0_20px_60px_rgba(233,90,37,0.25)]">
                Contact Our Team
              </button>
              <button className="bg-white/10 backdrop-blur-xl border border-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300">
                Explore Services
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}