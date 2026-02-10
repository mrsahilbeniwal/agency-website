"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "We Listen First",
        description:
            "Before we write a single line of code, we sit down and understand your business — your goals, your users, your constraints. We ask hard questions early so we don't build the wrong thing.",
    },
    {
        number: "02",
        title: "We Design the Right Thing",
        description:
            "Architecture before aesthetics. We map out systems, data flows, and user journeys. You'll see exactly what we're building before we build it — no surprises.",
    },
    {
        number: "03",
        title: "We Build with Obsessive Quality",
        description:
            "Clean code. Automated testing. Modern infrastructure. We don't cut corners because we know you'll be living with this software. It needs to be maintainable, not just functional.",
    },
    {
        number: "04",
        title: "We Stay After Launch",
        description:
            "Shipping is not the finish line. We monitor, optimize, and iterate with you. Our best client relationships are years long — because we're invested in your success, not just the project.",
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
                        Our Approach
                    </span>
                    <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-[-0.03em] text-text-primary mb-5 leading-tight">
                        How we actually work.
                    </h2>
                    <p className="text-text-secondary text-[17px] leading-relaxed max-w-xl">
                        No 47-slide decks. No unnecessary meetings. Here&apos;s what working
                        with us really looks like.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Connecting line */}
                    <div className="hidden lg:block absolute left-[27px] top-0 bottom-0 w-px">
                        <motion.div
                            initial={{ height: 0 }}
                            animate={inView ? { height: "100%" } : {}}
                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                            className="w-full bg-gradient-to-b from-accent/40 via-accent/15 to-transparent"
                        />
                    </div>

                    <div className="space-y-14 lg:space-y-16">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, x: -16 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                                className="flex gap-8 items-start group"
                            >
                                {/* Number */}
                                <div className="relative shrink-0">
                                    <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-400">
                                        <span className="text-accent font-bold text-sm">{step.number}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="pt-2 pb-2">
                                    <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-text-secondary text-[15px] leading-[1.8] max-w-lg">
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
