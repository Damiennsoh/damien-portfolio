"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold gradient-text">DA.</span>
            <p className="mt-2 text-sm text-muted">
              &copy; {new Date().getFullYear()} Damien Nsoh Ayine. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm text-muted hover:text-accent transition-colors">
              About
            </a>
            <a href="#experience" className="text-sm text-muted hover:text-accent transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-sm text-muted hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm text-muted hover:text-accent transition-colors">
              Contact
            </a>
          </div>

          {/* Social & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted hover:text-accent transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted hover:text-accent transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 text-muted hover:text-accent transition-colors"
            >
              <Mail size={18} />
            </a>

            <div className="w-px h-6 bg-surface-light mx-2" />

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-surface border border-surface-light text-muted hover:text-accent hover:border-accent/30 transition-all"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>

        {/* Made with love */}
        <div className="mt-8 pt-8 border-t border-surface-light text-center">
          <p className="text-sm text-muted flex items-center justify-center gap-1">
            Built with <Heart size={14} className="text-red-400 fill-red-400" /> using Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
