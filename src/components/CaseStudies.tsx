"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const caseStudies = [
    {
        category: "AI Automation",
        title: "Intelligent Document Processing Pipeline",
        description:
            "Reduced manual processing time by 85% for a financial services firm using custom NLP and computer vision models.",
        metrics: [
            { label: "Processing Time", value: "-85%" },
            { label: "Accuracy", value: "99.2%" },
            { label: "ROI", value: "340%" },
        ],
        gradient: "from-accent/20 via-accent-secondary/10 to-transparent",
    },
    {
        category: "Enterprise Platform",
        title: "Real-time Analytics Dashboard",
        description:
            "Scalable data visualization platform processing 10M+ events daily for a logistics company.",
        metrics: [
            { label: "Events/Day", value: "10M+" },
            { label: "Load Time", value: "<1s" },
        ],
        gradient: "from-accent-secondary/20 via-accent/10 to-transparent",
    },
    {
        category: "Startup MVP",
        title: "AI-Powered SaaS Platform",
        description:
            "Production-ready AI SaaS from concept to launch in 28 days for an early-stage startup.",
        metrics: [
            { label: "Time to Market", value: "28 days" },
            { label: "MRR Growth", value: "3x" },
        ],
        gradient: "from-accent/15 via-accent-secondary/15 to-transparent",
    },
];

export default function CaseStudies() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="case-studies" className="section-padding" ref={ref}>
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
                        Selected Work
                    </span>
                    <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-bold tracking-[-0.03em] text-text-primary mb-5 leading-tight">
                        Results That<br />
                        <span className="text-gradient-accent">Speak</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-lg">
                        Measurable outcomes from real engagements.
                    </p>
                </motion.div>

                {/* Featured + Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Featured (large) */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="glass-card p-8 lg:p-10 lg:row-span-2 flex flex-col group cursor-pointer"
                    >
                        {/* Gradient placeholder image area */}
                        <div className={`w-full h-48 lg:h-64 rounded-xl mb-8 bg-gradient-to-br ${caseStudies[0].gradient} border border-border-subtle flex items-center justify-center`}>
                            <div className="w-16 h-16 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <span className="text-accent text-xs font-semibold tracking-[0.15em] uppercase mb-4">
                            {caseStudies[0].category}
                        </span>
                        <h3 className="text-2xl font-bold text-text-primary mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
                            {caseStudies[0].title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-1">
                            {caseStudies[0].description}
                        </p>

                        {/* Metrics */}
                        <div className="flex gap-6">
                            {caseStudies[0].metrics.map((m) => (
                                <div key={m.label}>
                                    <div className="text-2xl font-bold text-accent mb-1">{m.value}</div>
                                    <div className="text-text-tertiary text-xs">{m.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Smaller cards */}
                    {caseStudies.slice(1).map((cs, i) => (
                        <motion.div
                            key={cs.title}
                            initial={{ opacity: 0, y: 24 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                            className="glass-card p-7 flex flex-col group cursor-pointer"
                        >
                            <span className="text-accent text-xs font-semibold tracking-[0.15em] uppercase mb-4">
                                {cs.category}
 