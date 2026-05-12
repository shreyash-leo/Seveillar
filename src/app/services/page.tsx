'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const services = [
  {
    title: 'Clinical Supplies Consultancy & Project Management',
    description:
      'Strategic planning and end-to-end project management solutions for efficient global clinical supply execution.',
    points: [
      'Supply Chain Consultation',
      'Clinical Supply Strategy',
      'Risk Management',
      'Global Trial Support',
    ],
    image:
      'https://images.unsplash.com/photo-1579165466741-7f35e4755660?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Clinical Supplies Manufacturing',
    description:
      'cGMP-compliant manufacturing for placebo and active dosage forms supported by qualified facilities.',
    points: [
      'Placebo Manufacturing',
      'Over Encapsulation',
      'Active Dosage Forms',
      'cGMP Partnerships',
    ],
    image:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Comparator & Ancillary Supplies Sourcing',
    description:
      'Global sourcing solutions ensuring compliant procurement and uninterrupted clinical trial execution.',
    points: [
      'Comparator Sourcing',
      'Ancillary Supplies',
      'Cold Chain Handling',
      'Traceability & Documentation',
    ],
    image:
      'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Clinical Supplies Blinding, Packaging & Labelling',
    description:
      'Customized packaging and labeling solutions maintaining protocol compliance and study blinding integrity.',
    points: [
      'Blinding Strategy',
      'Primary & Secondary Packaging',
      'Multi-language Labels',
      'Protocol Specific Solutions',
    ],
    image:
      'https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Storage, Distribution & Global Logistics Management',
    description:
      'Temperature-controlled storage and global logistics ensuring secure clinical supply distribution worldwide.',
    points: [
      'Cold Chain Logistics',
      'Global Distribution',
      'GDP/cGMP Compliance',
      'Global Depot Network',
    ],
    image:
      'https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'IVRS / IWRS (IRT) Services',
    description:
      'Customized interactive response technology solutions for patient randomization and supply tracking.',
    points: [
      'Patient Randomization',
      'Enrollment Tracking',
      'Supply Management',
      '24×7 Global Support',
    ],
    image:
      'https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1400&auto=format&fit=crop',
  },
];

const whyChoose = [
  'USFDA Audited Infrastructure',
  'QP Certified Operations',
  'Global Clinical Trial Support',
  'Temperature Controlled Facilities',
  'End-to-End Clinical Supply Solutions',
  'Regulatory & Compliance Expertise',
];

export default function OurServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white overflow-hidden">

        {/* ================= HERO SECTION ================= */}

        <section className="relative min-h-screen md:min-h-[90vh] flex items-center overflow-hidden">

          {/* Background */}

          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2000&auto=format&fit=crop"
              alt="Clinical Services"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-br from-[#071c2b]/90 via-[#0E3B5F]/80 to-[#800020]/70" />

          {/* Glow */}

          <div className="absolute top-40 right-20 w-[450px] h-[450px] bg-[#E58A2F]/20 blur-[140px] rounded-full" />

          <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-14 pt-32 md:pt-24 w-full">

            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl"
            >

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8">
                <div className="w-2 h-2 rounded-full bg-[#E58A2F]" />
                <span className="text-white/90 text-sm tracking-[0.2em] uppercase">
                  Seveillar Services
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight">
                Clinical Supply
                <span className="block text-[#E58A2F]">
                  Services
                </span>
              </h1>

              <p className="mt-8 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed font-light">
                Comprehensive end-to-end clinical trial supply management
                solutions supporting pharmaceutical, biotechnology,
                and CRO organizations globally.
              </p>

              {/* HERO BUTTONS */}

              <div className="flex flex-col sm:flex-row flex-wrap gap-5 mt-10 w-full max-w-2xl">

                <button className="flex-1 min-w-[220px] bg-[#E58A2F] hover:bg-[#c86f1b] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-[0_10px_40px_rgba(229,138,47,0.35)] hover:scale-[1.02]">
                  Explore Capabilities
                </button>

                <button className="flex-1 min-w-[220px] border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300">
                  Contact Our Team
                </button>

              </div>

            </motion.div>
          </div>
        </section>

        {/* ================= FLOATING STATS ================= */}

        <section className="relative z-30 -mt-16 md:-mt-20 px-6 md:px-14">

          <div className="max-w-7xl mx-auto">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

              {[
                ['50+', 'Global Trials'],
                ['25+', 'Countries'],
                ['100%', 'Compliance Focus'],
                ['24/7', 'Global Support'],
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/90 backdrop-blur-xl rounded-3xl border border-white shadow-[0_10px_50px_rgba(0,0,0,0.08)] p-6 md:p-7 hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="w-12 h-1 rounded-full bg-[#E58A2F] mb-5" />

                  <h3 className="text-3xl md:text-4xl font-bold text-[#0E3B5F]">
                    {item[0]}
                  </h3>

                  <p className="mt-2 text-gray-500 font-medium text-sm md:text-base">
                    {item[1]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= INTRO SECTION ================= */}

        <section className="py-20 md:py-28">

          <div className="max-w-7xl mx-auto px-6 md:px-14">

            <div className="grid lg:grid-cols-2 gap-20 items-center">

              {/* LEFT */}

              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >

                <div className="inline-block px-4 py-2 rounded-full bg-[#E58A2F]/10 text-[#E58A2F] text-sm tracking-[0.2em] uppercase mb-6">
                  Global Clinical Expertise
                </div>

                <h2 className="text-4xl md:text-6xl font-bold text-[#0E3B5F] leading-tight tracking-tight">
                  Delivering Reliable &
                  Compliant Clinical
                  Supply Solutions.
                </h2>

                <p className="mt-8 text-lg text-gray-600 leading-relaxed font-light">
                  Seveillar Clinical Supplies Services Pvt. Ltd.
                  provides premium clinical supply management
                  solutions tailored for global clinical studies,
                  ensuring precision, regulatory compliance,
                  and operational excellence.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">

                  {whyChoose.map((item, i) => (
                    <div
                      key={i}
                      className="px-5 py-3 rounded-full bg-gray-50 border border-gray-100 text-gray-700 text-sm"
                    >
                      ✓ {item}
                    </div>
                  ))}

                </div>
              </motion.div>

              {/* RIGHT IMAGE */}

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >

                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#E58A2F]/10 blur-3xl" />

                <div className="relative overflow-hidden rounded-[40px] shadow-2xl">

                  <img
                    src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1400&auto=format&fit=crop"
                    alt="Clinical Facility"
                    className="w-full h-[500px] md:h-[650px] object-cover"
                  />

                </div>

              </motion.div>

            </div>
          </div>
        </section>

        {/* ================= SERVICES GRID ================= */}

        <section className="pb-24 md:pb-28">

          <div className="max-w-7xl mx-auto px-6 md:px-14">

            {/* SECTION HEADER */}

            <div className="text-center mb-16 md:mb-20">

              <div className="inline-flex items-center gap-2 bg-[#E58A2F]/10 px-5 py-2 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-[#E58A2F]" />

                <span className="text-[#E58A2F] uppercase tracking-[0.2em] text-sm">
                  Service Portfolio
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-[#0E3B5F] tracking-tight">
                Comprehensive Clinical
                <span className="block text-[#E58A2F]">
                  Supply Solutions
                </span>
              </h2>

            </div>

            {/* GRID */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group h-full"
                >

                  <div className="flex flex-col h-full bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_80px_rgba(0,0,0,0.1)] hover:-translate-y-3 transition-all duration-700">

                    {/* IMAGE */}

                    <div className="relative h-[250px] overflow-hidden flex-shrink-0">

                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      <div className="absolute bottom-5 left-5">

                        <span className="inline-flex px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs uppercase tracking-[0.2em]">
                          Clinical Services
                        </span>

                      </div>
                    </div>

                    {/* CONTENT */}

                    <div className="flex flex-col flex-1 p-7">

                      <div>

                        <h3 className="text-2xl font-bold text-[#0E3B5F] leading-tight min-h-[90px]">
                          {service.title}
                        </h3>

                        <p className="mt-5 text-gray-600 leading-relaxed text-[15px]">
                          {service.description}
                        </p>

                      </div>

                      {/* TAGS */}

                      <div className="mt-6 flex flex-wrap gap-2">

                        {service.points.map((point, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-2 rounded-full bg-gray-50 text-gray-600 text-xs border border-gray-100"
                          >
                            {point}
                          </span>
                        ))}

                      </div>

                      {/* BUTTON */}

                      <div className="mt-auto pt-8">

                        <button className="w-full flex items-center justify-center gap-2 bg-[#0E3B5F] hover:bg-[#E58A2F] text-white py-4 rounded-2xl font-semibold transition-all duration-300 group/btn shadow-lg hover:shadow-xl">

                          Learn More

                          <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>

                        </button>

                      </div>

                    </div>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* ================= COMPANY PROMISE ================= */}

        <section className="relative py-24 md:py-32 overflow-hidden">

          {/* BACKGROUND */}

          <div className="absolute inset-0">

            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000&auto=format&fit=crop"
              alt="Promise"
              className="w-full h-full object-cover"
            />

          </div>

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-[#071c2b]/80" />

          {/* CONTENT */}

          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-14 text-center">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-md mb-8">

              <div className="w-2 h-2 rounded-full bg-[#E58A2F]" />

              <span className="text-white uppercase tracking-[0.2em] text-sm">
                Our Commitment
              </span>

            </div>

            <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              The Company Promise
            </h2>

            <div className="w-32 h-[2px] bg-[#E58A2F] mx-auto my-10" />

            <p className="text-lg md:text-xl text-white/75 leading-relaxed font-light max-w-3xl mx-auto">
              At Seveillar Clinical Supplies Services,
              we are committed to delivering reliable,
              compliant, and patient-focused clinical supply
              solutions that support successful clinical trials
              across global regions.
            </p>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}