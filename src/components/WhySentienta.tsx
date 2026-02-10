"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const differentiators = [
    {
        title: "AI-First Engineering",
        description:
            "Every solution is designed with intelligence at its core — not bolted on as an afterthought.",
        highlight: "AI-First",
    },
    {
        title: "Speed with Precision",
        description:
            "Aggressive timelines without compromising quality. Our processes are refined for velocity.",
        highlight: "Speed",
    },
    {
        title: "Startup-Level Agility",
        description:
            "No bureaucracy, no unnecessary meetings — just focused execution and clear communication.",
        highlight: "Agility",
    },
    {
        title: "Enterprise-Grade Scale",
        description:
            "Architectures built for millions of users. We engineer for the load you'll have tomorrow.",
        highlight: "Scale",
    },
    {
        title: "Partnership Philosophy",
        description:
            "We don't just build and leave. Long-term success requires ongoing collaboration.",
        highlight: "Partnership",
    },
];

export default function WhySentienta() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="why-us" className="section-padding" ref={ref}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
                    {/* Left — Header (2 cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start"
                    >
                        <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
                            Why Us
                        </span>
                        <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-bold tracking-[-0.03em] text-text-primary mb-5 leading-tight">
                            Built Different.
                            <br />
                            <span className="text-gradient-accent">By Design.</span>
                        </h2>
                        <p className="text-text-secondary text-base leading-relaxed">
                            We combine startup agility with enterprise engineering rigor.
                            The result? Solutions that are thoughtful, scalable, and
                            delivered with conviction.
                        </p>
                    </motion.div>

                    {/* Right — Items (3 cols) */}
                    <div className="lg:col-span-3 space-y-0">
                        {differentiators.map((d, i) => (
                            <motion.div
                                key={d.title}
                                initial={{ opacity: 0, y: 16 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                className="py-8 border-b border-border-subtle group last:border-0"
                            >
                                <div className="flex items-start gap-6">
                                    <span className="text-text-tertiary text-xs font-mono mt-1 shrink-0 w-8">
                                        0{i + 1}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                                            {d.title}
                                        </h3>
                                        <p className="text-text-secondary text-sm leading-relaxed max-w-md">
                                            {d.description}
                                        </p>
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
