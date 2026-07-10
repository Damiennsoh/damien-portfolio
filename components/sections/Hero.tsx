"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern noise-overlay"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/2 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4"
            >
              <span className="text-foreground">Damien</span>
              <br />
              <span className="gradient-text">Nsoh Ayine</span>
            </motion.h1>

            {/* Titles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6"
            >
              {personalInfo.titles.map((title, index) => (
                <span key={index} className="flex items-center gap-2">
                  <span className="text-lg sm:text-xl text-muted-light font-medium">
                    {title}
                  </span>
                  {index < personalInfo.titles.length - 1 && (
                    <span className="text-accent hidden sm:inline">|</span>
                  )}
                </span>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-muted max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
            >
              <button
                onClick={() => handleScrollTo("#projects")}
                className="btn-primary"
              >
                View My Work
                <ExternalLink size={18} />
              </button>
              <a
                href={personalInfo.resumePath}
                download
                className="btn-secondary"
              >
                Download Resume
                <Download size={18} />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-surface-light text-muted-light hover:text-accent hover:border-accent/30 transition-all"
              >
                <Github size={18} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-surface-light text-muted-light hover:text-accent hover:border-accent/30 transition-all"
              >
                <Linkedin size={18} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </motion.div>
          </div>

          {/* Right - Profile Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-accent/5 rounded-full blur-2xl animate-pulse-glow" />

              {/* Profile circle */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-accent/20 flex items-center justify-center bg-surface animate-float overflow-hidden">
                {/* Inner ring */}
                <div className="absolute inset-4 rounded-full border border-accent/10 pointer-events-none" />
                <div className="absolute inset-8 rounded-full border border-accent/5 pointer-events-none" />

                {/* Profile Image */}
                <Image
                  src="/profile.jpg"
                  alt="Damien Nsoh Ayine"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />

                {/* Orbiting dots */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/50" />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4"
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 rounded-full bg-accent-light shadow-lg shadow-accent/30" />
                </motion.div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -left-4 top-1/4 glass-card px-3 py-2 rounded-lg"
              >
                <p className="text-xs text-accent font-semibold">AI-Native</p>
                <p className="text-xs text-muted">Developer</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -right-4 bottom-1/4 glass-card px-3 py-2 rounded-lg"
              >
                <p className="text-xs text-accent font-semibold">4+ Years</p>
                <p className="text-xs text-muted">Experience</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => handleScrollTo("#about")}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors"
          >
            <span className="text-xs font-medium">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
