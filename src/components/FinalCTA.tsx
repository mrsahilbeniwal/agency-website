"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FinalCTA() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
            {/* Background orb */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full animate-orb opacity-20 blur-[120px]"
                    style={{
                        background: `conic-gradient(from 90deg, rgba(99,102,241,0.3), rgba(167,139,250,0.2), rgba(99,102,241,0.1), rgba(167,139,250,0.2), rgba(99,102,241,0.3))`,
                    }}
                />
            </div>

            <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-6 block">
                        Start Here
                    </span>

                    <h2 className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-bold tracking-[-0.03em] leading-[1.12] mb-6">
                        <span className="text-text-primary">Every great project starts</span>
                        <br />
                        <span className="text-gradient-accent">with a conversation.</span>
                    </h2>

                    <p className="text-text-secondary text-[17px] leading-[1.7] max-w-xl mx-auto mb-5">
                        Tell us about what you&apos;re building, what&apos;s working, and where
                        you&apos;re stuck. No pitch deck required. No commitment. Just an honest
                        conversation about whether we&apos;re the right fit.
                    </p>

                    <p className="text-text-tertiary text-sm mb-10">
                        We typically respond within 24 hours.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.a
                            href="mailto:hello@sentienta.com"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 rounded-xl bg-white text-[#050508] font-semibold text-[15px] hover:bg-white/90 transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center gap-2"
                        >
                            hello@sentienta.com
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.a>
                        <span className="text-text-tertiary text-sm">or</span>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 rounded-xl border border-white/10 text-text-secondary font-medium text-[15px] hover:text-text-primary hover:border-white/20 transition-all duration-300"
                        >
                            Book a 30-min call
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
