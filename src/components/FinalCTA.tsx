"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FinalCTA() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
            {/* Background glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-50"
                style={{
                    background:
                        "radial-gradient(circle, rgba(79,139,255,0.1) 0%, transparent 70%)",
                }}
                aria-hidden="true"
            />

            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
                        Let&apos;s Build Together
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-8 leading-tight">
                        Ready to Transform<br />
                        <span className="text-gradient">Your Next Idea?</span>
                    </h2>
                    <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                        Whether you&apos;re building an AI-powered product, modernizing legacy
                        systems, or exploring what&apos;s possible — we&apos;re here to engineer
                        the solution.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.a
                            href="mailto:hello@sentienta.com"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-10 py-4 rounded-xl bg-accent text-white font-semibold text-base hover:bg-accent-light transition-colors duration-300 glow-accent-strong"
                        >
                            Book a Consultation
                        </motion.a>
                        <motion.a
                            href="mailto:hello@sentienta.com"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-10 py-4 rounded-xl border border-border-card text-text-primary font-semibold text-base hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
                        >
                            Send Project Inquiry
                        </motion.a>
                    </div>

                    <p className="text-text-tertiary text-sm mt-8">
                        No commitment. No pressure.&nbsp; Just a conversation about what&apos;s possible.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
