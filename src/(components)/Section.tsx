export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">{title}</h1>
            {children}
        </section>
    );
}