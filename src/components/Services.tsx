"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const services = [
    {
        category: "Software & Web",
        items: [
            { title: "Custom Websites", desc: "Pixel-perfect digital experiences that convert." },
            { title: "End-to-End Web Apps", desc: "Full-stack platforms built for scale." },
            { title: "APIs & Integrations", desc: "Seamless connectivity between systems." },
            { title: "CRM Systems", desc: "Intelligent relationship management." },
            { title: "Real-time Dashboards", desc: "Live data, instant decisions." },
            { title: "Power BI Dashboards", desc: "Business intelligence that reveals insights." },
        ],
    },
    {
        category: "AI & Intelligence",
        items: [
            { title: "AI Chatbots", desc: "Conversational AI that understands context." },
            { title: "AI Agents & Automation", desc: "Autonomous workflows at scale." },
            { title: "NLP Solutions", desc: "Unstructured data into intelligence." },
            { title: "Computer Vision", desc: "Systems that see and understand." },
        ],
    },
    {
        category: "Startup Acceleration",
        items: [
            { title: "AI SaaS Development", desc: "Production-ready AI products." },
            { title: "MVP in 30 Days", desc: "Validated products, aggressive timelines." },
            { title: "CTO-as-a-Service", desc: "Strategic tech leadership on demand." },
            { title: "No-code / Low-code", desc: "Rapid prototyping and automation." },
        ],
    },
];

function SpotlightCard({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mouse-x", `${x}%`);
        card.style.setProperty("--mouse-y", `${y}%`);
    }, []);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;
        card.addEventListener("mousemove", handleMouseMove);
        return () => card.removeEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove]);

    return (
        <div ref={cardRef} className={`glass-card ${className}`}>
            {children}
        </div>
    );
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
                        What We Build
                    </span>
                    <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-bold tracking-[-0.03em] text-text-primary mb-5 leading-tight">
                        Solutions Engineered<br />
                        <span className="text-gradient-accent">for Impact</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-lg">
                        Every solution is crafted to deliver measurable business outcomes
                        — not just features.
                    </p>
                </motion.div>

                {/* Service Groups */}
                <div className="space-y-16">
                    {services.map((group, gi) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 24 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: gi * 0.15, duration: 0.5 }}
                        >
                            {/* Category Label */}
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-text-primary text-sm font-semibold">{group.category}</span>
                                <div className="flex-1 h-px bg-border-subtle" />
                            </div>

                            {/* Cards Grid */}
                            <div className={`grid gap-4 ${gi === 0
                                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                                    : gi === 1
                                        ? "grid-cols-1 sm:grid-cols-2"
                                        : "grid-cols-1 sm:grid-cols-2"
                                }`}>
                                {group.items.map((item, ii) => (
                                    <SpotlightCard
                                        key={item.title}
                                        className={`p-7 group cursor-pointer ${gi === 1 ? "lg:p-8" : ""
                                            }`}
                                    >
                                        <div className="relative z-10">
                                            <h3 className="text-[15px] font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="text-text-secondary text-sm leading-relaxed mb-5">
                                                {item.desc}
                                            </p>
                                            <span className="text-accent/60 text-xs font-medium group-hover:text-accent transition-colors duration-300 flex items-center gap-1.5">
                                                Discuss Project
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
