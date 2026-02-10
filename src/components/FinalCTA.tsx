"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FinalCTA() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
            {/* Animated background gradient */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full animate-orb opacity-30 blur-[120px]"
                    style={{
                        background: `conic-gradient(
              from 90deg,
              rgba(99, 102, 241, 0.3),
              rgba(167, 139, 250, 0.2),
              rgba(99, 102, 241, 0.1),
              rgba(167, 139, 250, 0.2),
              rgba(99, 102, 241, 0.3)
            )`,
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
                        Let&apos;s Build Together
                    </span>

                    <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.04em] leading-[1.1] mb-6">
                        <span className="text-text-primary">Ready to Build</span>
                        <br />
                        <span className="text-gradient-accent">Something Remarkable?</span>
                    </h2>

                    <p className="text-text-secondary text-lg leading-relaxed max-w-xl mx-auto mb-10">
                        Whether you&apos;re exploring AI, modernizing systems,
                        or launching a new product — we&apos;re here.
                    </p>

                    <motion.a
                        href="mailto:hello@sentienta.com"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#050508] font-semibold text-[15px] hover:bg-white/90 transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                    >
                        Start a Conversation
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.a>

                    <p className="text-text-tertiary text-sm mt-6">
                        No commitment required. Just a conversation.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
