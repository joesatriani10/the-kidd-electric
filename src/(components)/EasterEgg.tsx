"use client";
import { useEffect, useRef } from "react";

// Define multiple sequences
const SEQUENCES = [
    {
        keys: ["c", "y", "n"],
        action: () =>
            window.open("https://www.youtube.com/shorts/Ay8lynMZ4mE", "_blank", "noopener,noreferrer"),
    },
    {
        keys: ["d", "a", "n", "i", "e", "l"],
        action: () =>
            window.open("https://youtube.com/clip/UgkxKCJa0SoWfdbyr8cV12SnQ3I-ijKtL-Hs?si=I2W1p6Uum5DI2KEy", "_blank", "noopener,noreferrer"),
    },
    {
        keys: ["m", "a", "t", "t"],
        action: () =>
            window.open("https://www.youtube.com/watch?v=33Ky-GH0YEg&list=OLAK5uy_nT-12SVglK-VuVXasttZZC6XIe1D0Tr8M", "_blank", "noopener,noreferrer"),
    },
    {
        keys: ["a", "n", "g", "e", "l"],
        action: () =>
            window.open("https://www.youtube.com/shorts/EhLqpjS0pJg", "_blank", "noopener,noreferrer"),
    },
];

export default function EasterEgg() {
    const idxRefs = useRef(SEQUENCES.map(() => 0));

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            SEQUENCES.forEach((seq, seqIndex) => {
                const expected = seq.keys[idxRefs.current[seqIndex]];
                if (e.key.toLowerCase() === expected) {
                    idxRefs.current[seqIndex] += 1;
                    if (idxRefs.current[seqIndex] === seq.keys.length) {
                        idxRefs.current[seqIndex] = 0;
                        seq.action();
                    }
                } else {
                    idxRefs.current[seqIndex] = 0;
                }
            });
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return null; // invisible component
}