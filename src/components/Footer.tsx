import Link from "next/link";

const footerLinks = {
    services: [
        { label: "Web Applications", href: "#services" },
        { label: "AI Solutions", href: "#services" },
        { label: "Startup Acceleration", href: "#services" },
        { label: "CTO-as-a-Service", href: "#services" },
    ],
    company: [
        { label: "About", href: "#why-us" },
        { label: "Process", href: "#process" },
        { label: "Case Studies", href: "#case-studies" },
        { label: "Contact", href: "#contact" },
    ],
    connect: [
        { label: "LinkedIn", href: "#" },
        { label: "Twitter", href: "#" },
        { label: "GitHub", href: "#" },
        { label: "hello@sentienta.com", href: "mailto:hello@sentienta.com" },
    ],
};

export default function Footer() {
    return (
        <footer className="border-t border-border-subtle">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-5">
                            <div className="relative w-8 h-8">
                                <div className="absolute inset-0 rounded-lg bg-accent/20" />
                                <div className="absolute inset-[3px] rounded-md bg-accent/80 flex items-center justify-center">
                                    <span className="text-white font-bold text-xs">S</span>
                                </div>
                            </div>
                            <span className="text-text-primary font-semibold text-lg tracking-tight">
                                Sentienta<span className="text-accent">.</span>
                            </span>
                        </Link>
                        <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                            Engineering intelligence into every solution.
                            AI-first software consultancy.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-text-primary font-semibold text-sm mb-5 tracking-wide">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-text-primary font-semibold text-sm mb-5 tracking-wide">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-text-primary font-semibold text-sm mb-5 tracking-wide">
                            Connect
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.connect.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-text-tertiary text-sm">
                        © {new Date().getFullYear()} Sentienta Labs. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="text-text-tertiary text-sm hover:text-text-secondary transition-colors"
                        >
                            Privacy
                        </a>
                        <a
                            href="#"
                            className="text-text-tertiary text-sm hover:text-text-secondary transition-colors"
                        >
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
