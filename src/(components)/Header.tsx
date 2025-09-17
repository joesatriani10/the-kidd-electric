"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "@/(components)/MobileMenu";

export default function Header() {
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 8) document.documentElement.classList.add("scrolled");
            else document.documentElement.classList.remove("scrolled");
        };
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="sticky top-0 z-40 border-b border-neutral-800 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50">
            <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" aria-label="Home" className="flex items-center gap-2">
                    <Image src="/TKE_2025_LOGO.avif" alt="The Kidd Electric" width={140} height={44} className="h-8 w-auto" priority />
                </Link>

                {/* desktop links */}
                <ul className="hidden md:flex gap-4 text-sm">
                    <li><Link href="/music" className="hover:opacity-80">Music</Link></li>
                    <li><Link href="/tour" className="hover:opacity-80">Tour</Link></li>
                    <li><Link href="/contact" className="hover:opacity-80">Contact</Link></li>
                    <li><Link href="/about" className="hover:opacity-80">About</Link></li>
                    <li><Link href="/gallery" className="hover:opacity-80">Gallery</Link></li>
                    <li><Link href="/lyrics" className="hover:opacity-80">Lyrics</Link></li>
                    <li>
                        <a href="https://thekiddelectric.threadless.com/designs/the-kidd-electric-skull-t"
                           target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                            Shop
                        </a>
                    </li>
                </ul>

                {/* mobile burger */}
                <MobileMenu />
            </nav>
        </header>
    );
}