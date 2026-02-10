"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Discover",
        description: "We immerse ourselves in your business context, understand goals, and map the technical landscape.",
    },
    {
        number: "02",
        title: "Design",
        description: "Architect elegant solutions — from system design to user experience — with precision.",
    },
    {
        number: "03",
        title: "Build",
        description: "Engineer production-grade software with modern stacks, rigorous testing, and clean code.",
    },
    {
        number: "04",
        title: "Scale",
        description: "Deploy, optimize, and evolve your solution for sustained growth and peak performance.",
    },
];

export default function Process() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="process" className="section-padding" ref={ref}>
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
                        Process
                    </span>
                    <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-bold tracking-[-0.03em] text-text-primary mb-5 leading-tight">
                        From Vision<br />
                        <span className="text-gradient-accent">to Velocity</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Connecting line */}
                    <div className="hidden lg:block absolute left-[27px] top-0 bottom-0 w-px">
                        <motion.div
                            initial={{ height: 0 }}
                            animate={inView ? { height: "100%" } : {}}
                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                            className="w-full bg-gradient-to-b from-accent/40 via-accent/20 to-transparent"
                        />
                    </div>

                    <div className="space-y-12 lg:space-y-16">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                                className="flex gap-8 items-start group"
                            >
                                {/* Number circle */}
                                <div className="relative shrink-0">
                                    <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-400">
                                        <span className="text-accent font-bold text-sm">{step.number}</span>
                                    </div>
                                    {/* Glow dot */}
                                    <div className="hidden lg:block absolute left-[27px] top-[27px] w-1 h-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent glow-strong -translate-x-[2px] -translate-y-[2px]" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="pt-3">
                                    <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm leading-relaxed max-w-md">
                                        {step.description}
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
