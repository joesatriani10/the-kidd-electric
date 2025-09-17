import Link from "next/link";
import { upcomingShows, formatShow } from "@/data/shows";

export default function TourList() {
    const shows = upcomingShows(); // todos los futuros

    if (shows.length === 0) {
        return <p className="text-neutral-400">More dates soon. Follow @thekiddelectric.</p>;
    }

    return (
        <ul className="space-y-3">
            {shows.map((s) => (
                <li key={s.date} className="flex items-center justify-between gap-3 rounded border border-white/10 p-3">
                    <span>{formatShow(s)}</span>
                    {s.url ? (
                        <Link href={s.url} className="px-3 py-1 text-sm rounded border border-white/20 hover:bg-white/10" target="_blank">
                            Tickets ↗
                        </Link>
                    ) : (
                        <span className="text-xs text-neutral-500">Info soon</span>
                    )}
                </li>
            ))}
        </ul>
    );
}