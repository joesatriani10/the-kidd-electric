// src/data/shows.ts
export type Show = {
    date: string;   // "2025-10-05" (YYYY-MM-DD, en TZ America/Los_Angeles)
    city: string;
    venue?: string;
    url?: string;
};

// ⚠️ Mantén siempre YYYY-MM-DD (no mes/día sueltos)
export const SHOWS: Show[] = [
    { date: "2025-10-05", city: "San Jose, CA", venue: "The Ritz" },
    { date: "2025-10-12", city: "Los Angeles, CA", venue: "The Echo" },
    { date: "2025-11-02", city: "Oakland, CA", venue: "Starline Social Club" },
];

// --- Helpers deterministas (no usan locale implícito) ---

const TZ = "America/Los_Angeles";

// YYYY-MM-DD de “hoy” en TZ fija (sin Date.now() en el render del componente)
export function todayStringInTZ(tz: string = TZ): string {
    const now = new Date();
    // usamos Intl para extraer partes en TZ fija
    const y = new Intl.DateTimeFormat("en-CA", { year: "numeric", timeZone: tz }).format(now);
    const m = new Intl.DateTimeFormat("en-CA", { month: "2-digit", timeZone: tz }).format(now);
    const d = new Intl.DateTimeFormat("en-CA", { day: "2-digit", timeZone: tz }).format(now);
    return `${y}-${m}-${d}`; // YYYY-MM-DD
}

// Filtra “upcoming” comparando strings YYYY-MM-DD (seguro y estable)
export function upcomingShows(limit?: number): Show[] {
    const today = todayStringInTZ(TZ);
    const ups = SHOWS.filter(s => s.date >= today);
    return typeof limit === "number" ? ups.slice(0, limit) : ups;
}

// Formato de fecha estable (locale/tz fijos)
export function formatShow(s: Show): string {
    // Forzamos UTC para evitar shift, luego pintamos en TZ fija:
    const d = new Date(`${s.date}T00:00:00Z`);
    const dateStr = new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "2-digit",
        timeZone: TZ,
    }).format(d);
    return [dateStr, s.city, s.venue].filter(Boolean).join(" — ");
}