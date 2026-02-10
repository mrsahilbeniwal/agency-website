"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const services = [
    {
        category: "Software & Web",
        intro: "Your product is the experience your users have. We build it to be remarkable.",
        items: [
            { title: "Custom Websites", desc: "Not templates. Bespoke digital experiences designed around your brand and conversion goals." },
            { title: "End-to-End Web Applications", desc: "Full-stack platforms that handle complexity gracefully — from architecture to deployment." },
            { title: "APIs & System Integrations", desc: "We connect your tools, platforms, and data so your team stops switching tabs." },
            { title: "CRM & Internal Tools", desc: "Custom dashboards and workflows that fit how your team actually works." },
            { title: "Data & Analytics Dashboards", desc: "Real-time visibility into the metrics that matter. Power BI, custom builds, or both." },
        ],
    },
    {
        category: "AI & Intelligence",
        intro: "AI should solve a real problem — not just impress a pitch deck. We build AI that works.",
        items: [
            { title: "AI Chatbots & Assistants", desc: "Conversational AI trained on your data, built to handle real customer conversations." },
            { title: "AI Agents & Workflow Automation", desc: "Autonomous systems that handle tasks your team shouldn't have to — reliably, at scale." },
            { title: "NLP & Language Solutions", desc: "From document processing to sentiment analysis — we turn unstructured text into decisions." },
            { title: "Computer Vision", desc: "Visual intelligence for quality control, analysis, and automation. Production-grade, not prototype." },
        ],
    },
    {
        category: "Startup Acceleration",
        intro: "We've helped founders go from napkin sketch to paying customers. Speed matters — but so does doing it right.",
        items: [
            { title: "AI SaaS Product Development", desc: "We build your AI product as if it were our own — with the same stakes and conviction." },
            { title: "MVP in 30 Days", desc: "Validated, functional, and investor-ready. Not a throwaway prototype. A real first version." },
            { title: "CTO-as-a-Service", desc: "Strategic technical leadership for founders who need an experienced hand without a full-time hire." },
            { title: "No-code & Low-code Solutions", desc: "Not everything needs custom code. We'll tell you when it doesn't — and build it fast." },
        ],
    },
];

function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const handleMouseMove = useCallback((e: MouseEvent) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
        card.style.setProperty("--mouse-y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
    }, []);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;
        card.addEventListener("mousemove", handleMouseMove);
        return () => card.removeEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove]);

    return <div ref={cardRef} className={`glass-card ${className}`}>{children}</div>;
}

export default function Services() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="services" className="section-padding" ref={ref}>
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
                        How We Help
                    </span>
                    <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-[-0.03em] text-text-primary mb-5 leading-tight">
                        We don&apos;t do everything.
                        <br />
                        <span className="text-gradient-accent">We do these things exceptionally well.</span>
                    </h2>
                </motion.div>

                {/* Service Groups */}
                <div className="space-y-20">
                    {services.map((group, gi) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 24 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: gi * 0.12, duration: 0.5 }}
                        >
                            {/* Category Header with intro story */}
                            <div className="mb-8">
                                <div className="flex items-center gap-4 mb-3">
                                    <span className="text-text-primary text-sm font-semibold">{group.category}</span>
                                    <div className="flex-1 h-px bg-border-subtle" />
                                </div>
                                <p className="text-text-secondary text-[15px] leading-relaxed max-w-xl italic">
                                    &ldquo;{group.intro}&rdquo;
                                </p>
                            </div>

                            {/* Cards */}
                            <div className={`grid gap-4 ${gi === 0 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"
                                }`}>
                                {group.items.map((item) => (
                                    <SpotlightCard key={item.title} className="p-7 group cursor-pointer">
                                        <div className="relative z-10">
                                            <h3 className="text-[15px] font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="text-text-secondary text-sm leading-relaxed mb-5">
                                                {item.desc}
                                            </p>
                                            <span className="text-accent/50 text-xs font-medium group-hover:text-accent transition-colors duration-300 flex items-center gap-1.5">
                                                Let&apos;s discuss this
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                    <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                    </SpotlightCard>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
