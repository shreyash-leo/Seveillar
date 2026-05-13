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
import { useInView } from "react-intersection-observer";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

// Animation variants with proper typing
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

export default function AboutPage() {
  // Custom hook for scroll animations
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [philosophyRef, philosophyInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [globalRef, globalInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <Navbar />

      <main className="bg-white overflow-hidden">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative h-[45vh] md:h-[68vh] flex items-center justify-center overflow-hidden">
          
          {/* Background with parallax effect */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1974&auto=format&fit=crop')",
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.25, 0.25, 0, 1] }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <motion.div 
            className="relative z-10 text-center px-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.p 
              className="uppercase tracking-[0.3em] text-orange-400 text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              About Seveillar
            </motion.p>

            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Global Clinical Supply Solutions
            </motion.h1>

            <motion.p 
              className="mt-6 max-w-3xl mx-auto text-gray-200 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Delivering reliable, compliant, and innovative clinical trial
              supply management solutions for pharmaceutical and biotechnology
              organizations worldwide.
            </motion.p>
          </motion.div>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section ref={aboutRef} className="py-20 px-6 md:px-14 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
            >
              <p className="text-orange-500 uppercase tracking-[0.2em] text-sm font-semibold">
                About Us
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900 leading-tight">
                End-To-End Clinical Trial Supply Management
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Seveillar Clinical Supplies Services Private Limited is an
                India-based organization established in 2015, specializing in
                complete clinical trial supplies management solutions for global
                pharmaceutical, biotechnology, and CRO organizations.
              </p>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Our capabilities span labeling, packaging, storage,
                distribution, and management of Investigational Medicinal
                Products (IMPs), supported by advanced infrastructure,
                technology-driven processes, and strong regulatory compliance.
              </p>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Seveillar operates a QP-certified facility supporting European
                clinical trials and a USFDA-audited facility, reflecting our
                commitment to global quality standards and operational
                excellence.
              </p>

              <motion.div 
                className="mt-8 flex flex-wrap gap-4"
                variants={staggerContainer}
                initial="hidden"
                animate={aboutInView ? "visible" : "hidden"}
              >
                <motion.div 
                  className="flex items-center gap-3 bg-orange-50 px-5 py-3 rounded-2xl"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <ShieldCheck className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700 font-medium">
                    Regulatory Compliance
                  </span>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-3 bg-orange-50 px-5 py-3 rounded-2xl"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <Globe className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700 font-medium">
                    Global Operations
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right */}
            <motion.div 
              className="relative"
              variants={fadeInRight}
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1974&auto=format&fit=crop"
                  alt="About Seveillar"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================= PHILOSOPHY SECTION ================= */}
        <section ref={philosophyRef} className="py-20 px-6 md:px-14 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              variants={fadeInUp}
              initial="hidden"
              animate={philosophyInView ? "visible" : "hidden"}
            >
              <p className="text-orange-500 uppercase tracking-[0.2em] text-sm font-semibold">
                Our Philosophy
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Think. Commit. Serve.
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Our guiding philosophy reflects our dedication to strategic
                thinking, operational excellence, and responsive client service
                across every clinical trial project we support.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8 mt-16"
              variants={staggerContainer}
              initial="hidden"
              animate={philosophyInView ? "visible" : "hidden"}
            >
              {/* Card 1 */}
              <motion.div 
                className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="h-16 w-16 rounded-2xl bg-orange-50 flex items-center justify-center"
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                >
                  <ArrowRight className="h-7 w-7 text-orange-500" />
                </motion.div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Think
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  We apply strategic thinking, innovation, and industry
                  expertise to create effective clinical supply solutions for
                  each study.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="h-16 w-16 rounded-2xl bg-orange-50 flex items-center justify-center"
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                >
                  <ShieldCheck className="h-7 w-7 text-orange-500" />
                </motion.div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Commit
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  We maintain unwavering dedication to quality, reliability,
                  compliance, and operational excellence in every project.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="h-16 w-16 rounded-2xl bg-orange-50 flex items-center justify-center"
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                >
                  <Users className="h-7 w-7 text-orange-500" />
                </motion.div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Serve
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  We prioritize our clients' needs by delivering dependable,
                  responsive, and efficient services worldwide.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================= GLOBAL NETWORK ================= */}
        <section ref={globalRef} className="py-20 px-6 md:px-14 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image */}
            <motion.div 
              className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl"
              variants={fadeInLeft}
              initial="hidden"
              animate={globalInView ? "visible" : "hidden"}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-full w-full"
              >
                <Image
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1974&auto=format&fit=crop"
                  alt="Global Network"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate={globalInView ? "visible" : "hidden"}
            >
              <p className="text-orange-500 uppercase tracking-[0.2em] text-sm font-semibold">
                Our Global Network
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900 leading-tight">
                Reliable Global Clinical Supply Operations
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Seveillar has established a strong and reliable global network
                to support the complex requirements of clinical trial supply
                management across multiple regions.
              </p>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Through strategic partnerships with qualified vendors,
                logistics providers, and industry specialists, we ensure
                efficient sourcing, storage, and distribution of clinical
                supplies for global clinical studies.
              </p>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Our network supports regulatory compliance, supply chain
                integrity, and timely project execution throughout the clinical
                trial lifecycle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= TEAM SECTION ================= */}
        <section ref={teamRef} className="py-20 px-6 md:px-14 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              variants={fadeInUp}
              initial="hidden"
              animate={teamInView ? "visible" : "hidden"}
            >
              <p className="text-orange-500 uppercase tracking-[0.2em] text-sm font-semibold">
                Leadership Team
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Our Leadership
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                Experienced professionals driving innovation, operational
                excellence, and global clinical trial support solutions.
              </p>
            </motion.div>

            {/* Team Cards */}
            <motion.div 
              className="grid lg:grid-cols-2 gap-10 mt-16"
              variants={staggerContainer}
              initial="hidden"
              animate={teamInView ? "visible" : "hidden"}
            >
              {/* Dr Somnath */}
              <motion.div 
                className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="relative h-[320px]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                    alt="Dr Somnath Sakore"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900">
                    Dr. Somnath Sakore
                  </h3>

                  <p className="mt-2 text-orange-500 font-semibold">
                    Managing Director
                  </p>

                  <p className="mt-6 text-gray-600 leading-relaxed">
                    Dr. Somnath Sakore is a distinguished pharmaceutical
                    professional and visionary entrepreneur with over two
                    decades of experience in pharmaceutical and clinical
                    research industries.
                  </p>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    Under his leadership, Seveillar has grown into a trusted
                    global partner providing comprehensive clinical supplies
                    management solutions with strong emphasis on quality,
                    compliance, and operational excellence.
                  </p>
                </div>
              </motion.div>

              {/* Malharee */}
              <motion.div 
                className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="relative h-[320px]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
                    alt="Malharee Sutar"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900">
                    Malharee Sutar
                  </h3>

                  <p className="mt-2 text-orange-500 font-semibold">
                    Director – Projects & Business Operations
                  </p>

                  <p className="mt-6 text-gray-600 leading-relaxed">
                    Malharee Sutar is a dynamic leader with extensive
                    experience in clinical supply chain management,
                    pharmaceutical packaging, and global project coordination.
                  </p>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    He oversees project management, operational planning,
                    logistics, and client coordination, ensuring seamless
                    execution of global clinical supply operations with full
                    regulatory compliance.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================= SERVICES OVERVIEW ================= */}
        <section ref={servicesRef} className="py-20 px-6 md:px-14 bg-white">
          <div className="max-w-7xl mx-auto">
            
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              variants={fadeInUp}
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
            >
              <p className="text-orange-500 uppercase tracking-[0.2em] text-sm font-semibold">
                Our Services
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Comprehensive Clinical Supply Solutions
              </h2>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8 mt-16"
              variants={staggerContainer}
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-lg transition-all"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <motion.div
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                  className="inline-block"
                >
                  <PackageCheck className="h-10 w-10 text-orange-500" />
                </motion.div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Packaging & Labeling
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  GMP-compliant packaging, labeling, and blinding solutions for
                  global clinical studies.
                </p>
              </motion.div>

              <motion.div 
                className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-lg transition-all"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <motion.div
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                  className="inline-block"
                >
                  <Globe className="h-10 w-10 text-orange-500" />
                </motion.div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Global Distribution
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Reliable sourcing, logistics, and worldwide distribution of
                  clinical trial materials.
                </p>
              </motion.div>

              <motion.div 
                className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-lg transition-all"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <motion.div
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                  className="inline-block"
                >
                  <ShieldCheck className="h-10 w-10 text-orange-500" />
                </motion.div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Regulatory Compliance
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  End-to-end operational support aligned with international
                  quality and regulatory standards.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}