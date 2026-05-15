"use client";

import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollProgress from "../components/ScrollProgress";

// Animation variants with proper Framer Motion types
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
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

export default function ContactClient() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        
        {/* ================= HERO SECTION ================= */}
        {/* Banner (Hero) Background: #FFF5F0 (pale orange tint) per specification */}
        <section className="relative h-[40vh] md:h-[72vh] flex items-center justify-center overflow-hidden bg-[#FFF5F0]">
          
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

          {/* Overlay - using dark brown */}
          <div className="absolute inset-0 bg-[#28151B]/55" />

          {/* Content */}
          <motion.div 
            className="relative z-10 text-center px-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.p 
              className="text-[#E95A25] uppercase tracking-[0.3em] text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Contact Us
            </motion.p>

            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Get In Touch
            </h1>

            <p className="mt-5 text-gray-200 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              We are here to support your clinical supply and pharmaceutical
              requirements with reliable global solutions.
            </p>
          </motion.div>
        </section>

        {/* ================= MAP ================= */}
        <section className="w-full">
          <iframe
            src="https://www.google.com/maps?q=Seveillar%20Clinical%20Supplies%20Services%20Pvt%20Ltd%20Ranjangaon%20MIDC%20Pune&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            className="w-full border-0"
            title="Seveillar Office Location Map"
          />
        </section>

        {/* ================= CONTACT SECTION ================= */}
        {/* About/Overview Background: #FFFFFF per specification */}
        <section className="py-20 px-6 md:px-14 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            
            {/* ================= LEFT SIDE ================= */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-[#E95A25] font-semibold uppercase tracking-[0.2em] text-sm">
                Contact Information
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#28151B] leading-tight">
                Let&apos;s Start A Conversation
              </h2>

              <p className="mt-6 text-[#5A3A3E] leading-relaxed text-lg">
                Reach out to Seveillar Clinical Supplies Services Pvt Ltd for
                inquiries related to clinical trial supply management,
                pharmaceutical logistics, and global clinical support services.
              </p>

              {/* Contact Items */}
              <motion.div 
                className="mt-12 space-y-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Phone */}
                <motion.div variants={itemVariants} className="flex items-start gap-5">
                  <div className="h-14 w-14 rounded-2xl bg-[#FAD1C3]/30 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-[#E95A25]" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#28151B]">
                      Phone Number
                    </h3>

                    <a
                      href="tel:02138664021"
                      className="mt-2 inline-block text-[#5A3A3E] hover:text-[#E95A25] transition-colors"
                    >
                      02138 664021
                    </a>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div variants={itemVariants} className="flex items-start gap-5">
                  <div className="h-14 w-14 rounded-2xl bg-[#FAD1C3]/30 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-[#E95A25]" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#28151B]">
                      Email Address
                    </h3>

                    <a
                      href="mailto:enquiry@seveillar.com"
                      className="mt-2 inline-block text-[#5A3A3E] hover:text-[#E95A25] transition-colors"
                    >
                      enquiry@seveillar.com
                    </a>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div variants={itemVariants} className="flex items-start gap-5">
                  <div className="h-14 w-14 rounded-2xl bg-[#FAD1C3]/30 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-[#E95A25]" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#28151B]">
                      Office Address
                    </h3>

                    <p className="mt-2 text-[#5A3A3E] leading-relaxed">
                      Seveillar Clinical Supplies Services Pvt Ltd
                      <br />
                      Plot D-219, Ranjangaon MIDC,
                      <br />
                      Pune - 412220, India.
                    </p>

                    <a
                      href="https://www.seveillar.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-[#E95A25] hover:text-[#4C292F] font-medium transition-colors"
                    >
                      www.seveillar.com
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* ================= FORM ================= */}
            {/* Form background using warm cream tint */}
            <motion.div 
              className="bg-[#FAF7F2] rounded-[2rem] p-8 md:p-10 border border-[#FAD1C3]/40"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div>
                <p className="text-[#E95A25] uppercase tracking-[0.2em] text-sm font-semibold">
                  Send Message
                </p>

                <h3 className="mt-3 text-3xl font-bold text-[#28151B]">
                  Contact Form
                </h3>
              </div>

              <form className="mt-10 space-y-6" action="/api/contact" method="POST">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#4C292F]">
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full h-14 px-5 rounded-2xl border border-[#FAD1C3]/50 bg-white outline-none focus:border-[#E95A25] transition-all"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#4C292F]">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-14 px-5 rounded-2xl border border-[#FAD1C3]/50 bg-white outline-none focus:border-[#E95A25] transition-all"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-[#4C292F]">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full h-14 px-5 rounded-2xl border border-[#FAD1C3]/50 bg-white outline-none focus:border-[#E95A25] transition-all"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-[#4C292F]">
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Enter subject"
                    className="w-full h-14 px-5 rounded-2xl border border-[#FAD1C3]/50 bg-white outline-none focus:border-[#E95A25] transition-all"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#4C292F]">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Write your message..."
                    className="w-full px-5 py-4 rounded-2xl border border-[#FAD1C3]/50 bg-white outline-none resize-none focus:border-[#E95A25] transition-all"
                    required
                  />
                </div>

                {/* Button - with brand colors */}
                <button
                  type="submit"
                  className="w-full h-14 rounded-2xl bg-[#E95A25] hover:bg-[#4C292F] text-white font-semibold transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                >
                  Send Message
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <ScrollProgress />
      <Footer />
    </>
  );
}