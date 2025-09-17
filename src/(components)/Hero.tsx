import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
            {/* BG */}
            <Image
                src="/TKE_2025_LOGO.avif"
                alt="The Kidd Electric live"
                fill
                priority
                className="object-cover opacity-80"
            />
            {/* Vignette + tint */}
            <div className="absolute inset-0 bg-black/60" />
            {/* Scanlines */}
            <div className="scanlines" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4">
                    <Image src="/TKE_2025_LOGO.avif" alt="The Kidd Electric" width={340} height={120} className="w-[60vw] max-w-[360px] h-auto" />
                    <p className="mt-4 text-neutral-300 max-w-xl">
                        Indie/Rock • spooky & atmospheric vibes
                    </p>
                    <div className="mt-6 flex gap-3">
                        <Link href="/music" className="px-5 py-2 bg-white text-black rounded hover:opacity-90">Listen</Link>
                        <Link href="/tour" className="px-5 py-2 border border-white/80 rounded hover:bg-white/10">Tour</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}