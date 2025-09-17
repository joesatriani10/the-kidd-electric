export type TourDate = {
    id: string;
    city: string;
    venue: string;
    startDate: string;   // ISO (example. "2025-11-03T20:00:00-08:00")
    ticketsUrl?: string;
    soldOut?: boolean;
};