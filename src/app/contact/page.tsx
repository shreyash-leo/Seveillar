
"use client";

import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
    <main className="bg-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[40vh] md:h-[68vh] flex items-center justify-center overflow-hidden">
        
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1974&auto=format&fit=crop')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <p className="text-orange-400 uppercase tracking-[0.3em] text-sm mb-4">
            Contact Us
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Get In Touch
          </h1>

          <p className="mt-5 text-gray-200 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            We are here to support your clinical supply and pharmaceutical
            requirements with reliable global solutions.
          </p>
        </div>
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
        />
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-20 px-6 md:px-14 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          
          {/* ================= LEFT SIDE ================= */}
          <div>
            <p className="text-orange-500 font-semibold uppercase tracking-[0.2em] text-sm">
              Contact Information
            </p>

            <h2 className="mt-4 text-4xl font-bold text-gray-900 leading-tight">
              Let’s Start A Conversation
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              Reach out to Seveillar Clinical Supplies Services Pvt Ltd for
              inquiries related to clinical trial supply management,
              pharmaceutical logistics, and global clinical support services.
            </p>

            {/* Contact Items */}
            <div className="mt-12 space-y-8">
              
              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="h-14 w-14 rounded-2xl bg-orange-50 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-orange-500" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Phone Number
                  </h3>

                  <a
                    href="tel:02138664021"
                    className="mt-2 inline-block text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    02138 664021
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="h-14 w-14 rounded-2xl bg-orange-50 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-orange-500" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Email Address
                  </h3>

                  <a
                    href="mailto:enquiry@seveillar.com"
                    className="mt-2 inline-block text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    enquiry@seveillar.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="h-14 w-14 rounded-2xl bg-orange-50 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Office Address
                  </h3>

                  <p className="mt-2 text-gray-600 leading-relaxed">
                    Seveillar Clinical Supplies Services Pvt Ltd
                    <br />
                    Plot D-219, Ranjangaon MIDC,
                    <br />
                    Pune - 412220, India.
                  </p>

                  <a
                    href="https://www.seveillar.com"
                    target="_blank"
                    className="inline-block mt-3 text-orange-500 hover:text-orange-600 font-medium"
                  >
                    www.seveillar.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <div className="bg-gray-50 rounded-[2rem] p-8 md:p-10 border border-gray-100">
            
            <div>
              <p className="text-orange-500 uppercase tracking-[0.2em] text-sm font-semibold">
                Send Message
              </p>

              <h3 className="mt-3 text-3xl font-bold text-gray-900">
                Contact Form
              </h3>
            </div>

            <form className="mt-10 space-y-6">
              
              {/* Name */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-white outline-none focus:border-orange-500 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-white outline-none focus:border-orange-500 transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-white outline-none focus:border-orange-500 transition-all"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-white outline-none focus:border-orange-500 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white outline-none resize-none focus:border-orange-500 transition-all"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full h-14 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-3"
              >
                Send Message
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}