"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Work", href: "#case-studies" },
    { label: "About", href: "#why-us" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
    }, [mobileOpen]);

    return (
        <>
            <motion.header
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                        ? "glass shadow-[0_1px_0_rgba(255,255,255,0.04)]"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-6xl mx-auto px-6">
                    <nav className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <a href="#" className="flex items-center gap-2.5 group relative z-10">
                            <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
                                <span className="text-white font-bold text-xs">S</span>
                            </div>
                            <span className="text-text-primary font-semibold text-[15px] tracking-tight">
                                Sentienta
                            </span>
                        </a>

                        {/* Centered Nav Links */}
                        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="px-4 py-2 text-text-secondary text-[13px] font-medium hover:text-text-primary transition-colors duration-200 rounded-lg hover:bg-white/[0.03]"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="hidden md:flex items-center relative z-10">
                            <a
                                href="#contact"
                                className="px-4 py-2 rounded-lg bg-white text-[#050508] text-[13px] font-semibold hover:bg-white/90 transition-all duration-200"
                            >
                                Get in Touch
                            </a>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden flex flex-col gap-[5px] p-2 relative z-10"
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                                className="block w-5 h-[1.5px] bg-text-primary origin-center transition-colors"
                            />
                            <motion.span
                                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="block w-5 h-[1.5px] bg-text-primary"
                            />
                            <motion.span
                                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                className="block w-5 h-[1.5px] bg-text-primary origin-center transition-colors"
                            />
                        </button>
                    </nav>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={() => setMobileOpen(false)} />
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-20 left-4 right-4 rounded-2xl border border-border-card p-6"
                            style={{ background: "var(--bg-secondary)" }}
                        >
                            <div className="flex flex-col gap-1">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="px-4 py-3 text-text-primary text-base font-medium hover:bg-white/[0.03] rounded-xl transition-colors"
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                                <div className="mt-3 pt-3 border-t border-border-subtle">
                                    <a
                                        href="#contact"
                                        onClick={() => setMobileOpen(false)}
                                        className="block px-4 py-3 rounded-xl bg-accent text-white text-center font-semibold"
                                    >
                                        Get in Touch
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
