import TourList from "@/(components)/TourList";

export const metadata = { title: "Tour" };

export default function TourPage() {
    return (
        <section className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">Tour Dates</h1>
            <TourList />
        </section>
    );
}