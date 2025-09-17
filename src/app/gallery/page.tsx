import Section from "@/(components)/Section";
import GalleryGrid from "@/(components)/GalleryGrid";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
    return (
        <Section title="Gallery">
            <GalleryGrid />
        </Section>
    );
}