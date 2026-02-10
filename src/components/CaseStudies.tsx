"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const caseStudies = [
    {
        category: "AI Automation",
        title: "A financial services firm was drowning in manual document processing.",
        challenge: "Their team spent 40+ hours a week manually reviewing, categorizing, and extracting data from financial documents. Errors were common. Scaling was impossible.",
        solution: "We built a custom NLP + computer vision pipeline that reads, understands, and processes documents autonomously — with human-level accuracy.",
        results: [
            { value: "85%", label: "Less processing time" },
            { value: "99.2%", label: "Accuracy rate" },
            { value: "340%", label: "ROI in year one" },
        ],
        quote: "Sentienta didn't just automate a process — they fundamentally changed how we operate.",
        quoteAuthor: "Head of Operations",
    },
    {
        category: "Enterprise Platform",
        title: "A logistics company needed to see everything — in real time.",
        challenge: "10 million events per day across hundreds of endpoints. Their existing dashboard was slow, fragile, and couldn't keep up.",
        solution: "We designed a scalable real-time analytics platform with sub-second query times, live visualizations, and role-based access for 5,000+ users.",
        results: [
            { value: "10M+", label: "Events/day" },
            { value: "<1s", label: "Load time" },
        ],
        quote: "We went from guessing to knowing. That dashboard changed our business.",
        quoteAuthor: "VP of Engineering",
    },
    {
        category: "Startup MVP",
        title: "A founder had 28 days to prove an idea could work.",
        challenge: "Early-stage startup, limited runway, tough investors. They needed a working AI product — not a prototype, not a mockup — a real product.",
        solution: "We shipped a production-ready AI SaaS platform in 28 days. Authentication, payments, AI inference, dashboard — everything.",
        results: [
            { value: "28 days", label: "To production" },
            { value: "3x", label: "MRR in 90 days" },
        ],
        quote: "They built our entire product in less time than it took to hire our first engineer.",
        quoteAuthor: "CEO & Founder",
    },
];

export default function CaseStudies() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="case-studies" className="section-padding" ref={ref}>
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
                        Our Work
                    </span>
                    <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-[-0.03em] text-text-primary mb-5 leading-tight">
                        Real problems.
                        <br />
                        <span className="text-gradient-accent">Real outcomes.</span>
                    </h2>
                    <p className="text-text-secondary text-[17px] leading-relaxed max-w-xl">
                        We don&apos;t share vanity metrics. Here are stories from clients
                        whose businesses genuinely changed.
                    </p>
                </motion.div>

                {/* Case Study Cards — editorial storytelling format */}
                <div className="space-y-12">
                    {caseStudies.map((cs, i) => (
                        <motion.div
                            key={cs.title}
                            initial={{ opacity: 0, y: 24 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.12, duration: 0.5 }}
                            className="glass-card p-8 md:p-10 group"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                                {/* Story (3 cols) */}
                                <div className="lg:col-span-3">
                                    <span className="text-accent text-xs font-semibold tracking-[0.15em] uppercase mb-4 block">
                                        {cs.category}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-6 leading-snug">
                                        {cs.title}
                                    </h3>

                                    <div className="space-y-4 text-text-secondary text-[15px] leading-[1.7]">
                                        <div>
                                            <span className="text-text-tertiary text-xs font-semibold tracking-widest uppercase block mb-2">
                                                The Challenge
                                            </span>
                                            <p>{cs.challenge}</p>
                                        </div>
                                        <div>
                                            <span className="text-text-tertiary text-xs font-semibold tracking-widest uppercase block mb-2">
                                                What We Built
                                            </span>
                                            <p>{cs.solution}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Results + Quote (2 cols) */}
                                <div className="lg:col-span-2 flex flex-col justify-between">
                                    {/* Results */}
                                    <div className="flex flex-wrap gap-6 mb-8">
                                        {cs.results.map((r) => (
                                            <div key={r.label}>
                                                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">{r.value}</div>
                                                <div className="text-text-tertiary text-xs">{r.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Client quote */}
                                    <div className="border-l-2 border-accent/30 pl-5">
                                        <p className="text-text-secondary text-sm italic leading-relaxed mb-2">
                                            &ldquo;{cs.quote}&rdquo;
                                        </p>
                                        <span className="text-text-tertiary text-xs">
                                            — {cs.quoteAuthor}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
