import Link from "next/link";

const footerLinks = {
    services: [
        { label: "Web Applications", href: "#services" },
        { label: "AI Solutions", href: "#services" },
        { label: "Startup MVPs", href: "#services" },
        { label: "CTO-as-a-Service", href: "#services" },
    ],
    company: [
        { label: "Process", href: "#process" },
        { label: "Work", href: "#case-studies" },
        { label: "About", href: "#why-us" },
        { label: "Contact", href: "#contact" },
    ],
    connect: [
        { label: "LinkedIn", href: "#" },
        { label: "Twitter / X", href: "#" },
        { label: "GitHub", href: "#" },
    ],
};

export default function Footer() {
    return (
        <footer className="relative">
            {/* Gradient top border */}
            <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-4">
                        <Link href="/" className="flex items-center gap-2.5 mb-5">
                            <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
                                <span className="text-white font-bold text-xs">S</span>
                            </div>
                            <span className="text-text-primary font-semibold text-[15px] tracking-tight">
                                Sentienta
                            </span>
                        </Link>
                        <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-xs">
                            Engineering intelligence into every solution.
                        </p>

                        {/* Status */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-card bg-white/[0.02]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                            </span>
                            <span className="text-text-secondary text-xs font-medium">
                                Available for projects
                            </span>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="md:col-span-2 md:col-start-7">
                        <h4 className="text-text-primary text-xs font-semibold tracking-[0.15em] uppercase mb-5">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-200">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="md:col-span-2">
                        <h4 className="text-text-primary text-xs font-semibold tracking-[0.15em] uppercase mb-5">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-200">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="md:col-span-2">
                        <h4 className="text-text-primary text-xs font-semibold tracking-[0.15em] uppercase mb-5">
                            Connect
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.connect.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-200">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a href="mailto:hello@sentienta.com" className="text-accent text-sm hover:text-accent-light transition-colors duration-200">
                                    hello@sentienta.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-text-tertiary text-xs">
                        © {new Date().getFullYear()} Sentienta Labs. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-text-tertiary text-xs hover:text-text-secondary transition-colors">
                            Privacy
                        </a>
                        <a href="#" className="text-text-tertiary text-xs hover:text-text-secondary transition-colors">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
