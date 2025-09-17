"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    // cerrar con ESC
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <>
            <button
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="md:hidden inline-flex items-center gap-2 rounded px-3 py-2 border border-white/20 hover:bg-white/10"
            >
                {/* puedes cambiar por un ícono si quieres */}
                Menu
            </button>

            {open && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                    onClick={() => setOpen(false)}
                >
                    <nav
                        className="absolute inset-x-0 top-0 mt-14 mx-4 rounded-xl border border-white/15 bg-neutral-950 p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul className="flex flex-col">
                            <li>
                                <Link href="/music" className="block px-3 py-3 rounded hover:bg-white/10" onClick={() => setOpen(false)}>
                                    Music
                                </Link>
                            </li>
                            <li>
                                <Link href="/tour" className="block px-3 py-3 rounded hover:bg-white/10" onClick={() => setOpen(false)}>
                                    Tour
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="block px-3 py-3 rounded hover:bg-white/10" onClick={() => setOpen(false)}>
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/lyrics" className="block px-3 py-3 rounded hover:bg-white/10" onClick={() => setOpen(false)}>
                                    Lyrics
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="block px-3 py-3 rounded hover:bg-white/10" onClick={() => setOpen(false)}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="block px-3 py-3 rounded hover:bg-white/10" onClick={() => setOpen(false)}>
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://thekiddelectric.threadless.com/designs/the-kidd-electric-skull-t"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-3 py-3 rounded hover:bg-white/10"
                                    onClick={() => setOpen(false)}
                                    aria-label="Shop (opens in a new tab)"
                                >
                                    Shop ↗
                                </a>
                            </li>
                        </ul>

                        <button
                            onClick={() => setOpen(false)}
                            className="mt-2 w-full rounded border border-white/20 px-3 py-2 hover:bg-white/10"
                        >
                            Close
                        </button>
                    </nav>
                </div>
            )}
        </>
    );
}