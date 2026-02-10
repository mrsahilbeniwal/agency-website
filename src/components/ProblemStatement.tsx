"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ProblemStatement() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="section-padding">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="space-y-8"
                >
                    {/* Label */}
                    <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block">
                        The Problem We Saw
                    </span>

                    {/* Narrative paragraphs */}
                    <h2 className="text-[clamp(1.6rem,3.5vw,2.8rem)] font-bold tracking-[-0.03em] leading-[1.2] text-text-primary">
                        Too many businesses are stuck with software that was built to
                        check boxes — not to solve real problems.
                    </h2>

                    <div className="space-y-6 text-text-secondary text-[17px] leading-[1.8]">
                        <p>
                            We kept seeing the same pattern. A company hires a development agency.
                            They get a product that technically works — but it doesn&apos;t move
                            the needle. It doesn&apos;t adapt. It doesn&apos;t learn. It becomes
                            another line item to maintain.
                        </p>
                        <p>
                            Meanwhile, AI is reshaping entire industries. But most teams don&apos;t
                            have the in-house expertise to harness it — and most agencies
                            don&apos;t understand it deeply enough to apply it meaningfully.
                        </p>
                        <p className="text-text-primary font-medium">
                            That&apos;s the gap we exist to fill.
                        </p>
                    </div>

                    {/* Transition line */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="pt-8 flex items-center gap-4"
                    >
                        <div className="w-8 h-px bg-accent/40" />
                        <span className="text-accent text-sm font-medium">
                            So we built Sentienta Labs to do things differently.
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
