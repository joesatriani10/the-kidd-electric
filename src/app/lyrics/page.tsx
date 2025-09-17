import Section from "@/(components)/Section";
import Link from "next/link";
import { LYRICS } from "@/data/lyrics";

export const metadata = { title: "Lyrics" };

export default function LyricsIndex() {
    return (
        <Section title="Lyrics">
            <ul className="space-y-2">
                {LYRICS.map((s) => (
                    <li key={s.slug} className="flex items-center gap-2">
                        <span className="text-neutral-500">♪</span>
                        <Link href={`/lyrics/${s.slug}`} className="underline hover:opacity-80">
                            {s.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </Section>
    );
}