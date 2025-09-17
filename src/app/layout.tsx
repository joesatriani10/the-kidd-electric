import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import EasterEgg from "@/(components)/EasterEgg";
import MobileMenu from "@/(components)/MobileMenu";
import Header from "@/(components)/Header";
import Footer from "@/(components)/Footer";

export const metadata: Metadata = {
    title: "The Kidd Electric",
    description: "Official website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-neutral-950 text-neutral-100 antialiased">
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        <EasterEgg />
        </body>
        </html>
    );
}