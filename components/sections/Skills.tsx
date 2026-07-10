"use client";

import { motion } from "framer-motion";
import { Cloud, Brain, Layout, Server, Database, Shield, Sparkles, Wrench } from "lucide-react";
import { skills as skillsData } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Cloud: <Cloud size={24} />,
  Brain: <Brain size={24} />,
  Layout: <Layout size={24} />,
  Server: <Server size={24} />,
  Database: <Database size={24} />,
  Shield: <Shield size={24} />,
  Sparkles: <Sparkles size={24} />,
  Wrench: <Wrench size={24} />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32 relative">
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
            Expertise
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Full-stack capabilities spanning cloud, AI, security, and modern web development
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.category}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 group"
            >
              <div className="p-3 rounded-xl bg-accent/10 w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                <span className="text-accent">{iconMap[skill.icon]}</span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-3">
                {skill.category}
              </h3>

              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-sm text-muted flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Education & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid lg:grid-cols-2 gap-8"
        >
          {/* Education */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-sm">
                🎓
              </span>
              Education
            </h3>
            <div className="space-y-4">
              {[
                { degree: "Bachelor of Computer Applications (BCA)", school: "Maharishi Markandeshwar University, India", year: "2024", honors: "1st Class Honors with Distinction" },
                { degree: "AI/ML in Precision Medicine", school: "Stanford University", year: "2024", honors: "" },
                { degree: "Diploma in Disease Control", school: "College of Health and Wellbeing, Kintampo, Ghana", year: "2013", honors: "" },
              ].map((edu) => (
                <div key={edu.degree} className="border-l-2 border-accent/20 pl-4">
                  <h4 className="font-medium text-foreground">{edu.degree}</h4>
                  <p className="text-sm text-muted">{edu.school}</p>
                  <p className="text-sm text-accent">{edu.year} {edu.honors && `• ${edu.honors}`}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-sm">
                🏆
              </span>
              Certifications
            </h3>
            <div className="space-y-3">
              {[
                "AWS Certified Cloud Practitioner",
                "Google Cybersecurity Professional Certificate",
                "(ISC)² Certified in Cybersecurity (CC)",
                "Google IT Support Professional Certificate",
                "Software Engineering (Python Specialization) — ALX / Holberton Inc",
              ].map((cert) => (
                <div key={cert} className="flex items-center gap-3 p-3 rounded-lg bg-surface/50">
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-sm text-muted">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
