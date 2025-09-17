import { FaBandcamp, FaYoutube, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
    const year = 2025;
    return (
        <footer className="border-t border-white/10 bg-black/60 mt-16">
            <div className="container mx-auto px-6 py-10 flex flex-col items-center space-y-6">
                {/* Social icons */}
                <div className="flex gap-6 text-neutral-400">
                    <a
                        href="https://thekiddelectric.bandcamp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Bandcamp"
                        className="hover:text-white transition-colors"
                    >
                        <FaBandcamp size={22} />
                    </a>
                    <a
                        href="https://youtube.com/@thekiddelectric"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="hover:text-white transition-colors"
                    >
                        <FaYoutube size={22} />
                    </a>
                    <a
                        href="https://www.facebook.com/thekiddelectric"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="hover:text-white transition-colors"
                    >
                        <FaFacebook size={22} />
                    </a>
                    <a
                        href="https://instagram.com/thekiddelectric"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:text-white transition-colors"
                    >
                        <FaInstagram size={22} />
                    </a>
                    <a
                        href="https://x.com/thekiddelectric"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X (Twitter)"
                        className="hover:text-white transition-colors"
                    >
                        <FaTwitter size={22} />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-xs text-neutral-500 text-center">
                    © <span suppressHydrationWarning>{year}</span> The Kidd Electric. All rights reserved.
                </p>
            </div>
        </footer>
    );
}