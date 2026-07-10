"use client";

import { motion } from "framer-motion";
import { Heart, TrendingUp, Globe } from "lucide-react";
import { aboutStory, stats } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 relative">
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
            About Me
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            From Public Health to <span className="gradient-text">Technology</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            A unique journey spanning healthcare delivery and software engineering
          </p>
        </motion.div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Heart className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">The Beginning</h3>
                  <p className="text-muted leading-relaxed">{aboutStory.intro}</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <TrendingUp className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">The Transition</h3>
                  <p className="text-muted leading-relaxed">{aboutStory.transition}</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Globe className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">My Mission</h3>
                  <p className="text-muted leading-relaxed">{aboutStory.mission}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`stat-card ${index === 0 || index === 3 ? "lg:translate-y-4" : ""}`}
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  className="block text-3xl sm:text-4xl font-bold gradient-text mb-2"
                >
                  {stat.value}
                </motion.span>
                <span className="text-sm text-muted">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
