"use client";

import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Resume() {
  return (
    <section id="resume" className="py-20 lg:py-32 relative">
      <div className="section-divider mb-20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Resume
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Download My <span className="gradient-text">Resume</span>
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Get a comprehensive overview of my experience, skills, and achievements
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center">
              <FileText className="text-accent" size={40} />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-2">
              Damien Nsoh Ayine
            </h3>
            <p className="text-muted mb-8">
              Software Engineer | DevOps Engineer | Cybersecurity Analyst
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={personalInfo.resumePath}
                download
                className="btn-primary justify-center"
              >
                <Download size={18} />
                Download PDF
              </a>
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary justify-center"
              >
                <Eye size={18} />
                View Online
              </a>
            </div>

            <p className="mt-6 text-sm text-muted">
              Last updated: July 2025 • PDF format • 3 pages
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
