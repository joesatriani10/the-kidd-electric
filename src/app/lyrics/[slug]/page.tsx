import Section from "@/(components)/Section";
import { LYRICS } from "@/data/lyrics";
import Link from "next/link";

type Props = { params: { slug: string } };

export function generateStaticParams() {
    return LYRICS.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props) {
    const song = LYRICS.find((s) => s.slug === params.slug);
    return { title: song ? `Lyrics – ${song.title}` : "Lyrics" };
}

export default function SongLyrics({ params }: Props) {
    const song = LYRICS.find((s) => s.slug === params.slug);
    if (!song) return <Section title="Lyrics"><p>Not found.</p></Section>;

    return (
        <Section title={song.title}>
      <pre className="whitespace-pre-wrap leading-relaxed text-neutral-200 mb-6">
        {song.body}
      </pre>

            {/* botón volver */}
            <Link
                href="/lyrics"
                className="inline-block px-4 py-2 rounded border border-neutral-700 hover:bg-neutral-800 transition"
            >
                ← Back to all lyrics
            </Link>
        </Section>
    );
}