"use client";
import { useState } from "react";

const CONTACT_EMAIL = "booking@thekiddelectric.com"; // cámbialo si quieres

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const name = String(fd.get("name") || "").trim();
        const email = String(fd.get("email") || "").trim();
        const message = String(fd.get("message") || "").trim();

        if (!name || !email || !message) {
            setStatus("error");
            return;
        }

        setStatus("sending");

        // Construye el mailto con asunto y cuerpo
        const subject = encodeURIComponent(`Booking / Contact - ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        const href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

        // Abre el cliente de correo del usuario
        window.location.href = href;

        // feedback rápido
        setTimeout(() => setStatus("ok"), 300);
    }

    return (
        <form onSubmit={onSubmit} className="max-w-md grid gap-3">
            <input
                name="name"
                placeholder="Your name"
                className="px-3 py-2 rounded bg-neutral-900 border border-neutral-800"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your email"
                className="px-3 py-2 rounded bg-neutral-900 border border-neutral-800"
                required
            />
            <textarea
                name="message"
                placeholder="Your message"
                rows={6}
                className="px-3 py-2 rounded bg-neutral-900 border border-neutral-800"
                required
            />
            <button
                disabled={status === "sending"}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-black rounded hover:opacity-90 transition"
            >
                {/* icono envelope */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                </svg>

                {status === "sending" ? "Opening your email app…" : "Send"}
            </button>

            {status === "ok" && (
                <p className="text-green-400 text-sm mt-1">
                    If your email app didn’t open, please write to {CONTACT_EMAIL}.
                </p>
            )}
            {status === "error" && (
                <p className="text-red-400 text-sm mt-1">Please fill all fields.</p>
            )}
        </form>
    );
}