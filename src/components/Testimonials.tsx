"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
    {
        quote: "We interviewed seven agencies. Sentienta was the only one that pushed back on our brief and asked the right questions. That told us everything.",
        author: "Sarah Chen",
        role: "CTO, Meridian Health",
        context: "AI-powered patient intake system",
    },
    {
        quote: "They feel like an extension of our team — not a vendor. When something breaks at midnight, they're already fixing it before we notice.",
        author: "James Okoro",
        role: "Head of Product, TradeFlow",
        context: "Real-time trading analytics platform",
    },
    {
        quote: "I've worked with agencies that overpromise and underdeliver. Sentienta does the opposite. They set honest expectations and then quietly exceed them.",
        author: "Priya Sharma",
        role: "Founder, NovaBridge AI",
        context: "AI SaaS MVP, launched in 30 days",
    },
];

export default function Testimonials() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section-padding" ref={ref}>
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
                        Client Voices
                    </span>
                    <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-[-0.03em] text-text-primary leading-tight">
                        Don&apos;t take our word for it.
                    </h2>
                </motion.div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.author}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="glass-card p-7 flex flex-col"
                        >
                            {/* Quote */}
                            <div className="flex-1 mb-6">
                                <svg width="24" height="18" viewBox="0 0 24 18" className="text-accent/30 mb-4">
                                    <path
                                        d="M0 18V10.3C0 4 4.2 0.7 10.2 0L11 1.7C7.8 2.5 5.8 4.7 5.5 7.5H10V18H0ZM13 18V10.3C13 4 17.2 0.7 23.2 0L24 1.7C20.8 2.5 18.8 4.7 18.5 7.5H23V18H13Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <p className="text-text-secondary text-[15px] leading-[1.75] italic">
                                    {t.quote}
                                </p>
                            </div>

                            {/* Author */}
                            <div className="pt-5 border-t border-border-subtle">
                                <div className="text-text-primary text-sm font-semibold">{t.author}</div>
                                <div className="text-text-tertiary text-xs mt-0.5">{t.role}</div>
                                <div className="text-accent/60 text-xs mt-2">{t.context}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
