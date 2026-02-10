"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const differentiators = [
    {
        title: "AI-First Engineering",
        description:
            "Every solution is designed with intelligence at its core — not bolted on as an afterthought.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 014 4c0 1.5-.8 2.8-2 3.4V11h3a3 3 0 013 3v1.6c1.2.6 2 1.9 2 3.4a4 4 0 11-6-3.4V14a1 1 0 00-1-1H9a1 1 0 00-1 1v1.6A4 4 0 112 20a4 4 0 012-3.4V14a3 3 0 013-3h3V9.4A4 4 0 018 6a4 4 0 014-4z" />
            </svg>
        ),
    },
    {
        title: "Speed with Precision",
        description:
            "Aggressive timelines without compromising quality. We deliver fast because our processes are refined.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),
    },
    {
        title: "Startup-Level Agility",
        description:
            "We operate lean and move quickly. No bureaucracy, no unnecessary meetings — just focused execution.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
                <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
        ),
    },
    {
        title: "Enterprise-Grade Scalability",
        description:
            "Architectures built for millions of users. We engineer for the load you'll have tomorrow, not just today.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 7V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v3" />
                <line x1="12" y1="12" x2="12" y2="16" />
                <line x1="2" y1="12" x2="22" y2="12" />
            </svg>
        ),
    },
    {
        title: "Partnership Philosophy",
        description:
            "We don't just build and leave. Long-term success requires ongoing collaboration, and we're invested in yours.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
    },
];

export default function WhySentienta() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="why-us" className="section-padding" ref={ref}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Left column - Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="lg:sticky lg:top-32"
                    >
                        <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
                            Why Sentienta Labs
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
                            Built Different.
                            <br />
                            <span className="text-gradient">By Design.</span>
                        </h2>
                        <p className="text-text-secondary text-lg leading-relaxed">
                            We combine the agility of a startup with the engineering rigor of
                            an enterprise team. The result? Solutions that are thoughtful,
                            scalable, and delivered with conviction.
                        </p>
                    </motion.div>

                    {/* Right column - Items */}
                    <div className="space-y-6">
                        {differentiators.map((d, i) => (
                            <motion.div
                                key={d.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="glass-card p-6 flex gap-5 items-start"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                                    {d.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                                        {d.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        {d.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
