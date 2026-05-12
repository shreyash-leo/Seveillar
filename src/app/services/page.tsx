'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const services = [
  {
    title: 'Clinical Supplies Consultancy & Project Management',
    description:
      'Strategic planning and end-to-end clinical supply execution for global trials.',
    image:
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1600&auto=format&fit=crop',
    details:
      'Seveillar provides complete clinical supply consultancy and project management solutions including forecasting, sourcing strategy, inventory planning, vendor coordination, supply chain optimization, and operational execution for multinational clinical studies.',
    points: [
      'Global Clinical Trial Planning',
      'Supply Forecasting',
      'Vendor Coordination',
      'Risk Mitigation',
      'Inventory Planning',
      'Project Lifecycle Management',
    ],
  },

  {
    title: 'Clinical Supplies Manufacturing',
    description:
      'cGMP manufacturing support for placebo and active dosage forms.',
    image:
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1600&auto=format&fit=crop',
    details:
      'Our manufacturing capabilities support placebo manufacturing, over encapsulation, relabeling, and customized clinical dosage preparation under compliant and validated environments.',
    points: [
      'Placebo Manufacturing',
      'Over Encapsulation',
      'Clinical Batch Support',
      'GMP Manufacturing',
      'Protocol-Based Production',
      'Regulatory Documentation',
    ],
  },

  {
    title: 'Comparator & Ancillary Supplies Sourcing',
    description:
      'Global comparator sourcing with regulatory and cold-chain compliance.',
    image:
      'https://images.unsplash.com/photo-1580281780460-82d277b0e3f8?q=80&w=1600&auto=format&fit=crop',
    details:
      'We provide global sourcing and procurement solutions for comparator drugs and ancillary supplies through validated sourcing networks.',
    points: [
      'Comparator Drug Sourcing',
      'Cold Chain Handling',
      'Global Vendor Network',
      'Supply Traceability',
      'Import/Export Documentation',
      'Ancillary Procurement',
    ],
  },

  {
    title: 'Blinding, Packaging & Labelling',
    description:
      'Protocol-specific packaging and multilingual labeling solutions.',
    image:
      'https://images.unsplash.com/photo-1583912267550-d4bcddf8f7d3?q=80&w=1600&auto=format&fit=crop',
    details:
      'Seveillar provides customized blinding, packaging, and labeling solutions aligned with study protocols and regional compliance requirements.',
    points: [
      'Primary Packaging',
      'Secondary Packaging',
      'Multilingual Labels',
      'Booklet Labels',
      'Blinded Packaging',
      'Randomization Kits',
    ],
  },

  {
    title: 'Storage, Distribution & Global Logistics',
    description:
      'Temperature-controlled storage and international clinical logistics.',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1600&auto=format&fit=crop',
    details:
      'Our global logistics infrastructure supports GDP-compliant storage and international distribution of clinical trial materials.',
    points: [
      'Cold Chain Logistics',
      'Global Distribution',
      'Depot Management',
      'Temperature Monitoring',
      'GDP Warehousing',
      'International Shipments',
    ],
  },

  {
    title: 'IVRS / IWRS (IRT) Services',
    description:
      'Advanced IRT systems for randomization and supply management.',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop',
    details:
      'Seveillar delivers customized Interactive Response Technology solutions supporting patient randomization and inventory management.',
    points: [
      'Patient Randomization',
      'Supply Tracking',
      'IRT Platform Integration',
      'Enrollment Tracking',
      'Cohort Management',
      '24×7 Technical Support',
    ],
  },
];

const workflow = [
  'Planning',
  'Manufacturing',
  'Sourcing',
  'Packaging',
  'Storage',
  'Distribution',
  'Trial Support',
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <>
      <Navbar />

      <main className="bg-white overflow-hidden">
{/* ================================================= */}
{/* PREMIUM INTERNAL HERO SECTION */}
{/* ================================================= */}

<section className="relative overflow-hidden min-h-[68vh] flex items-center pt-28 pb-14 bg-[#071c2b]">

  {/* BACKGROUND IMAGE */}

  <div className="absolute inset-0">

    <img
      src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?q=80&w=2200&auto=format&fit=crop"
      alt="Clinical Background"
      className="w-full h-full object-cover scale-105 blur-[2px] opacity-50"
    />

  </div>

  {/* OVERLAY */}

  <div className="absolute inset-0 bg-gradient-to-r from-[#071c2b]/95 via-[#0E3B5F]/82 to-[#071c2b]/88" />

  {/* LIGHT GLOW */}

  <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#E58A2F]/10 blur-[100px]" />

  <div className="absolute bottom-[-30%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#0E3B5F]/20 blur-[100px]" />

  {/* CONTENT */}

  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20 w-full">

    <div className="grid lg:grid-cols-[1fr_0.65fr] gap-16 items-center">

      {/* LEFT CONTENT */}

      <div className="pt-10">
        {/* HEADING */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-3xl md:text-4xl lg:text-[4rem] font-bold leading-[0.92] tracking-[-0.05em] text-white"
        >

          Integrated Clinical Trial
          <span className="block text-[#E58A2F] mt-1">
            Supply Services
          </span>

        </motion.h1>

        {/* DESCRIPTION */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mt-8 text-lg md:text-[21px] text-white/75 leading-relaxed font-light max-w-2xl"
        >

          Seveillar Clinical Supplies Services Pvt. Ltd.
          delivers integrated clinical supply management
          solutions supporting pharmaceutical,
          biotechnology, and CRO organizations globally.

        </motion.p>

        {/* METRICS */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-wrap gap-10 md:gap-16 mt-14"
        >

          {[
            ['300+', 'Clinical Studies'],
            ['25+', 'Countries'],
            ['1200+', 'Pallet Capacity'],
            ['24/7', 'Support'],
          ].map((item, index) => (

            <div
              key={index}
              className="relative"
            >

              <h3 className="text-3xl md:text-4xl font-bold text-[#E58A2F]">
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
        className="flex justify-center lg:justify-end"
      >

        <div className="relative">

          {/* GLOW */}

          <div className="absolute inset-0 bg-[#E58A2F]/10 blur-[40px] rounded-full" />

          {/* IMAGE */}

          <div className="relative w-[220px] md:w-[280px] aspect-[9/13] rounded-[34px] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">

            <img
              src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?q=80&w=1400&auto=format&fit=crop"
              alt="Clinical Research"
              className="w-full h-full object-cover"
            />

            {/* OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#071c2b]/45 to-transparent" />

          </div>

        </div>

      </motion.div>

    </div>

  </div>

</section>

        {/* ================================================= */}
{/* SERVICES OVERVIEW SECTION */}
{/* ================================================= */}

<section className="relative py-28 bg-white overflow-hidden">

  {/* SOFT GLOW */}

  <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E58A2F]/5 blur-[120px]" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">

    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-center">

      {/* LEFT SIDE */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        {/* LABEL */}

        <div className="inline-flex items-center gap-3 mb-6">

          <div className="w-12 h-[2px] bg-[#E58A2F]" />

          <span className="text-[#E58A2F] uppercase tracking-[0.25em] text-xs font-medium">
            SERVICE OVERVIEW
          </span>

        </div>

        {/* TITLE */}

        <h2 className="text-5xl md:text-6xl font-bold text-[#0E3B5F] leading-[1] tracking-tight">

          Delivering Reliable
          Clinical Supply
          <span className="block text-[#800020]">
            Solutions Worldwide
          </span>

        </h2>

      </motion.div>

      {/* RIGHT SIDE */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >

        <p className="text-xl text-gray-600 leading-relaxed font-light">

          Seveillar Clinical Supplies Services Pvt. Ltd.
          supports pharmaceutical, biotechnology,
          and CRO organizations with integrated
          clinical trial supply management services
          designed around compliance, scalability,
          and operational precision.

        </p>

        <p className="mt-8 text-lg text-gray-600 leading-relaxed font-light">

          Our expertise spans comparator sourcing,
          packaging & labeling, temperature-controlled
          logistics, warehousing, manufacturing support,
          IRT systems, and end-to-end supply chain
          coordination for multinational clinical studies.

        </p>

        {/* FEATURES */}

        <div className="grid sm:grid-cols-2 gap-5 mt-10">

          {[
            'Global Clinical Supply Operations',
            'GDP & GMP Compliant Processes',
            'Temperature-Controlled Logistics',
            'End-to-End Trial Support',
          ].map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-3"
            >

              <div className="w-8 h-8 rounded-lg bg-[#E58A2F]/10 flex items-center justify-center">

                <svg
                  className="w-4 h-4 text-[#E58A2F]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>

              </div>

              <p className="text-[#0E3B5F] font-medium">
                {item}
              </p>

            </div>

          ))}

        </div>

      </motion.div>

    </div>

  </div>

</section>

        {/* ================================================= */}
{/* PREMIUM SERVICES GRID */}
{/* ================================================= */}

<section className="py-28 bg-white">

  <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20">

    {/* HEADER */}

    <div className="mb-20">

      <div className="inline-flex items-center gap-3 mb-6">

        <div className="w-12 h-[2px] bg-[#E58A2F]" />

        <span className="text-[#E58A2F] uppercase tracking-[0.25em] text-xs font-medium">
          SERVICE PORTFOLIO
        </span>

      </div>

      <h2 className="text-5xl md:text-6xl font-bold text-[#0E3B5F] tracking-tight">
        Clinical Supply
        <span className="block text-[#800020]">
          Capabilities
        </span>
      </h2>

    </div>

    {/* EQUAL GRID */}

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {services.map((service, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          onClick={() => setSelectedService(service)}
          className="group relative overflow-hidden rounded-[28px] bg-[#071c2b] h-[620px] cursor-pointer"
        >

          {/* IMAGE */}

          <div className="absolute inset-0 overflow-hidden">

            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

          </div>

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#071c2b] via-[#071c2b]/70 to-transparent" />

          {/* GLOW */}

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#E58A2F]/20 to-transparent" />

          {/* CONTENT */}

          <div className="relative z-10 flex flex-col justify-end h-full p-8">

            {/* LABEL */}

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 w-fit mb-6">

              <div className="w-2 h-2 rounded-full bg-[#E58A2F]" />

              <span className="text-white uppercase tracking-[0.2em] text-[10px]">
                Clinical Services
              </span>

            </div>

            {/* TITLE */}

            <h3 className="text-3xl font-bold text-white leading-tight">
              {service.title}
            </h3>

            {/* DESC */}

            <p className="mt-5 text-white/70 text-base leading-relaxed">
              {service.description}
            </p>

            {/* CTA */}

            <div className="mt-8 flex items-center gap-3 text-[#E58A2F] font-semibold">

              <span>Learn More</span>

              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>

            </div>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

       {/* ================================================= */}
{/* IMPROVED OPERATIONAL WORKFLOW SECTION */}
{/* ================================================= */}

<section className="relative py-22 md:py-24 overflow-hidden bg-[#071c2b]">

  {/* SOFT BACKGROUND */}

  <div className="absolute inset-0">

    <img
      src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2200&auto=format&fit=crop"
      alt="Clinical Workflow"
      className="w-full h-full object-cover opacity-[0.05]"
    />

  </div>

  {/* OVERLAY */}

  <div className="absolute inset-0 bg-gradient-to-b from-[#071c2b] via-[#0E3B5F] to-[#071c2b]" />

  {/* LIGHT GLOW */}

  <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#E58A2F]/8 blur-[100px]" />

  {/* CONTENT */}

  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">

    {/* HEADER */}

    <div className="text-center max-w-4xl mx-auto">

      {/* LABEL */}

      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/8 backdrop-blur-xl border border-white/10 mb-7">

        <div className="w-2 h-2 rounded-full bg-[#E58A2F]" />

        <span className="text-white uppercase tracking-[0.22em] text-[11px] font-medium">
          OPERATIONAL WORKFLOW
        </span>

      </div>

      {/* TITLE */}

      <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold leading-[0.95] tracking-[-0.04em] text-white">

        Clinical Supply
        <span className="block text-[#E58A2F]">
          Execution Process
        </span>

      </h2>

      {/* DESCRIPTION */}

      <p className="mt-7 text-lg md:text-xl text-white/68 leading-relaxed font-light">

        A streamlined operational workflow designed to support
        global clinical trial supply management with precision,
        compliance, visibility, and end-to-end coordination.

      </p>

    </div>

    {/* WORKFLOW */}

    <div className="mt-20 relative">

      {/* CONNECTOR */}

      <div className="hidden xl:block absolute top-16 left-[8%] right-[8%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">

        {[
          {
            number: '01',
            title: 'Planning',
            text: 'Clinical forecasting, protocol evaluation, and operational planning.',
          },
          {
            number: '02',
            title: 'Sourcing',
            text: 'Comparator procurement and global vendor coordination.',
          },
          {
            number: '03',
            title: 'Packaging',
            text: 'Clinical labeling, storage, and inventory management.',
          },
          {
            number: '04',
            title: 'Distribution',
            text: 'Global logistics, tracking, and trial support operations.',
          },
        ].map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="group relative"
          >

            {/* CARD */}

            <div className="relative h-full rounded-[28px] bg-white/6 backdrop-blur-xl border border-white/10 p-7 hover:border-[#E58A2F]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">

              {/* TOP */}

              <div className="flex items-center justify-between">

                {/* NUMBER */}

                <div className="w-14 h-14 rounded-2xl bg-[#E58A2F] flex items-center justify-center shadow-[0_12px_35px_rgba(229,138,47,0.3)]">

                  <span className="text-white font-bold">
                    {item.number}
                  </span>

                </div>

                {/* DOT */}

                <div className="hidden xl:flex w-3.5 h-3.5 rounded-full bg-[#E58A2F]" />

              </div>

              {/* CONTENT */}

              <div className="mt-8">

                <h3 className="text-2xl font-bold text-white">

                  {item.title}

                </h3>

                <p className="mt-4 text-white/62 leading-relaxed font-light text-[15px]">

                  {item.text}

                </p>

              </div>

              {/* HOVER EFFECT */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#E58A2F]/10 to-transparent" />

            </div>

          </motion.div>

        ))}

      </div>

    </div>

    {/* BOTTOM STRIP */}

    <div className="grid md:grid-cols-3 gap-6 mt-16">

      {[
        'Global Clinical Coordination',
        'GDP & GMP Compliance',
        'Real-Time Operational Visibility',
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

            <p className="text-white font-medium">
              {item}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

        {/* ================================================= */}
        {/* COMPLIANCE */}
        {/* ================================================= */}

        <section className="relative py-32 bg-[#f8fafc] overflow-hidden">

          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E58A2F]/5 blur-[120px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20">

            <div className="max-w-4xl">

              <div className="inline-flex items-center gap-3 mb-6">

                <div className="w-12 h-[2px] bg-[#E58A2F]" />

                <span className="text-[#E58A2F] uppercase tracking-[0.25em] text-xs font-medium">
                  COMPLIANCE & QUALITY
                </span>

              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-[#0E3B5F] leading-[1] tracking-tight">

                Built Around
                Global Regulatory
                <span className="block text-[#800020]">
                  Standards
                </span>

              </h2>

            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

              {[
                {
                  title: 'USFDA Aligned Operations',
                  text: 'Operational systems aligned with global pharmaceutical regulatory expectations.',
                },
                {
                  title: 'GDP & GMP Compliance',
                  text: 'Clinical storage, handling, packaging, and distribution under global standards.',
                },
                {
                  title: 'Cold Chain Validation',
                  text: 'Validated temperature-controlled logistics supporting critical clinical products.',
                },
                {
                  title: 'Quality Management Systems',
                  text: 'Traceability, audit readiness, documentation control, and operational quality assurance.',
                },
                {
                  title: '21 CFR Part 11',
                  text: 'Technology and documentation systems aligned with electronic compliance standards.',
                },
                {
                  title: 'Global Regulatory Support',
                  text: 'Regional documentation, import/export support, and protocol-specific compliance.',
                },
              ].map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-lg hover:-translate-y-2 transition-all duration-500"
                >

                  <div className="w-16 h-16 rounded-2xl bg-[#E58A2F]/10 flex items-center justify-center mb-8">

                    <svg
                      className="w-8 h-8 text-[#E58A2F]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                  </div>

                  <h3 className="text-2xl font-bold text-[#0E3B5F] leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-gray-600 leading-relaxed text-[15px]">
                    {item.text}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        {/* ================================================= */}
        {/* CTA */}
        {/* ================================================= */}

        <section className="relative py-32 overflow-hidden">

          <div className="absolute inset-0">

            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2200&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover"
            />

          </div>

          <div className="absolute inset-0 bg-[#071c2b]/85" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-14 text-center">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-md mb-8">

              <div className="w-2 h-2 rounded-full bg-[#E58A2F]" />

              <span className="text-white uppercase tracking-[0.2em] text-sm">
                Global Clinical Support
              </span>

            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">

              Ready To Optimize
              <span className="block text-[#E58A2F]">
                Your Clinical Supply Chain?
              </span>

            </h2>

            <p className="mt-8 text-lg md:text-xl text-white/75 leading-relaxed font-light max-w-3xl mx-auto">

              Partner with Seveillar Clinical Supplies Services
              for compliant, scalable, and globally integrated
              clinical trial supply solutions.

            </p>

          </div>

        </section>

       {/* ================================================= */}
{/* PREMIUM POPUP MODAL */}
{/* ================================================= */}

<AnimatePresence>

  {selectedService && (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
    >

      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 40 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-[20px] overflow-hidden w-full max-w-5xl max-h-[88vh] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
      >

        {/* CUSTOM SCROLLBAR */}

        <style jsx>{`
          .popup-scroll::-webkit-scrollbar {
            width: 5px;
          }

          .popup-scroll::-webkit-scrollbar-track {
            background: transparent;
          }

          .popup-scroll::-webkit-scrollbar-thumb {
            background: rgba(14, 59, 95, 0.22);
            border-radius: 20px;
          }

          .popup-scroll::-webkit-scrollbar-thumb:hover {
            background: rgba(229, 138, 47, 0.5);
          }
        `}</style>

        {/* CLOSE BUTTON */}

        <button
          onClick={() => setSelectedService(null)}
          className="absolute top-5 right-5 z-30 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#E58A2F] transition-all duration-300"
        >
          ✕
        </button>

        {/* SCROLL AREA */}

        <div className="popup-scroll overflow-y-auto max-h-[88vh]">

          {/* IMAGE */}

          <div className="relative h-[280px] md:h-[340px] overflow-hidden">

            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* TITLE */}

            <div className="absolute bottom-8 left-8 md:left-10 right-8">

              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-5">

                <div className="w-2 h-2 rounded-full bg-[#E58A2F]" />

                <span className="text-white uppercase tracking-[0.2em] text-[10px]">
                  Clinical Services
                </span>

              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.05] max-w-3xl">
                {selectedService.title}
              </h2>

            </div>

          </div>

          {/* CONTENT */}

          <div className="p-8 md:p-12">

            {/* DESCRIPTION */}

            <div className="max-w-4xl">

              <p className="text-lg text-gray-600 leading-relaxed font-light">

                {selectedService.details}

              </p>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed font-light">

                Our operational teams work closely with sponsors,
                CROs, manufacturing partners, and logistics providers
                to ensure uninterrupted clinical supply execution
                across all study phases while maintaining regulatory
                compliance, product integrity, and temperature-controlled
                distribution standards.

              </p>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed font-light">

                Seveillar focuses on scalable infrastructure,
                process-driven execution, risk mitigation,
                inventory visibility, and global coordination
                to support complex international clinical trial operations.

              </p>

            </div>

            {/* FEATURES */}

            <div className="grid md:grid-cols-2 gap-5 mt-14">

              {selectedService.points.map((point: string, idx: number) => (

                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-[18px] bg-[#f8fafc] border border-gray-100 hover:border-[#E58A2F]/30 transition-all duration-300"
                >

                  {/* ICON */}

                  <div className="w-10 h-10 rounded-xl bg-[#E58A2F]/10 flex items-center justify-center flex-shrink-0">

                    <svg
                      className="w-5 h-5 text-[#E58A2F]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                  </div>

                  {/* TEXT */}

                  <p className="text-[#0E3B5F] font-medium leading-relaxed">
                    {point}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </motion.div>

    </motion.div>

  )}

</AnimatePresence>

      </main>

      <Footer />
    </>
  );
}