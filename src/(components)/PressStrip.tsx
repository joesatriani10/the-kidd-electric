// src/components/PressStrip.tsx
import React from "react";

const VENUES = [
    "The Whiskey A Go-Go",
    "Warped Tour",
    "Chain Reaction",
    "The Glass House",
    "House of Blues Anaheim",
    "The Gibson Amphitheater",
    "The Orange County Fair",
    "The Viper Room",
    "AMC Theater Glendora",
    "UCR",
    "Robertos' Club",
    "The Wire",
    "Los Globos",
    "Old Towne Pub",
    "Der Wolfskopf",
    "Palm Springs Pride",
    "Juice Fest",
    "VidCon",
    "The Luna Lounge",
    "The Press Box",
    "Good Hurt",
    "Heart of Art",
    "Tribal Cafe",
    "The Hub",
    "Street Food Cinema",
    "Mission Tobacco Lounge",
    "The Airliner",
    "Muldoon's Saloon",
    "The Silverlake Lounge",
    "Chaffey College",
    "The Lemon Festival",
    "Ontario Mayor's Gala",
    "Downtown Disney",
    "Ontario Pride",
    "Powerhouse Hollywood",
    "The Klownski Lounge",
];

export default function PressStrip() {
    return (
        <section className="border-t border-white/10 bg-black/40">
            <div className="container mx-auto px-6 py-10">
                {/* Label */}
                <p className="uppercase tracking-[0.2em] text-xs text-neutral-500">
                    Previous venues / events
                </p>

                {/* Venues as a text-based “logo strip” */}
                <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-neutral-400">
                    {VENUES.map((v) => (
                        <li
                            key={v}
                            className="whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity"
                            // Tip: replace with actual SVG/PNG logos in the future.
                        >
                            {v}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}