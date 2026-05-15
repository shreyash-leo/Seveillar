"use client";

import Image from "next/image";
import {
  ArrowRight,
  Globe,
  ShieldCheck,
  Users,
  PackageCheck,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollProgress from "../components/ScrollProgress";

// Animation variants (memoized outside component - already good!)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

export default function AboutClient() {
  return (
    <>
      <Navbar />

      <main className="bg-white overflow-hidden">
        
        {/* ================= HERO SECTION ================= */}
        {/* Banner (Hero) Background: #FFF5F0 (pale orange tint) per specification */}
        <section className="relative h-[45vh] md:h-[72vh] flex items-center justify-center overflow-hidden bg-[#FFF5F0]">
          
          {/* Background - OPTIMIZED: removed expensive scale animation */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1974&auto=format&fit=crop')",
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.25, 0.25, 0, 1] }}
          />

          {/* Content */}
          <motion.div 
            className="relative z-10 text-center px-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.p 
              className="uppercase tracking-[0.3em] text-[#E95A25] text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              About Seveillar
            </motion.p>

            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Global Clinical Supply Solutions
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-gray-200 text-base md:text-lg leading-relaxed">
              Delivering reliable, compliant, and innovative clinical trial
              supply management solutions for pharmaceutical and biotechnology
              organizations worldwide.
            </p>
          </motion.div>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        {/* About/Overview Background: #FFFFFF per specification */}
        <section className="py-20 px-6 md:px-14 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-[#E95A25] uppercase tracking-[0.2em] text-sm font-semibold">
                About Us
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#28151B] leading-tight">
                End-To-End Clinical Trial Supply Management
              </h2>

              <p className="mt-6 text-[#5A3A3E] leading-relaxed text-lg">
                Seveillar Clinical Supplies Services Private Limited is an
                India-based organization established in 2015, specializing in
                complete clinical trial supplies management solutions for global
                pharmaceutical, biotechnology, and CRO organizations.
              </p>

              <p className="mt-5 text-[#5A3A3E] leading-relaxed">
                Our capabilities span labeling, packaging, storage,
                distribution, and management of Investigational Medicinal
                Products (IMPs), supported by advanced infrastructure,
                technology-driven processes, and strong regulatory compliance.
              </p>

              <p className="mt-5 text-[#5A3A3E] leading-relaxed">
                Seveillar operates a QP-certified facility supporting European
                clinical trials and a USFDA-audited facility, reflecting our
                commitment to global quality standards and operational
                excellence.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-[#FAD1C3]/30 px-5 py-3 rounded-2xl">
                  <ShieldCheck className="h-5 w-5 text-[#E95A25]" />
                  <span className="text-[#28151B] font-medium">
                    Regulatory Compliance
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-[#FAD1C3]/30 px-5 py-3 rounded-2xl">
                  <Globe className="h-5 w-5 text-[#E95A25]" />
                  <span className="text-[#28151B] font-medium">
                    Global Operations
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right - OPTIMIZED: reduced hover scale */}
            <motion.div 
              className="relative"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1974&auto=format&fit=crop"
                  alt="About Seveillar"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* ================= MEANING BEHIND SEVEILLAR ================= */}
          <motion.div
            className="relative max-w-6xl mx-auto mt-28"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FAD1C3]/30 via-[#FFF7F4] to-[#FFE9DF]/40 rounded-[40px] blur-3xl"></div>

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[36px] border border-[#FAD1C3]/40 bg-white/80 backdrop-blur-xl shadow-[0_20px_80px_rgba(233,90,37,0.08)]">
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#E95A25]/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#28151B]/5 rounded-full blur-3xl"></div>

              <div className="relative grid lg:grid-cols-2 gap-12 items-center p-8 md:p-14 lg:p-20">
                
                {/* LEFT SIDE */}
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E95A25]/20 bg-[#FFF6F2]">
                    <div className="w-2 h-2 rounded-full bg-[#E95A25]"></div>
                    <span className="text-[#E95A25] uppercase tracking-[0.18em] text-xs font-semibold">
                      The Meaning Behind Seveillar
                    </span>
                  </div>

                  <h3 className="mt-6 text-4xl md:text-5xl font-bold text-[#28151B] leading-tight">
                    A Name Built Around
                    <span className="block text-[#E95A25]">
                      Helping People
                    </span>
                  </h3>

                  <p className="mt-6 text-lg leading-relaxed text-[#5A3A3E]">
                    The identity of <span className="font-semibold text-[#28151B]">Seveillar</span> 
                    is rooted in purpose, compassion, and innovation. The name reflects our mission 
                    of supporting people through healthcare advancement and clinical research excellence.
                  </p>

                  {/* Feature Points */}
                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-10 h-10 rounded-xl bg-[#FFF2EC] flex items-center justify-center text-[#E95A25] font-bold">
                        S
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#28151B]">“Seve” — Help</h4>
                        <p className="text-[#6B4A4F] text-sm mt-1">
                          Representing support, care, and commitment towards improving lives.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-10 h-10 rounded-xl bg-[#FFF2EC] flex items-center justify-center text-[#E95A25] font-bold">
                        I
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#28151B]">“Illar” — People</h4>
                        <p className="text-[#6B4A4F] text-sm mt-1">
                          Symbolizing humanity, collaboration, and patient-focused progress.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="relative">
                  <div className="relative rounded-[32px] bg-gradient-to-br from-[#28151B] to-[#3D2026] p-10 md:p-14 overflow-hidden shadow-2xl">
                    
                    {/* Decorative Circle */}
                    <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full border border-white/10"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#E95A25]/10 rounded-full blur-2xl"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-[#E95A25] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                          S
                        </div>

                        <div>
                          <h4 className="text-2xl font-bold text-white">
                            Seveillar
                          </h4>
                          <p className="text-[#FAD1C3] text-sm tracking-wide">
                            Clinical Research & Healthcare
                          </p>
                        </div>
                      </div>

                      <div className="mt-10 space-y-6">
                        <div className="border-l-2 border-[#E95A25] pl-5">
                          <p className="text-[#F8E7E1] leading-relaxed">
                            “A purpose-driven organization focused on enabling life-improving therapies 
                            and advancing healthcare innovation through research excellence.”
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-3 pt-4">
                          <span className="px-4 py-2 rounded-full bg-white/10 text-[#FFE7DC] text-sm">
                            Healthcare
                          </span>

                          <span className="px-4 py-2 rounded-full bg-white/10 text-[#FFE7DC] text-sm">
                            Innovation
                          </span>

                          <span className="px-4 py-2 rounded-full bg-white/10 text-[#FFE7DC] text-sm">
                            Research
                          </span>

                          <span className="px-4 py-2 rounded-full bg-white/10 text-[#FFE7DC] text-sm">
                            Human-Centered
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          </section>

{/* ================= PHILOSOPHY SECTION ================= */}
        {/* Capabilities Background: #F8F2EF (light brown tint) per specification */}
        <section className="py-20 px-6 md:px-14 bg-[#F8F2EF]">
          <div className="max-w-7xl mx-auto">
            
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-[#E95A25] uppercase tracking-[0.2em] text-sm font-semibold">
                Our Philosophy
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#28151B]">
                Think. Commit. Serve.
              </h2>

              <p className="mt-6 text-[#5A3A3E] leading-relaxed text-lg">
                Our guiding philosophy reflects our dedication to strategic
                thinking, operational excellence, and responsive client service
                across every clinical trial project we support.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {/* Card 1 - OPTIMIZED: removed rotation animation */}
              <motion.div 
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] p-8 border border-[#FAD1C3]/50 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="h-16 w-16 rounded-2xl bg-[#FAD1C3]/40 flex items-center justify-center">
                  <ArrowRight className="h-7 w-7 text-[#E95A25]" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#28151B]">
                  Think
                </h3>

                <p className="mt-4 text-[#5A3A3E] leading-relaxed">
                  We apply strategic thinking, innovation, and industry
                  expertise to create effective clinical supply solutions for
                  each study.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-[2rem] p-8 border border-[#FAD1C3]/50 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="h-16 w-16 rounded-2xl bg-[#FAD1C3]/40 flex items-center justify-center">
                  <ShieldCheck className="h-7 w-7 text-[#E95A25]" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#28151B]">
                  Commit
                </h3>

                <p className="mt-4 text-[#5A3A3E] leading-relaxed">
                  We maintain unwavering dedication to quality, reliability,
                  compliance, and operational excellence in every project.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-[2rem] p-8 border border-[#FAD1C3]/50 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="h-16 w-16 rounded-2xl bg-[#FAD1C3]/40 flex items-center justify-center">
                  <Users className="h-7 w-7 text-[#E95A25]" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#28151B]">
                  Serve
                </h3>

                <p className="mt-4 text-[#5A3A3E] leading-relaxed">
                  We prioritize our clients' needs by delivering dependable,
                  responsive, and efficient services worldwide.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= GLOBAL NETWORK ================= */}
        <section className="py-20 px-6 md:px-14 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image - OPTIMIZED: removed hover scale */}
            <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1974&auto=format&fit=crop"
                alt="Global Network"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-[#E95A25] uppercase tracking-[0.2em] text-sm font-semibold">
                Our Global Network
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#28151B] leading-tight">
                Reliable Global Clinical Supply Operations
              </h2>

              <p className="mt-6 text-[#5A3A3E] leading-relaxed text-lg">
                Seveillar has established a strong and reliable global network
                to support the complex requirements of clinical trial supply
                management across multiple regions.
              </p>

              <p className="mt-6 text-[#5A3A3E] leading-relaxed text-lg">
                Through strategic partnerships with qualified vendors,
                logistics providers, and industry specialists, we ensure
                efficient sourcing, storage, and distribution of clinical
                supplies for global clinical studies.
              </p>

              <p className="mt-6 text-[#5A3A3E] leading-relaxed text-lg">
                Our network supports regulatory compliance, supply chain
                integrity, and timely project execution throughout the clinical
                trial lifecycle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= TEAM SECTION ================= */}
        {/* Services Offered Background: #FFF8F5 (very pale orange) per specification */}
        <section className="py-20 px-6 md:px-14 bg-[#FFF8F5]">
          <div className="max-w-7xl mx-auto">
            
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-[#E95A25] uppercase tracking-[0.2em] text-sm font-semibold">
                Leadership Team
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#28151B]">
                Our Leadership
              </h2>

              <p className="mt-6 text-[#5A3A3E] text-lg leading-relaxed">
                Experienced professionals driving innovation, operational
                excellence, and global clinical trial support solutions.
              </p>
            </motion.div>

            {/* Team Cards - OPTIMIZED: reduced hover scale */}
            <div className="grid lg:grid-cols-2 gap-10 mt-16">
              {/* Dr Somnath */}
              <motion.div 
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] overflow-hidden border border-[#FAD1C3]/50 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-[320px]">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                    alt="Dr Somnath Sakore"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-[#28151B]">
                    Dr. Somnath Sakore
                  </h3>

                  <p className="mt-2 text-[#E95A25] font-semibold">
                    Managing Director
                  </p>

                  <p className="mt-6 text-[#5A3A3E] leading-relaxed">
                    Dr. Somnath Sakore is a distinguished pharmaceutical
                    professional and visionary entrepreneur with over two
                    decades of experience in pharmaceutical and clinical
                    research industries.
                  </p>

                    <div className="mt-6 space-y-3">
  {[
    "Global clinical supplies management expertise across therapeutic studies",
    "Strong focus on quality and regulatory compliance standards worldwide",
    "Operational excellence across international clinical research projects",
    "Trusted leadership in pharmaceutical research and healthcare innovation",
  ].map((point, index) => (
    <div key={index} className="flex items-start gap-3">
      <div className="mt-2 h-2 w-2 rounded-full bg-[#E95A25]"></div>
      <p className="text-[#5A3A3E] leading-relaxed">
        {point}
      </p>
    </div>
  ))}
</div>
                </div>
              </motion.div>

              {/* Malharee */}
              <motion.div 
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-[#FAD1C3]/50 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-[320px]">
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
                    alt="Malharee Sutar"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-[#28151B]">
                    Malharee Sutar
                  </h3>

                  <p className="mt-2 text-[#E95A25] font-semibold">
                    Director – Projects & Business Operations
                  </p>

                  <p className="mt-6 text-[#5A3A3E] leading-relaxed">
                    Malharee Sutar is a dynamic leader with extensive
                    experience in clinical supply chain management,
                    pharmaceutical packaging, and global project coordination.
                  </p>

                   <div className="mt-6 space-y-3">
  {[
    "Clinical supply chain management for global trial operations",
    "Global logistics and operational planning across multiple regions",
    "Project execution and client coordination with strategic oversight",
    "Regulatory-compliant clinical operations ensuring quality standards",
  ].map((point, index) => (
    <div key={index} className="flex items-start gap-3">
      <div className="mt-2 h-2 w-2 rounded-full bg-[#E95A25]"></div>
      <p className="text-[#5A3A3E] leading-relaxed">
        {point}
      </p>
    </div>
  ))}
</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <ScrollProgress />
      <Footer />
    </>
  );
}