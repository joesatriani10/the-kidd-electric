import Image from "next/image";
import Section from "@/(components)/Section";


export const metadata = { title: "About" };

export default function AboutPage() {
  // TEMP: replace these with your real images in /public
  const photos = [
    // live1 — TOP-LEFT
    { src: "/live1.avif", alt: "live1.avif", rotate: "-rotate-8", pos: "md:top-[4%] md:left-[2%]",  z: "md:z-[3]", w: "w-[40%]", wlg: "lg:w-[38%]", h: "h-[360px]", hlg: "lg:h-[400px]" },
    // live3 — TOP-RIGHT
    { src: "/live3.avif", alt: "live3.avif", rotate: "rotate-7",  pos: "md:top-[4%] md:left-[58%]", z: "md:z-[3]", w: "w-[40%]", wlg: "lg:w-[38%]", h: "h-[360px]", hlg: "lg:h-[400px]" },
    // live2 — BOTTOM-LEFT
    { src: "/live2.avif", alt: "live2.avif", rotate: "-rotate-6", pos: "md:top-[58%] md:left-[6%]", z: "md:z-[4]", w: "w-[36%]", wlg: "lg:w-[34%]", h: "h-[340px]", hlg: "lg:h-[380px]" },
    // live4 — BOTTOM-RIGHT
    { src: "/live4.avif", alt: "live4.avif", rotate: "-rotate-2", pos: "md:top-[60%] md:left-[62%]", z: "md:z-[4]", w: "w-[34%]", wlg: "lg:w-[32%]", h: "h-[320px]", hlg: "lg:h-[360px]" },
    // live5 — CENTER (on top)
    { src: "/live5.avif", alt: "live5.avif", rotate: "-rotate-4", pos: "md:top-[26%] md:left-[35%]", z: "md:z-[5]", w: "w-[36%]", wlg: "lg:w-[36%]", h: "h-[400px]", hlg: "lg:h-[440px]" },
  ];

  return (
    <Section title="About The Kidd Electric">
      <div className="relative overflow-visible">
        {/* subtle grain overlay */}
        <div className="grain pointer-events-none" />
        <div className="relative grid md:grid-cols-5 gap-8">
          {/* Sticky facts card */}
          <aside className="md:col-span-2">
            <div className="sticky top-24">
              <div className="rounded-lg border border-neutral-800 bg-neutral-950/60 backdrop-blur p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Band Facts</h3>
                <dl className="space-y-3 text-sm leading-relaxed">
                  <div>
                    <dt className="text-neutral-400">Genre</dt>
                    <dd>Indie / Rock (spooky-tinged)</dd>
                  </div>
                  <div>
                    <dt className="text-neutral-400">Location</dt>
                    <dd>California, USA</dd>
                  </div>
                  <div>
                    <dt className="text-neutral-400">Members</dt>
                    <dd>
                      Cyn Electric — Vox<br />
                      Matt Hopf — Drums<br />
                      Danny Balboa — Guitar<br />
                      Angel Montes de Oca — Guitar
                    </dd>
                  </div>
                  <div>
                    <dt className="text-neutral-400">Latest single</dt>
                    <dd><em>Subatomic Stardust</em></dd>
                  </div>
                </dl>
              </div>
            </div>
          </aside>

          {/* Bio + collage */}
          <div className="md:col-span-3 space-y-10">
            <div className="prose prose-invert max-w-none">
              <p>
                <strong>The Kidd Electric</strong> is an indie/rock band with a raw edge and shadowy, cinematic twist. Rooted in rockabilly energy, they explore darker, atmospheric sounds while keeping their riffs dynamic and melodic. Over the past decade the band has evolved in both name and lineup, now formed by Cyn Electric (vocals), Matthew Hopf (drums), Daniel Balboa (guitar), and Angel Montes de Oca (guitar).
              </p>
              <p>
                Influenced by artists like Mother Mother, Metric, Arctic Monkeys, and Juanes, their music blends eclectic experimentation with personal storytelling. Their debut EP <em>Sonic Bloom</em> (April 2024) surpassed 11k streams, marking a milestone in their growing resonance with listeners.
              </p>
              <p>
                The Kidd Electric has played stages from Vans Warped Tour Vegas to the Whisky A Go Go, The Viper Room, and even opened for No Doubt. Recognition includes press features and radio support across the U.S. and overseas.
              </p>
              <p>
                At its heart, their music is a vessel for resilience. Lyrics often bloom from life’s challenges, turning adversity into art. Each track is moody, defiant, and unapologetically electric—now streaming on all major platforms.
              </p>
            </div>

            {/* Collage (scattered polaroids) */}
            <div className="relative">
              {/* Mobile: simple grid for readability */}
              <div className="grid grid-cols-2 gap-4 md:hidden">
                {photos.map((p, i) => (
                  <div key={i} className={`relative h-[240px] ${p.rotate}`}>
                    {/* tape accents */}
                    <span className="absolute -top-2 left-6 rotate-[-8deg] bg-[#efe3bf] h-3 w-10 opacity-80 rounded-[2px] shadow-sm" />
                    <span className="absolute -top-1 right-6 rotate-[10deg] bg-[#efe3bf] h-3 w-10 opacity-75 rounded-[2px] shadow-sm" />
                    {/* polaroid frame */}
                    <div className="relative h-full w-full bg-white rounded-md p-2 pb-6 shadow-[0_18px_45px_rgba(0,0,0,0.5)]">
                      <div className="relative h-full w-full rounded-sm overflow-hidden bg-neutral-100">
                        <Image
                          src={p.src}
                          alt={p.alt}
                          fill
                          className="object-contain"
                          sizes="100vw"
                          priority={i === 0}
                        />
                      </div>
                      {/* subtle edge */}
                      <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-black/5" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop: scattered absolute layout */}
              <div className="hidden md:block relative h-[900px] lg:h-[980px]">
                {photos.map((p, i) => (
                  <div key={i} className={`absolute ${p.pos} ${p.z} ${p.w ?? "w-[34%]"} ${p.wlg ?? "lg:w-[30%]"}`}>
                    <div className={`relative ${p.h ?? "h-[380px]"} ${p.hlg ?? "lg:h-[440px]"} ${p.rotate} group`}>
                      {/* tape accents */}
                      <span className="absolute -top-3 left-8 rotate-[-7deg] bg-[#efe3bf] h-3.5 w-12 opacity-85 rounded-[2px] shadow-sm" />
                      <span className="absolute -top-2 right-10 rotate-[9deg] bg-[#efe3bf] h-3.5 w-12 opacity-80 rounded-[2px] shadow-sm" />
                      {/* polaroid frame */}
                      <div className="relative h-full w-full bg-white rounded-md p-3 pb-8 shadow-[0_22px_55px_rgba(0,0,0,0.55)] transition-transform duration-300 hover:rotate-0 hover:scale-[1.03]">
                        <div className="relative h-full w-full rounded-sm overflow-hidden bg-neutral-100">
                          <Image
                            src={p.src}
                            alt={p.alt}
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 42vw, 38vw"
                          />
                        </div>
                        {/* subtle paper edge */}
                        <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-black/10" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}