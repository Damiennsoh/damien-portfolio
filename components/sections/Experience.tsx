"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { experiences } from "@/lib/data";
import { useState } from "react";

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section id="experience" className="py-20 lg:py-32 relative">
      <div className="section-divider mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Experience
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            From healthcare delivery to AI-native software engineering
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-5 top-6 w-6 h-6 rounded-full bg-surface border-2 border-accent items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>

                {/* Card */}
                <div
                  className={`glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                    expandedId === exp.id ? "border-accent/30" : ""
                  }`}
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted mb-3">
                    <MapPin size={14} />
                    {exp.type}
                  </div>

                  <p className="text-muted mb-4">{exp.summary}</p>

                  {/* Expandable content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedId === exp.id ? "auto" : 0,
                      opacity: expandedId === exp.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-surface-light">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements</h4>
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted">
                            <ChevronRight size={16} className="text-accent flex-shrink-0 mt-0.5" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <span key={tech} className="skill-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Expand indicator */}
                  <div className="mt-3 text-center">
                    <span className="text-xs text-accent font-medium">
                      {expandedId === exp.id ? "Show Less" : "Show More"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
