import Section from "@/(components)/Section";


export const metadata = { title: "Music" };

export default function MusicPage() {
    return (
        <Section title="Music">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Spotify embed */}
                <iframe
                    className="aspect-square w-full rounded"
                    src="https://open.spotify.com/embed/album/7hTL4upicJyTw0BQpEAcC0"
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                />
                <iframe
                    className="aspect-square w-full rounded"
                    src="https://open.spotify.com/embed/album/398uHyDECL3OvKeZqrUhpD"
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                />
                {/* Bandcamp embed */}
                <iframe
                    className="aspect-square w-full rounded"
                    loading="lazy"
                    style={{ border: 0 }}
                    src="https://bandcamp.com/EmbeddedPlayer/track=1469109965/size=large/bgcol=333333/linkcol=e32c14/minimal=true/transparent=true/"
                    seamless
                >
                    <a href="https://thekiddelectric.bandcamp.com/track/subatomic-stardust">
                        Subatomic Stardust by The Kidd Electric
                    </a>
                </iframe>
                {/* YouTube video */}
                <iframe
                    className="aspect-video w-full rounded"
                    src="https://www.youtube.com/embed/gT6mZy6Gkw0?si=rQIYIHgRqf1D6bsN"
                    loading="lazy"
                    title="Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                <iframe
                    className="aspect-video w-full rounded"
                    src="https://www.youtube.com/embed/q7l368g0UAU?si=jlifCew3ewqudwMe"
                    loading="lazy"
                    title="Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                <iframe
                    className="aspect-video w-full rounded"
                    src="https://www.youtube.com/embed/tSwgINGZ-gk?si=Y_-YEWJQCnbPjt1Y"
                    loading="lazy"
                    title="Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </Section>
    );
}