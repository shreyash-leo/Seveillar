'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function FacilityPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white overflow-hidden">

     {/* ================================================= */}
{/* FACILITY HERO SECTION */}
{/* ================================================= */}

<section className="relative overflow-hidden min-h-[48vh] flex items-center pt-24 pb-10 bg-[#071c2b]">

  {/* BACKGROUND IMAGE */}

  <div className="absolute inset-0">

    <img
      src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2400&auto=format&fit=crop"
      alt="Facility Background"
      className="w-full h-full object-cover scale-105 blur-[1px] opacity-100"
    />

  </div>

  {/* OVERLAY */}

  <div className="absolute inset-0 bg-gradient-to-r from-[#061520]/94 via-[#0E3B5F]/82 to-[#061520]/88" />

  {/* GLOW */}

  <div className="absolute top-[-20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#E58A2F]/10 blur-[100px]" />

  <div className="absolute bottom-[-20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-[#0E3B5F]/20 blur-[100px]" />

  {/* CONTENT */}

  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20 w-full">

    <div className="grid lg:grid-cols-[1fr_0.85fr] gap-14 items-center">

      {/* LEFT CONTENT */}

      <div className="pt-8">
        {/* TITLE */}
        <br />
        <br />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-3xl md:text-4xl lg:text-[4rem] font-bold leading-[0.92] tracking-[-0.05em] text-white"
        >

          Facility, Infrastructure
          <span className="block text-[#E58A2F]">
            & Global Operations
          </span>

        </motion.h1>

        {/* DESCRIPTION */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mt-7 text-lg md:text-[19px] text-white/72 leading-relaxed font-light max-w-2xl"
        >

          Seveillar operates advanced cGMP-compliant
          infrastructure supporting clinical packaging,
          cold-chain storage, warehousing,
          labeling, and worldwide clinical
          trial distribution operations.

        </motion.p>

        {/* METRICS */}

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

              <h3 className="text-3xl md:text-4xl font-bold text-[#E58A2F] tracking-[-0.04em]">
                {item[0]}
              </h3>

              <p className="mt-2 text-white/55 uppercase tracking-[0.15em] text-[11px]">
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

        {/* IMAGE */}

        <div className="relative overflow-hidden rounded-[34px] w-full max-w-[720px] h-[360px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">

          <img
            src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2000&auto=format&fit=crop"
            alt="Clinical Facility"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#061520]/92 via-[#061520]/35 to-transparent" />

          {/* CONTENT */}

          <div className="relative z-10 h-full flex flex-col justify-end p-8">

            <div className="w-14 h-[3px] bg-[#E58A2F] rounded-full mb-5" />

            <h3 className="text-3xl font-bold text-white leading-tight">

              Advanced cGMP
              Infrastructure

            </h3>

            <p className="mt-4 text-white/70 leading-relaxed">

              Purpose-built operational facility
              supporting global clinical
              supply management workflows.

            </p>

          </div>

        </div>

      </motion.div>

    </div>

  </div>

</section>
{/* ================================================= */}
{/* FACILITY OVERVIEW SECTION */}
{/* ================================================= */}

<section className="relative py-28 bg-white overflow-hidden">

  {/* SOFT GLOW */}

  <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E58A2F]/5 blur-[120px]" />

  {/* CONTENT */}

  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">

    <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-20 items-center">

      {/* LEFT IMAGES */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative"
      >

        {/* MAIN IMAGE */}

        <div className="relative overflow-hidden rounded-[34px] h-[560px] shadow-[0_30px_80px_rgba(0,0,0,0.12)]">

          <img
            src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1800&auto=format&fit=crop"
            alt="Clinical Facility"
            className="w-full h-full object-cover"
          />

        </div>

        {/* FLOATING CARD */}

        <div className="absolute -bottom-10 -right-8 md:right-[-40px] bg-[#071c2b] rounded-[30px] p-8 w-[280px] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

          <div className="w-14 h-14 rounded-2xl bg-[#E58A2F] flex items-center justify-center mb-6">

            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7h18M3 12h18M3 17h18"
              />
            </svg>

          </div>

          <h3 className="text-4xl font-bold text-white">
            24/7
          </h3>

          <p className="mt-3 text-white/65 leading-relaxed">

            Real-time environmental monitoring
            and validated operational systems.

          </p>

        </div>

      </motion.div>

      {/* RIGHT CONTENT */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >

        {/* LABEL */}

        <div className="inline-flex items-center gap-3 mb-7">

          <div className="w-12 h-[2px] bg-[#E58A2F]" />

          <span className="text-[#E58A2F] uppercase tracking-[0.25em] text-xs font-medium">
            FACILITY OVERVIEW
          </span>

        </div>

        {/* TITLE */}

        <h2 className="text-5xl md:text-6xl font-bold text-[#071c2b] leading-[0.95] tracking-[-0.04em]">

          Engineered For
          Reliable Clinical
          <span className="block text-[#800020]">
            Trial Operations
          </span>

        </h2>

        {/* DESCRIPTION */}

        <p className="mt-8 text-lg text-gray-600 leading-relaxed font-light">

          Seveillar Clinical Supplies Services Pvt. Ltd.
          operates purpose-built cGMP-compliant
          infrastructure strategically designed for
          clinical trial supply management,
          temperature-controlled storage,
          packaging operations, and global logistics.

        </p>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed font-light">

          Our facility integrates warehousing,
          cold-chain systems, online monitoring,
          quality-controlled packaging suites,
          and validated operational workflows
          supporting multinational clinical studies.

        </p>

        {/* METRICS */}

        <div className="grid grid-cols-2 gap-6 mt-12">

          {[
            ['22000', 'Sq. Ft Infrastructure'],
            ['1200+', 'Pallet Storage'],
            ['5-Star', 'Industrial Zone'],
            ['GDP/GMP', 'Operational Compliance'],
          ].map((item, index) => (

            <div
              key={index}
              className="relative overflow-hidden rounded-[24px] border border-gray-200 bg-[#f8fafc] p-6"
            >

              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#E58A2F]/5 blur-[50px]" />

              <div className="relative z-10">

                <h3 className="text-3xl font-bold text-[#0E3B5F]">
                  {item[0]}
                </h3>

                <p className="mt-2 text-gray-600 text-sm uppercase tracking-[0.15em]">
                  {item[1]}
                </p>

              </div>

            </div>

          ))}

        </div>

      </motion.div>

    </div>

  </div>

</section>


{/* ================================================= */}
{/* COLD CHAIN & STORAGE SECTION */}
{/* ================================================= */}

<section className="relative py-28 overflow-hidden bg-[#071c2b]">

  {/* BACKGROUND */}

  <div className="absolute inset-0">

    <img
      src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2200&auto=format&fit=crop"
      alt="Cold Chain Infrastructure"
      className="w-full h-full object-cover opacity-[0.06]"
    />

  </div>

  {/* OVERLAY */}

  <div className="absolute inset-0 bg-gradient-to-b from-[#071c2b] via-[#0E3B5F] to-[#071c2b]" />

  {/* GLOW */}

  <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#E58A2F]/10 blur-[120px]" />

  {/* CONTENT */}

  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">

    {/* HEADER */}

    <div className="max-w-4xl">

      {/* LABEL */}

      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl mb-8">

        <div className="w-2 h-2 rounded-full bg-[#E58A2F]" />

        <span className="text-white uppercase tracking-[0.25em] text-[11px] font-medium">
          COLD CHAIN & STORAGE
        </span>

      </div>

      {/* TITLE */}

      <h2 className="text-3xl md:text-4xl lg:text-[4rem] font-bold leading-[0.95] tracking-[-0.05em] text-white">

        Controlled Storage
        & Temperature
        <span className="block text-[#E58A2F]">
          Monitoring Systems
        </span>

      </h2>

      {/* DESCRIPTION */}

      <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed font-light max-w-3xl">

        Advanced temperature-controlled infrastructure
        supporting global clinical trial operations with
        validated monitoring systems, backup power,
        and continuous environmental tracking.

      </p>

    </div>

    {/* STORAGE PANELS */}

    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 mt-20">

      {/* LEFT LARGE PANEL */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-[36px] border border-white/10 min-h-[540px]"
      >

        {/* IMAGE */}

        <img
          src="https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?q=80&w=2000&auto=format&fit=crop"
          alt="Cold Storage"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#071c2b]/95 via-[#071c2b]/45 to-transparent" />

        {/* CONTENT */}

        <div className="relative z-10 h-full flex flex-col justify-between p-10">

          {/* TOP */}

          <div className="flex items-start justify-between">

            <div className="w-16 h-16 rounded-2xl bg-[#E58A2F] flex items-center justify-center shadow-[0_20px_60px_rgba(229,138,47,0.3)]">

              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v18m0 0l4-4m-4 4l-4-4"
                />
              </svg>

            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3">

              <span className="text-white text-sm uppercase tracking-[0.2em]">
                VALIDATED STORAGE
              </span>

            </div>

          </div>

          {/* BOTTOM */}

          <div>

            <h3 className="text-4xl font-bold text-white leading-tight">

              Advanced Cold Chain
              Infrastructure

            </h3>

            <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl">

              Dedicated temperature-controlled environments
              designed for pharmaceutical and clinical trial
              material storage with uninterrupted monitoring,
              backup systems, and validated operational controls.

            </p>

          </div>

        </div>

      </motion.div>

      {/* RIGHT SIDE */}

      <div className="grid gap-8">

        {[
          {
            title: '2°C to 8°C Storage',
            desc: 'Controlled cold-room environments for sensitive clinical products.',
            image:
              'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1400&auto=format&fit=crop',
          },
          {
            title: '-20°C Freezer Systems',
            desc: 'Deep freezer storage with backup systems and monitoring.',
            image:
              'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1400&auto=format&fit=crop',
          },
          {
            title: '24/7 Monitoring',
            desc: 'Continuous environmental monitoring and alarm systems.',
            image:
              'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1400&auto=format&fit=crop',
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

            {/* IMAGE */}

            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-r from-[#071c2b]/95 to-[#071c2b]/55" />

            {/* CONTENT */}

            <div className="relative z-10 h-full flex flex-col justify-end p-8">

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-white/65 leading-relaxed">
                {item.desc}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

    {/* BOTTOM STRIP */}

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

            <div className="w-3 h-3 rounded-full bg-[#E58A2F]" />

            <p className="text-white font-medium leading-relaxed">
              {item}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ================================================= */}
{/* PACKAGING & LABELING INFRASTRUCTURE */}
{/* ================================================= */}

<section className="relative py-28 bg-white overflow-hidden">

  {/* GLOW */}

  <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#E58A2F]/5 blur-[120px]" />

  {/* CONTENT */}

  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">

    {/* HEADER */}

    <div className="max-w-4xl">

      {/* LABEL */}

      <div className="inline-flex items-center gap-3 mb-8">

        <div className="w-12 h-[2px] bg-[#E58A2F]" />

        <span className="text-[#E58A2F] uppercase tracking-[0.25em] text-xs font-medium">
          PACKAGING & LABELING
        </span>

      </div>

      {/* TITLE */}

      <h2 className="text-3xl md:text-4xl lg:text-[4rem] font-bold leading-[0.95] tracking-[-0.05em] text-[#071c2b]">

        Advanced Clinical<br />
        Packaging &
        <span className="block text-[#800020]">
          Labeling Operations
        </span>

      </h2>

      {/* DESCRIPTION */}

      <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-3xl">

        Dedicated packaging and labeling infrastructure
        engineered for multinational clinical studies,
        supporting booklet labeling, blister packaging,
        bottle packaging, kitting, and protocol-driven
        operational execution.

      </p>

    </div>

    {/* MAIN LAYOUT */}

    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 mt-20">

      {/* LEFT LARGE PANEL */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-[36px] min-h-[620px]"
      >

        {/* IMAGE */}

        <img
          src="https://images.unsplash.com/photo-1581093450021-4a7360e9a7f8?q=80&w=2200&auto=format&fit=crop"
          alt="Packaging Facility"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#071c2b]/95 via-[#071c2b]/40 to-transparent" />

        {/* CONTENT */}

        <div className="relative z-10 h-full flex flex-col justify-between p-10">

          {/* TOP */}

          <div className="flex items-center justify-between">

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3">

              <span className="text-white uppercase tracking-[0.2em] text-xs">
                ISO CLASSIFIED SUITES
              </span>

            </div>

            <div className="w-16 h-16 rounded-2xl bg-[#E58A2F] flex items-center justify-center shadow-[0_20px_60px_rgba(229,138,47,0.3)]">

              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-3-3v6"
                />
              </svg>

            </div>

          </div>

          {/* BOTTOM */}

          <div>

            <h3 className="text-4xl font-bold text-white leading-tight">

              Integrated Packaging
              & Labeling Suites

            </h3>

            <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl">

              Dedicated infrastructure supporting
              protocol-specific packaging,
              relabeling, booklet labels,
              randomization workflows,
              and temperature-sensitive operations.

            </p>

          </div>

        </div>

      </motion.div>

      {/* RIGHT GRID */}

      <div className="grid gap-8">

        {[
          {
            title: 'Booklet Labeling',
            desc: 'Multilingual booklet label generation and application.',
            image:
              'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1400&auto=format&fit=crop',
          },
          {
            title: 'Blister Packaging',
            desc: 'Clinical blister packaging with validated workflows.',
            image:
              'https://images.unsplash.com/photo-1581092919535-7146ff1a5905?q=80&w=1400&auto=format&fit=crop',
          },
          {
            title: 'Bottle Packaging',
            desc: 'Automated bottle packaging and secondary packaging systems.',
            image:
              'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1400&auto=format&fit=crop',
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

            {/* IMAGE */}

            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-r from-[#071c2b]/92 to-[#071c2b]/55" />

            {/* CONTENT */}

            <div className="relative z-10 h-full flex flex-col justify-end p-8">

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-white/65 leading-relaxed">
                {item.desc}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

    {/* BOTTOM METRICS */}

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
          className="relative overflow-hidden rounded-2xl border border-gray-200 bg-[#f8fafc] px-6 py-5"
        >

          <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-[#E58A2F]/5 blur-[50px]" />

          <div className="relative z-10 flex items-center gap-4">

            <div className="w-3 h-3 rounded-full bg-[#E58A2F]" />

            <p className="text-[#071c2b] font-medium leading-relaxed">
              {item}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ================================================= */}
{/* GLOBAL DEPOT NETWORK SECTION */}
{/* ================================================= */}

<section className="relative py-28 overflow-hidden bg-[#071c2b]">

  {/* BACKGROUND */}

  <div className="absolute inset-0">

    <img
      src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2400&auto=format&fit=crop"
      alt="Global Logistics"
      className="w-full h-full object-cover opacity-[0.05]"
    />

  </div>

  {/* OVERLAY */}

  <div className="absolute inset-0 bg-gradient-to-b from-[#071c2b] via-[#0E3B5F] to-[#071c2b]" />

  {/* GLOW */}

  <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#E58A2F]/10 blur-[120px]" />

  {/* CONTENT */}

  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">

    {/* HEADER */}

    <div className="max-w-4xl mx-auto text-center">

      {/* LABEL */}

      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl mb-8">

        <div className="w-2 h-2 rounded-full bg-[#E58A2F]" />

        <span className="text-white uppercase tracking-[0.25em] text-[11px] font-medium">
          GLOBAL DEPOT NETWORK
        </span>

      </div>

      {/* TITLE */}

      <h2 className="text-3xl md:text-4xl lg:text-[4] font-bold leading-[0.95] tracking-[-0.05em] text-white">

        Connected Global
        Distribution &
        <span className="block text-[#E58A2F]">
          Depot Operations
        </span>

      </h2>

      {/* DESCRIPTION */}

      <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed font-light max-w-3xl mx-auto">

        Integrated global depot and logistics networks
        supporting multinational clinical trial supply
        operations with efficient regional distribution,
        storage coordination, and uninterrupted supply continuity.

      </p>

    </div>

    {/* MAP SECTION */}

    <div className="relative mt-20 overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl min-h-[650px]">

      {/* MAP IMAGE */}

      <img
        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2400&auto=format&fit=crop"
        alt="Global Map"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#071c2b]/80 via-[#071c2b]/65 to-[#071c2b]/90" />

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
          style={{
            top: item.top,
            left: item.left,
          }}
        >

          {/* PULSE */}

          <div className="absolute inset-0 w-5 h-5 rounded-full bg-[#E58A2F]/40 animate-ping" />

          {/* DOT */}

          <div className="relative w-5 h-5 rounded-full bg-[#E58A2F] shadow-[0_0_25px_rgba(229,138,47,0.8)]" />

          {/* LABEL */}

          <div className="mt-4 whitespace-nowrap">

            <p className="text-white text-sm font-medium tracking-wide">
              {item.city}
            </p>

          </div>

        </motion.div>

      ))}

      {/* FLOATING INFO CARDS */}

      <div className="absolute bottom-10 left-10 right-10 grid md:grid-cols-3 gap-6">

        {[
          {
            title: 'Regional Depot Network',
            desc: 'Integrated regional distribution support across global clinical trial operations.',
          },
          {
            title: 'Global Distribution',
            desc: 'Efficient logistics coordination for multinational clinical study requirements.',
          },
          {
            title: 'Supply Continuity',
            desc: 'Optimized inventory movement and uninterrupted clinical material availability.',
          },
        ].map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="relative overflow-hidden rounded-[28px] bg-white/8 backdrop-blur-xl border border-white/10 p-7"
          >

            {/* GLOW */}

            <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-[#E58A2F]/10 blur-[50px]" />

            <div className="relative z-10">

              <div className="w-12 h-[3px] bg-[#E58A2F] rounded-full mb-5" />

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-white/65 leading-relaxed">
                {item.desc}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  </div>

</section>

{/* ================================================= */}
{/* COMPLIANCE & QUALITY SYSTEMS */}
{/* ================================================= */}

<section className="relative py-28 overflow-hidden bg-white">

  {/* SOFT BACKGROUND */}

  <div className="absolute inset-0">

    <img
      src="https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?q=80&w=2400&auto=format&fit=crop"
      alt="Compliance Systems"
      className="w-full h-full object-cover opacity-[0.1]"
    />

  </div>

  {/* LIGHT GLOW */}

  <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#E58A2F]/6 blur-[120px]" />

  <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#0E3B5F]/5 blur-[120px]" />

  {/* CONTENT */}

  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">

    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-center">

      {/* LEFT */}

      <div>

        {/* LABEL */}

        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#f8fafc] border border-gray-200 mb-8">

          <div className="w-2 h-2 rounded-full bg-[#E58A2F]" />

          <span className="text-[#0E3B5F] uppercase tracking-[0.25em] text-[11px] font-medium">
            QUALITY & COMPLIANCE
          </span>

        </div>

        {/* TITLE */}

        <h2 className="text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[0.95] tracking-[-0.05em] text-[#071c2b]">

          Compliance-Driven
          Clinical Supply
          <span className="block text-[#800020]">
            Infrastructure
          </span>

        </h2>

        {/* TEXT */}

        <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed font-light">

          Seveillar maintains strict quality systems,
          validated operational workflows,
          environmental monitoring,
          and regulatory-ready infrastructure
          aligned with international
          clinical supply standards.

        </p>

        {/* STATUS */}

        <div className="space-y-5 mt-12">

          {[
            'GDP Compliant Operations',
            'GMP Aligned Infrastructure',
            'Validated Quality Systems',
            'Audit Ready Documentation',
          ].map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-4"
            >

              <div className="relative flex items-center justify-center">

                <div className="absolute w-5 h-5 rounded-full bg-green-500/20 animate-ping" />

                <div className="relative w-3 h-3 rounded-full bg-green-500" />

              </div>

              <p className="text-[#071c2b] text-lg font-medium">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* RIGHT DASHBOARD */}

      <div className="relative">

        <div className="rounded-[36px] border border-gray-200 bg-[#f8fafc] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

          {/* HEADER */}

          <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200">

            <h3 className="text-[#071c2b] text-xl font-semibold">
              Compliance Monitoring
            </h3>

            <div className="flex items-center gap-2">

              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

              <span className="text-green-600 text-sm font-medium">
                Operational
              </span>

            </div>

          </div>

          {/* BODY */}

          <div className="p-8 space-y-6">

            {[
              {
                title: 'Environmental Monitoring',
                value: '24/7 Active',
              },
              {
                title: 'Temperature Validation',
                value: 'Validated',
              },
              {
                title: 'Quality Documentation',
                value: 'Compliant',
              },
              {
                title: 'Audit Readiness',
                value: 'Maintained',
              },
            ].map((item, index) => (

              <div
                key={index}
                className="relative overflow-hidden rounded-[24px] bg-white border border-gray-200 p-6"
              >

                {/* GLOW */}

                <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-[#E58A2F]/5 blur-[40px]" />

                <div className="relative z-10 flex items-center justify-between">

                  <div>

                    <p className="text-gray-500 text-sm uppercase tracking-[0.15em]">
                      {item.title}
                    </p>

                    <h4 className="mt-3 text-2xl font-bold text-[#071c2b]">
                      {item.value}
                    </h4>

                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-[#E58A2F]/10 flex items-center justify-center">

                    <div className="w-3 h-3 rounded-full bg-[#E58A2F]" />

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
{/* TECHNOLOGY & MONITORING INFRASTRUCTURE */}
{/* ================================================= */}

<section className="relative py-28 bg-white overflow-hidden">

  {/* GLOW */}

  <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#E58A2F]/5 blur-[120px]" />

  {/* CONTENT */}

  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">

    {/* HEADER */}

    <div className="max-w-4xl">

      <div className="inline-flex items-center gap-3 mb-8">

        <div className="w-12 h-[2px] bg-[#E58A2F]" />

        <span className="text-[#E58A2F] uppercase tracking-[0.25em] text-xs font-medium">
          TECHNOLOGY INFRASTRUCTURE
        </span>

      </div>

      <h2 className="text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[0.95] tracking-[-0.05em] text-[#071c2b]">

        Intelligent Systems<br />
        For Clinical Supply
        <span className="block text-[#800020]">
          Visibility & Control
        </span>

      </h2>

    </div>

    {/* DASHBOARD */}

    <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 mt-20">

      {/* LEFT */}

      <div className="relative overflow-hidden rounded-[36px] bg-[#071c2b] p-10">

        {/* BG */}

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop"
          alt="Technology"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />

        <div className="relative z-10">

          <h3 className="text-4xl font-bold text-white">
            Operational Intelligence
          </h3>

          <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl">

            Integrated monitoring and operational
            systems designed to support inventory
            visibility, shipment tracking,
            environmental monitoring,
            and global clinical supply coordination.

          </p>

          {/* FEATURE GRID */}

          <div className="grid md:grid-cols-2 gap-6 mt-12">

            {[
              'SAP ERP Integration',
              'Inventory Visibility',
              'Online Monitoring',
              'Backup Alert Systems',
            ].map((item, index) => (

              <div
                key={index}
                className="rounded-[24px] border border-white/10 bg-white/5 p-6"
              >

                <div className="w-3 h-3 rounded-full bg-[#E58A2F] mb-5" />

                <p className="text-white font-medium">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="grid gap-8">

        {[
          {
            title: 'Inventory Tracking',
            desc: 'Real-time stock visibility and supply monitoring.',
          },
          {
            title: 'Automated Monitoring',
            desc: 'Continuous environmental and operational tracking systems.',
          },
          {
            title: 'Integrated Logistics',
            desc: 'Connected workflows supporting global clinical distribution.',
          },
        ].map((item, index) => (

          <div
            key={index}
            className="relative overflow-hidden rounded-[30px] border border-gray-200 bg-[#f8fafc] p-8"
          >

            <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#E58A2F]/5 blur-[50px]" />

            <div className="relative z-10">

              <div className="w-14 h-[3px] bg-[#E58A2F] rounded-full mb-6" />

              <h3 className="text-2xl font-bold text-[#071c2b]">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {item.desc}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>

</section>

{/* ================================================= */}
{/* FINAL CTA SECTION */}
{/* ================================================= */}

<section className="relative overflow-hidden py-32">

  {/* IMAGE */}

  <img
    src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2400&auto=format&fit=crop"
    alt="Facility CTA"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* OVERLAY */}

  <div className="absolute inset-0 bg-[#071c2b]/85" />

  {/* CONTENT */}

  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

    {/* LABEL */}

    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl mb-8">

      <div className="w-2 h-2 rounded-full bg-[#E58A2F]" />

      <span className="text-white uppercase tracking-[0.25em] text-[11px] font-medium">
        GLOBAL INFRASTRUCTURE
      </span>

    </div>

    {/* TITLE */}

    <h2 className="text3xl md:text-4xl lg:text-[4rem] font-bold leading-[0.95] tracking-[-0.05em] text-white">

      Built To Support
      Global Clinical
      <span className="block text-[#E58A2F]">
        Trial Operations
      </span>

    </h2>

    {/* TEXT */}

    <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed font-light max-w-3xl mx-auto">

      Partner with Seveillar for compliant,
      scalable, and technology-driven
      clinical supply infrastructure
      supporting multinational studies.

    </p>

    {/* BUTTONS */}

    <div className="flex flex-wrap justify-center gap-5 mt-12">

      <button className="bg-[#E58A2F] hover:bg-[#cf7418] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-[0_20px_60px_rgba(229,138,47,0.25)]">

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