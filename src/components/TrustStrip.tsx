"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function TrustStrip() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true });

    const stats = [
        { value: "120+", label: "Projects shipped" },
        { value: "6", label: "Years building" },
        { value: "97%", label: "Clients who stay" },
        { value: "14", label: "Countries served" },
    ];

    return (
        <section ref={ref} className="relative py-16">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-card to-transparent" />

            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 12 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="text-2xl md:text-3xl font-bold text-text-primary mb-1">
                                {s.value}
                            </div>
                            <div className="text-text-tertiary text-sm">{s.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-card to-transparent" />
        </section>
    );
}
