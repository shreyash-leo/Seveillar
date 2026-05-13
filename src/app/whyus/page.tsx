"use client";

import Image from "next/image";
import {
  ShieldCheck,
  Globe,
  Boxes,
  PackageCheck,
  CheckCircle2,
  Cpu,
  Users,
  ArrowRight,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const differentiators = [
  {
    title: "QP Certified Facility for Europe",
    description:
      "Seveillar operates a Qualified Person (QP) certified facility, enabling support for clinical trials across the European region while ensuring full compliance with EU GMP requirements.",
    icon: ShieldCheck,
  },
  {
    title: "USFDA Audited Facility",
    description:
      "Our facility has been audited by USFDA, reflecting our commitment to global quality standards, compliance, and operational excellence.",
    icon: CheckCircle2,
  },
  {
    title: "Large Clinical Trial Supply Facility",
    description:
      "One of the largest facilities for labeling, packaging, and storage of Investigational Medicinal Products (IMPs).",
    icon: Boxes,
  },
  {
    title: "End-to-End Clinical Supply Solutions",
    description:
      "Comprehensive services including planning, labeling, packaging, storage, inventory management, global distribution, returns, and reconciliation.",
    icon: PackageCheck,
  },
  {
    title: "Quality & Compliance First",
    description:
      "Operations aligned with GMP, GDP, and GCP standards ensuring traceability, quality, and compliance throughout the supply chain.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable & Agile Operations",
    description:
      "Efficiently managing small to large-scale clinical trials across multiple regions with speed and flexibility.",
    icon: Globe,
  },
  {
    title: "Technology-Driven Operations",
    description:
      "Advanced systems and digital solutions providing real-time visibility, traceability, and efficient clinical supply management.",
    icon: Cpu,
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Customized, responsive, and reliable support designed to work as an extension of your clinical operations team.",
    icon: Users,
  },
];

const uspData = [
  "End to End Services Offerings in Clinical Trial Supply Management Domain",
  "22000 Sq. Ft State of Art GMP Certified Facility",
  "Strategic Partner for More Than 300 Global Clinical Studies Across Globe",
  "Catering Services to more than 100 Sponsors Globally",
  "USFDA Audited & QP Certified GMP Facility",
  "Facility with Storage Capacity of 1200 Pallets across all temperature ranges",
  "Competent Technical Team with consolidated experience of more than 100 Years in CTSM",
  "SAP Platform for managing Supply Chain",
  "Developed Walleting & Booklet Label Printing Capabilities",
  "Developed & Tested Innovative Blinding Technologies",
  "Network of Approved Global Depots",
  "Support of in-house Developed IRT Platform",
];

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
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function WhyUsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white overflow-hidden">
        
        {/* ================= HERO SECTION ================= */}
        <motion.section 
          initial="hidden"
          animate="visible"
          className="relative h-[45vh] md:h-[68vh] flex items-center justify-center overflow-hidden"
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1974&auto=format&fit=crop')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/65" />

          {/* Content */}
          <div className="relative z-10 text-center px-6">
            <motion.p 
              variants={fadeInUp}
              className="uppercase tracking-[0.3em] text-orange-400 text-sm mb-4"
            >
              Why Choose Seveillar
            </motion.p>

            <motion.h1 
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              Trusted Global Clinical Supply Partner
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-3xl mx-auto text-gray-200 text-base md:text-lg leading-relaxed"
            >
              Reliable, compliant, and efficient clinical trial supply
              solutions designed to support global clinical research with
              operational excellence and scalability.
            </motion.p>
          </div>
        </motion.section>

        {/* ================= INTRO SECTION ================= */}
        <section className="py-24 px-6 md:px-14 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <p className="text-orange-500 uppercase tracking-[0.2em] text-sm font-semibold">
                Why Choose Us
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Delivering Reliable Global Clinical Supply Solutions
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                At Seveillar Clinical Supplies Services Pvt. Ltd., we
                deliver reliable, compliant, and efficient clinical trial
                supply solutions designed to support global clinical
                research.
              </p>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Our infrastructure, regulatory compliance, and operational
                expertise make us a trusted partner for sponsors, CROs,
                and pharmaceutical companies worldwide.
              </p>

              {/* Commitment Box */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                className="mt-10 bg-orange-50 border border-orange-100 rounded-[2rem] p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Commitment
                </h3>

                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  {[
                    "Global regulatory compliance",
                    "Quality-driven operations",
                    "Timely execution",
                    "Scalable solutions",
                    "Long-term partnerships",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-orange-500" />

                      <span className="text-gray-700">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
              className="relative"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1974&auto=format&fit=crop"
                  alt="Clinical Facility"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================= DIFFERENTIATORS ================= */}
        <section className="py-24 px-6 md:px-14 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            
            {/* Heading */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-orange-500 uppercase tracking-[0.2em] text-sm font-semibold">
                Our Key Differentiators
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
                Excellence Built Into Every Operation
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                Infrastructure, compliance, technology, and operational
                expertise that enable efficient and scalable global
                clinical supply management.
              </p>
            </motion.div>

            {/* Cards */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid md:grid-cols-2 gap-8 mt-16"
            >
              {differentiators.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <motion.div 
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className="h-16 w-16 rounded-2xl bg-orange-50 flex items-center justify-center"
                    >
                      <Icon className="h-8 w-8 text-orange-500" />
                    </motion.div>

                    <h3 className="mt-6 text-2xl font-bold text-gray-900 leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ================= USP SECTION ================= */}
        <section className="py-24 px-6 md:px-14 bg-white">
          <div className="max-w-7xl mx-auto">
            
            {/* Heading */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-orange-500 uppercase tracking-[0.2em] text-sm font-semibold">
                Our USP
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
                What Sets Seveillar Apart
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                Strong infrastructure, advanced systems, global
                capabilities, and operational excellence supporting
                worldwide clinical studies.
              </p>
            </motion.div>

            {/* USP Grid */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid md:grid-cols-2 gap-6 mt-16"
            >
              {uspData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="group bg-gray-50 rounded-[2rem] border border-gray-100 p-7 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    
                    {/* Number */}
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="h-14 w-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center text-lg font-bold shrink-0"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.div>

                    {/* Text */}
                    <div>
                      <p className="text-lg text-gray-800 leading-relaxed font-medium">
                        {item}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="mt-20 bg-orange-500 rounded-[2.5rem] p-10 md:p-14 text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Seveillar — Your Trusted Partner For Global
                Clinical Trial Supply Solutions
              </h3>

              <p className="mt-6 text-orange-100 text-lg max-w-3xl mx-auto leading-relaxed">
                Supporting pharmaceutical companies, CROs, and global
                clinical studies with reliable, compliant, and scalable
                clinical supply management services.
              </p>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 inline-flex items-center gap-3 bg-white text-orange-500 px-8 h-14 rounded-2xl font-semibold hover:bg-orange-50 transition-all"
              >
                Get In Touch
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}