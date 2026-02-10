"use client";

import { motion } from "framer-motion";

/* ── Gradient Orb (Stripe-inspired) ── */
function GradientOrb() {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[700px] h-[700px] md:w-[900px] md:h-[900px] pointer-events-none">
            <div
                className="absolute inset-0 rounded-full animate-orb opacity-50 blur-[100px]"
                style={{
                    background: `conic-gradient(from 0deg, rgba(99,102,241,0.4), rgba(167,139,250,0.3), rgba(99,102,241,0.1), rgba(167,139,250,0.25), rgba(99,102,241,0.4))`,
                }}
            />
            <div
                className="absolute inset-[15%] rounded-full animate-orb opacity-35 blur-[80px]"
                style={{
                    background: `conic-gradient(from 180deg, rgba(129,140,248,0.5), rgba(196,181,253,0.3), rgba(99,102,241,0.2), rgba(129,140,248,0.5))`,
                    animationDuration: "15s",
                    animationDirection: "reverse",
                }}
            />
        </div>
    );
}

function DotGrid() {
    return (
        <div
            className="absolute inset-0 dot-grid opacity-30 pointer-events-none"
            style={{
                maskImage: "radial-gradient(ellipse 50% 60% at 50% 40%, black, transparent)",
                WebkitMaskImage: "radial-gradient(ellipse 50% 60% at 50% 40%, black, transparent)",
            }}
            aria-hidden="true"
        />
    );
}

export default function Hero() {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            <GradientOrb />
            <DotGrid />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border-card bg-white/[0.02] mb-10"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span className="text-text-secondary text-[13px] font-medium">
                        Currently accepting new projects
                    </span>
                </motion.div>

                {/* Headline — storytelling voice */}
                <motion.h1
                    initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[clamp(2.2rem,6.5vw,4.8rem)] font-extrabold tracking-[-0.04em] leading-[1.08] mb-8"
                >
                    <span className="text-text-primary">Most agencies build software.</span>
                    <br />
                    <span className="text-gradient-accent">We engineer intelligence.</span>
                </motion.h1>

                {/* Subheadline — authentic, conversational */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.7 }}
                    className="max-w-2xl mx-auto text-text-secondary text-[17px] md:text-[19px] leading-[1.7] mb-12"
                >
                    We&apos;re a small, focused team of engineers and designers who believe
                    that great software isn&apos;t about more features — it&apos;s about the
                    right solution, built with precision, powered by AI where it actually matters.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75, duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-7 py-3.5 rounded-xl bg-white text-[#050508] font-semibold text-[15px] hover:bg-white/90 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                        Let&apos;s Talk About Your Project →
                    </motion.a>
                    <motion.a
                        href="#story"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-7 py-3.5 rounded-xl border border-white/10 text-text-secondary font-medium text-[15px] hover:text-text-primary hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
                    >
                        Our Story
                    </motion.a>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div
                className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
                style={{ background: "linear-gradient(to top, var(--bg-primary), transparent)" }}
            />
        </section>
    );
}
