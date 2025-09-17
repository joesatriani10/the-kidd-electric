import Section from "@/(components)/Section";
import ContactForm from "@/(components)/ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
    // Optional: mailto with prefilled subject/body (kept here for quick use)
    const mailtoHref = `mailto:booking@thekiddelectric.com
?subject=${encodeURIComponent("Booking / Press — The Kidd Electric")}
&body=${encodeURIComponent(
        `Hi TKE,

I’d like to get in touch regarding:

— Name:
— Company/Outlet:
— Date(s):
— Message:

Thanks!`
    )}`.replace(/\n/g, "");

    return (
        <Section title="Booking & Contact">
            <div className="grid md:grid-cols-5 gap-8">
                {/* Sidebar: info & socials */}
                <aside className="md:col-span-2 space-y-4">
                    <p className="text-neutral-300">
                        For bookings, press, or general inquiries, send us a message:
                    </p>

                    <ul className="text-sm text-neutral-400 space-y-2">
                        <li>
                            Email:{" "}
                            <a
                                className="underline hover:opacity-80"
                                href="mailto:booking@thekiddelectric.com"
                            >
                                booking@thekiddelectric.com
                            </a>
                        </li>
                        <li>
                            Bandcamp:{" "}
                            <a
                                className="underline hover:opacity-80"
                                href="https://thekiddelectric.bandcamp.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Bandcamp (opens in a new tab)"
                            >
                                thekiddelectric.bandcamp.com ↗
                            </a>
                        </li>
                        <li>
                            YouTube:{" "}
                            <a
                                className="underline hover:opacity-80"
                                href="https://youtube.com/@thekiddelectric"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube (opens in a new tab)"
                            >
                                @thekiddelectric ↗
                            </a>
                        </li>
                        <li>
                            Facebook:{" "}
                            <a
                                className="underline hover:opacity-80"
                                href="https://www.facebook.com/thekiddelectric"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook (opens in a new tab)"
                            >
                                thekiddelectric ↗
                            </a>
                        </li>
                        <li>
                            Instagram:{" "}
                            <a
                                className="underline hover:opacity-80"
                                href="https://instagram.com/thekiddelectric"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram (opens in a new tab)"
                            >
                                @thekiddelectric ↗
                            </a>
                        </li>
                        <li>
                            X (Twitter):{" "}
                            <a
                                className="underline hover:opacity-80"
                                href="https://x.com/thekiddelectric"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X (Twitter) (opens in a new tab)"
                            >
                                @thekiddelectric ↗
                            </a>
                        </li>
                    </ul>

                    {/* Optional: quick mailto CTA (kept simple, no JS) */}
                    <div className="pt-2">
                        <a
                            href={mailtoHref}
                            className="inline-block text-xs px-3 py-2 rounded border border-white/20 hover:bg-white/10"
                        >
                            Email us (prefilled)
                        </a>
                    </div>

                    <p className="text-xs text-neutral-500">
                        Tip: we usually reply within a couple of days.
                    </p>
                </aside>

                {/* Form area */}
                <div className="md:col-span-3">
                    <ContactForm />
                </div>
            </div>
        </Section>
    );
}