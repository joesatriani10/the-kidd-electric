"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

// Static imports provide width/height + blurDataURL
import g1 from "../../public/gallery/gallery1.avif";
import g2 from "../../public/gallery/gallery2.avif";
import g3 from "../../public/gallery/gallery3.avif";
import g4 from "../../public/gallery/gallery4.avif";
import g5 from "../../public/gallery/gallery5.avif";
import g6 from "../../public/gallery/gallery6.avif";
import g7 from "../../public/gallery/gallery7.avif";
import g8 from "../../public/gallery/gallery8.avif";
import g9 from "../../public/gallery/gallery9.avif";

type Pic = { src: StaticImageData; alt: string };

const pics: Pic[] = [
    { src: g1, alt: "Gallery 1" },
    { src: g2, alt: "Gallery 2" },
    { src: g3, alt: "Gallery 3" },
    { src: g4, alt: "Gallery 4" },
    { src: g5, alt: "Gallery 5" },
    { src: g6, alt: "Gallery 6" },
    { src: g7, alt: "Gallery 7" },
    { src: g8, alt: "Gallery 8" },
    { src: g9, alt: "Gallery 9" },
];

export default function GalleryGrid() {
    const [open, setOpen] = useState<number | null>(null);

    // ESC / arrows
    useEffect(() => {
        if (open === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(null);
            if (e.key === "ArrowRight") setOpen((i) => ((i ?? 0) + 1) % pics.length);
            if (e.key === "ArrowLeft") setOpen((i) => ((i ?? 0) - 1 + pics.length) % pics.length);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <>
            {/* GRID: intrinsic layout (better perf than fill), blur placeholder, lower quality */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {pics.map((p, i) => (
                    <button
                        key={(p.src as StaticImageData).src}
                        onClick={() => setOpen(i)}
                        className="group relative overflow-hidden rounded border border-neutral-800"
                    >
                        <Image
                            src={p.src}
                            alt={p.alt}
                            // Use intrinsic; Next knows width/height from static import
                            placeholder="blur"
                            quality={60} // reduce bytes for thumbs
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                            loading="lazy"
                            decoding="async"
                        />
                    </button>
                ))}
            </div>

            {/* LIGHTBOX */}
            {open !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-4"
                    onClick={() => setOpen(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Close */}
                    <button
                        onClick={(e) => { e.stopPropagation(); setOpen(null); }}
                        className="mb-4 flex items-center gap-2 rounded border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
                    >
                        ✕ Close
                    </button>

                    {/* Main image */}
                    <div className="relative max-w-6xl w-full">
                        <div className="relative w-full aspect-[16/10]">
                            <Image
                                src={pics[open].src}
                                alt={pics[open].alt}
                                fill
                                // Full viewport target, let Next pick best width
                                sizes="100vw"
                                // Higher quality for the lightbox view
                                quality={85}
                                placeholder="blur"
                                // Give browser a hint this image matters now
                                fetchPriority="high"
                                className="object-contain"
                            />
                        </div>

                        {/* Prev / Next */}
                        <div className="mt-3 flex justify-between text-sm">
                            <button
                                onClick={(e) => { e.stopPropagation(); setOpen((i) => ((i ?? 0) - 1 + pics.length) % pics.length); }}
                                className="rounded border border-white/20 px-3 py-1 hover:bg-white/10"
                            >
                                ‹ Prev
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); setOpen((i) => ((i ?? 0) + 1) % pics.length); }}
                                className="rounded border border-white/20 px-3 py-1 hover:bg-white/10"
                            >
                                Next ›
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}