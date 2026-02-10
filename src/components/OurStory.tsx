"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function OurStory() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const values = [
        {
            title: "Honesty over optics",
            description: "We'll tell you if your idea needs rethinking. We'll flag scope creep before it becomes a problem. You'll always know where your project stands.",
        },
        {
            title: "Depth over breadth",
            description: "We don't try to be everything to everyone. We focus on AI and software because doing fewer things means doing them at an elite level.",
        },
        {
            title: "Ownership over hand-offs",
            description: "We don't throw code over a wall. Every project has senior engineers who stay from start to finish. Your team will know our names.",
        },
        {
            title: "Outcomes over outputs",
            description: "We don't measure success by features shipped. We measure it by whether your users are happier, your team is faster, and your numbers are up.",
        },
    ];

    return (
        <section id="story" className="section-padding" ref={ref}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left — The Story */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
                            Our Story
                        </span>
                        <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-[-0.03em] text-text-primary mb-8 leading-tight">
                            We started Sentienta because we
                            <br />
                            <span className="text-gradient-accent">believed software deserved better.</span>
                        </h2>

                        <div className="space-y-5 text-text-secondary text-[16px] leading-[1.8]">
                            <p>
                                We&apos;re engineers and designers who spent years inside product teams
                                — building things for startups, scale-ups, and enterprises. We saw
                                the same frustrations everywhere: bloated timelines, miscommunication,
                                software that launched and then nobody wanted to maintain.
                            </p>
                            <p>
                                So we built a consultancy around the idea that technical work
                                should feel like a partnership — not a transaction. A place where
                                senior people do the actual work. Where AI isn&apos;t a buzzword
                                but a genuine capability. Where quality is non-negotiable.
                            </p>
                            <p>
                                Today, Sentienta Labs is a focused team working with clients
                                across 14 countries. We&apos;re small by design — because we&apos;d
                                rather do exceptional work for fewer clients than average work
                                for many.
                            </p>
                            <p className="text-text-primary font-medium">
                                That&apos;s not a limitation. It&apos;s a choice.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right — Values */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="lg:pt-16"
                    >
                        <h3 className="text-text-primary text-sm font-semibold mb-8 tracking-wide">
                            What We Believe
                        </h3>
                        <div className="space-y-0">
                            {values.map((v, i) => (
                                <motion.div
                                    key={v.title}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                                    className="py-6 border-b border-border-subtle group last:border-0"
                                >
                                    <div className="flex items-start gap-5">
                                        <span className="text-text-tertiary text-xs font-mono mt-0.5 shrink-0 w-6">
                                            0{i + 1}
                                        </span>
                                        <div>
                                            <h4 className="text-[15px] font-semibold text-text-primary mb-1.5 group-hover:text-accent transition-colors duration-300">
                                                {v.title}
                                            </h4>
                                            <p className="text-text-secondary text-sm leading-relaxed">
                                                {v.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
