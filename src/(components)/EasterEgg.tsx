"use client";
import { useEffect, useRef } from "react";

const KONAMI = [
    "c","y","n"
];

export default function EasterEgg() {
    const idx = useRef(0);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            const expected = KONAMI[idx.current];
            if (e.key === expected) {
                idx.current += 1;
                if (idx.current === KONAMI.length) {
                    idx.current = 0;
                    // Rick time 😈
                    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank", "noopener,noreferrer");
                }
            } else {
                // reset si la tecla no corresponde
                idx.current = 0;
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return null; // no renderiza nada
}