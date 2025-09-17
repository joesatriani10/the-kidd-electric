import Image from "next/image";
import Link from "next/link";
import { upcomingShows, formatShow } from "@/data/shows";
import Section from "@/(components)/Section";

export const metadata = {
    title: "The Kidd Electric — Official Site",
    description: "Spooky-tinged indie/rock from California.",
};


const cards = [
    {
        title: "Music",
        desc: "Spotify, Bandcamp & YouTube.",
        href: "/music",
        img: "/about/live3.avif",
        priority: true, // LCP priority (first visible card)
    },
    {
        title: "Tour",
        desc: "Catch us on stage.",
        href: "/tour",
        img: "/about/live1.avif",
    },
    {
        title: "About",
        desc: "Band story & bio",
        href: "/about",
        img: "/about/live5.avif",
    },
];

function Card({
                  title,
                  desc,
                  href,
                  img,
                  priority = false,
              }: {
    title: string;
    desc: string;
    href: string;
    img: string;
    priority?: boolean;
}) {
    return (
        <Link
            href={href}
            className="group relative overflow-hidden rounded-lg border border-white/10 bg-neutral-950"
        >
            <div className="relative aspect-[16/10]">
                <Image
                    src={img}
                    alt={title}
                    fill
                    unoptimized // Serve from /public directly, no optimizer (avoids 400 error)
                    sizes="100vw" // Always full viewport width (responsive on mobile)
                    priority={priority} // Only true for the first card (fixes LCP warning)
                    className={`object-cover opacity-80 transition-transform duration-500 group-hover:scale-105 ${
                        title === "About" ? "object-top" : "object-center"
                    }`}
                    loading={priority ? undefined : "lazy"} // Lazy load except the priority one
                />
                {/* Overlay gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-neutral-400 text-sm">{desc}</p>
            </div>
        </Link>
    );
}

export default function HomePage() {

    return (
        <main className="relative">
            {/* HERO */}
            <section className="relative min-h-[86vh] flex items-center justify-center overflow-hidden">
                {/* bg sutil */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
                <div className="grain" />

                <div className="relative z-10 mx-auto max-w-5xl px-6 text-center space-y-7">
                    <Image
                        src="/TKE_2025_LOGO.avif"
                        alt="The Kidd Electric"
                        width={820}
                        height={400}
                        className="mx-auto w-[72%] max-w-[640px] h-auto select-none"
                        priority
                    />

                    <p className="text-neutral-300/90 text-lg md:text-xl">
                        Spooky-tinged indie/rock. Gritty, moody… and unapologetically electric.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link
                            href="/music"
                            className="px-5 py-2.5 rounded bg-white text-black hover:opacity-90"
                        >
                            Listen
                        </Link>
                        <Link
                            href="/tour"
                            className="px-5 py-2.5 rounded border border-white/30 hover:bg-white/10"
                        >
                            Tour Dates
                        </Link>
                        <a
                            href="https://thekiddelectric.threadless.com/designs/the-kidd-electric-skull-t"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 rounded border border-white/30 hover:bg-white/10"
                        >
                            Shop ↗
                        </a>
                    </div>
                </div>

                {/* glow inferior */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-[radial-gradient(ellipse_at_bottom,rgba(255,0,128,0.12),transparent_70%)]" />
            </section>

            {/* MARQUEE */}
            <section className="border-y border-white/10 bg-black/50">
                <div className="marquee">
                    {/* fades laterales opcionales */}
                    <div className="marquee__fade marquee__fade--left" />
                    <div className="marquee__fade marquee__fade--right" />

                    <div className="marquee__inner">
                        {(() => {
                            const items = upcomingShows(8);
                            // Duplicamos el contenido dentro del mismo track
                            const loop = [...items, ...items];
                            return loop.map((s, i) => (
                                <span key={`${s.date}-${i}`} className="marquee__item">
            ▲ {formatShow(s)}
          </span>
                            ));
                        })()}
                    </div>
                </div>
            </section>

            {/* 3 CARDS */}
            <Section title="Explore">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, i) => (
                        <Card key={card.title} {...card} priority={i === 0} />
                    ))}
                </div>
            </Section>
        </main>
    );
}