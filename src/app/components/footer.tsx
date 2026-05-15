// app/components/footer.tsx

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Facility & Infrastructure", href: "/facility" },
    { name: "Why Us", href: "/why-us" },
    { name: "Contact Us", href: "/contact" },
  ];

  const services = [
  {
    name: "Clinical Supplies Manufacturing",
    href: "/services#manufacturing",
  },
  {
    name: "Comparator & Ancillary Sourcing",
    href: "/services#sourcing",
  },
  {
    name: "Packaging & Labeling",
    href: "/services#packaging",
  },
  {
    name: "Storage & Logistics",
    href: "/services#logistics",
  },
  {
    name: "Project Management",
    href: "/services#consultancy",
  },
  {
    name: "Global Distribution",
    href: "/services#distribution",
  },
];

  return (
    <footer className="relative overflow-hidden bg-[#0A0809] text-white">
      {/* Enhanced Background Glows */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-[#D68B5C]/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#B56A43]/5 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#D68B5C]/[0.02] blur-3xl" />

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-[1550px] mx-auto px-6 md:px-10 lg:px-14 xl:px-16 pt-20 pb-12">
          {/* Top section with logo and columns aligned at top */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 xl:gap-x-16 gap-y-12">
            
            {/* Logo & About - spans 4 columns on large screens */}
            <div className="lg:col-span-4 flex flex-col pr-4 xl:pr-8">
              <Link
  href="/"
  className="inline-block w-fit ml-2 md:ml-4 lg:ml-8"
>
  <Image
    src="/logo.png"
    alt="Seveillar Logo"
    width={620}
    height={240}
    className="h-32 md:h-40 w-auto object-contain brightness-110"
    priority
  />
</Link>

              <p className="text-[#C8C8C8] leading-relaxed text-base max-w-[380px] mt-5">
                Delivering trusted clinical supply chain solutions with
                precision, regulatory excellence, and operational reliability
                for global pharmaceutical and biotechnology studies.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-8">
                {[
                  { icon: <FaFacebookF size={16} />, href: "#" },
                  { icon: <FaXTwitter size={16} />, href: "#" },
                  { icon: <FaLinkedinIn size={16} />, href: "#" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="group h-10 w-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#B0B0B0] transition-all duration-300 hover:bg-[#D68B5C] hover:text-white hover:border-[#D68B5C] hover:-translate-y-0.5"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
<div className="lg:col-span-2 mt-6 md:mt-8 lg:mt-10">
  <h3 className="text-lg font-semibold mb-6 text-white tracking-wide relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[2px] after:bg-[#D68B5C]">
    Quick Links
  </h3>

  <ul className="flex flex-col gap-4">
    {quickLinks.map((link) => (
      <li key={link.name}>
        <Link
          href={link.href}
          className="group flex items-start gap-2.5 text-[#B8B8B8] text-[15px] leading-[1.4] transition-all duration-300 hover:text-[#D68B5C]"
        >
          <ChevronRight className="w-4 h-4 flex-shrink-0 mt-[2px] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#D68B5C]" />

          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            {link.name}
          </span>
        </Link>
      </li>
    ))}
  </ul>
</div>

{/* Our Services */}
<div className="lg:col-span-3 mt-6 md:mt-8 lg:mt-10">
  <h3 className="text-lg font-semibold mb-6 text-white tracking-wide relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[2px] after:bg-[#D68B5C]">
    Our Services
  </h3>

  <ul className="flex flex-col gap-4">
    {services.map((service) => (
      <li key={service.name}>
        <Link
          href={service.href}
          className="group flex items-start gap-2.5 text-[#B8B8B8] text-[15px] leading-[1.4] transition-all duration-300 hover:text-[#D68B5C]"
        >
          <ChevronRight className="w-4 h-4 flex-shrink-0 mt-[2px] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#D68B5C]" />

          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            {service.name}
          </span>
        </Link>
      </li>
    ))}
  </ul>
</div>

            {/* Contact - spans 3 columns */}
            <div className="lg:col-span-3 mt-6 md:mt-8 lg:mt-10">
              <h3 className="text-lg font-semibold mb-6 text-white tracking-wide relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[2px] after:bg-[#D68B5C]">
                Contact Us
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5 group">
                  <div className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#D68B5C]/20 group-hover:border-[#D68B5C]/40">
                    <MapPin className="w-4 h-4 text-[#D68B5C]" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[13px] text-[#888888] uppercase tracking-wider mb-0.5">Visit Us</p>
                    <p className="text-[15px] text-[#C8C8C8] leading-relaxed">
                      5 Star MIDC, Ranjangaon,
                      <br />
                      Pune, Maharashtra, India - 412220
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 group">
                  <div className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#D68B5C]/20 group-hover:border-[#D68B5C]/40">
                    <Mail className="w-4 h-4 text-[#D68B5C]" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[13px] text-[#888888] uppercase tracking-wider mb-0.5">Email Us</p>
                    <a
                      href="mailto:enquiry@seveillar.com"
                      className="text-[15px] text-[#C8C8C8] hover:text-[#D68B5C] transition-colors duration-300"
                    >
                      enquiry@seveillar.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 group">
                  <div className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#D68B5C]/20 group-hover:border-[#D68B5C]/40">
                    <Phone className="w-4 h-4 text-[#D68B5C]" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[13px] text-[#888888] uppercase tracking-wider mb-0.5">Call Us</p>
                    <a
                      href="tel:+912012345678"
                      className="text-[15px] text-[#C8C8C8] hover:text-[#D68B5C] transition-colors duration-300"
                    >
                      +91 20 1234 5678
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with improved spacing */}
        <div className="border-t border-white/[0.06] mt-8">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-[#8A8A8A] text-center md:text-left">
              © {new Date().getFullYear()} Seveillar Clinical Supplies Services Pvt. Ltd. All rights reserved.
            </p>

            <div className="flex items-center gap-8 text-[14px]">
              <Link
                href="/privacy-policy"
                className="text-[#8A8A8A] hover:text-[#D68B5C] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span className="text-[#8A8A8A]/30">|</span>
              <Link
                href="/terms"
                className="text-[#8A8A8A] hover:text-[#D68B5C] transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}