"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const items = [
    "120+ Projects Delivered",
    "40+ AI Models in Production",
    "97% Client Retention",
    "2x Faster Than Industry Average",
    "Enterprise-Grade Security",
    "24/7 Support Available",
];

export default function TrustStrip() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="relative py-12 overflow-hidden">
            {/* Top line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-card to-transparent" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
            >
                {/* Label */}
                <p className="text-center text-text-tertiary text-xs font-medium tracking-[0.2em] uppercase mb-8">
                    Trusted by forward-thinking teams
                </p>

                {/* Marquee */}
                <div className="relative">
                    {/* Left fade */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                        style={{ background: "linear-gradient(to right, var(--bg-primary), transparent)" }} />
                    {/* Right fade */}
                    <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                        style={{ background: "linear-gradient(to left, var(--bg-primary), transparent)" }} />

                    <div className="flex animate-marquee">
                        {/* Duplicate items for seamless loop */}
                        {[...items, ...items].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-8 px-8 shrink-0"
                            >
                                <span className="text-text-secondary/70 text-sm font-medium whitespace-nowrap">
                                    {item}
                                </span>
                                <span className="text-accent/30 text-lg">◆</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Bottom line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-card to-transparent" />
        </section>
    );
}
