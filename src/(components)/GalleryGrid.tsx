"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Pic = { src: string; alt: string; w?: number; h?: number };
const pics: Pic[] = [
    { src: "/gallery/gallery1.jpg", alt: "Gallery 1" },
    { src: "/gallery/gallery2.jpg", alt: "Gallery 2" },
    { src: "/gallery/gallery3.jpg", alt: "Gallery 3" },
    { src: "/gallery/gallery4.jpg", alt: "Gallery 4" },
    { src: "/gallery/gallery5.jpg", alt: "Gallery 5" },
    { src: "/gallery/gallery6.jpg", alt: "Gallery 5" },
    { src: "/gallery/gallery7.jpg", alt: "Gallery 5" },
    { src: "/gallery/gallery8.jpg", alt: "Gallery 5" },
    { src: "/gallery/gallery9.jpg", alt: "Gallery 5" },

];

export default function GalleryGrid() {
    const [open, setOpen] = useState<number | null>(null);

    // close with  ESC
    useEffect(() => {
        if (open === null) return;

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(null);
            if (e.key === "ArrowRight") setOpen((i) => (i! + 1) % pics.length);
            if (e.key === "ArrowLeft") setOpen((i) => (i! - 1 + pics.length) % pics.length);
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [open]);

    return (
        <>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {pics.map((p, i) => (
                    <button
                        key={p.src}
                        onClick={() => setOpen(i)}
                        className="group relative aspect-[4/3] overflow-hidden rounded border border-neutral-800"
                    >
                        <Image
                            src={p.src}
                            alt={p.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                            sizes="(max-width: 1024px) 50vw, 33vw"
                            loading="lazy"
                        />
                    </button>
                ))}
            </div>

            {/* Lightbox */}
            {open !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-4"
                    onClick={() => setOpen(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Botón Close arriba */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpen(null);
                        }}
                        className="mb-4 flex items-center gap-2 rounded border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
                    >
                        ✕ Close
                    </button>

                    {/* Imagen principal */}
                    <div className="relative max-w-6xl w-full">
                        <div className="relative w-full aspect-[16/10]">
                            <Image
                                src={pics[open].src}
                                alt={pics[open].alt}
                                fill
                                className="object-contain"
                                sizes="100vw"
                                priority
                            />
                        </div>

                        {/* Nav prev/next */}
                        <div className="mt-3 flex justify-between text-sm">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setOpen((i) => (i! - 1 + pics.length) % pics.length);
                                }}
                                className="rounded border border-white/20 px-3 py-1 hover:bg-white/10"
                            >
                                ‹ Prev
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setOpen((i) => (i! + 1) % pics.length);
                                }}
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