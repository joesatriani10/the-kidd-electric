
export type Show = {
    date: string;           // ISO "2025-10-05"
    city: string;           // "San Jose, CA"
    venue?: string;         // "The Ritz"
    url?: string;           // ticket link
};

// ⚠️ Sort by ascending date
export const SHOWS: Show[] = [
    { date: "2025-10-05", city: "San Jose, CA", venue: "The Ritz", url: "https://tickets.example/1" },
    { date: "2025-10-12", city: "Los Angeles, CA", venue: "The Echo" },
    { date: "2025-11-02", city: "Oakland, CA", venue: "Starline Social Club" },
    // add more here
];

// Helpers
export function upcomingShows(limit?: number, tz: string = "America/Los_Angeles"): Show[] {
    const today = new Date();
    const ups = SHOWS.filter(s => new Date(s.date + "T00:00:00") >= today);
    return typeof limit === "number" ? ups.slice(0, limit) : ups;
}

export function formatShow(s: Show, locale = "en-US", tz = "America/Los_Angeles") {
    const d = new Date(s.date + "T00:00:00");
    const dateStr = d.toLocaleDateString(locale, { month: "short", day: "2-digit", timeZone: tz });
    const parts = [dateStr, s.city, s.venue].filter(Boolean).join(" — ");
    return parts;
}