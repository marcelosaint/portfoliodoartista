import { notFound } from "next/navigation";
import { getArtistBySlug } from "@/data/artists";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArtistPage({ params }: Props) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);

  if (!artist) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
          Portfólio do Artista
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4">
          {artist.name}
        </h1>

        <p className="text-xl text-neutral-600 mb-8">{artist.subtitle}</p>

        <p className="max-w-3xl text-lg leading-relaxed text-neutral-700 mb-16">
          {artist.bio}
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          {artist.artworks.map((work, index) => (
            <article key={index}>
              <div className="aspect-[4/5] rounded-2xl bg-neutral-200 mb-4 flex items-center justify-center text-neutral-500">
                {work.image}
              </div>
              <h2 className="text-xl font-medium">{work.title}</h2>
              <p className="text-neutral-600">
                {work.medium}, {work.year}
              </p>
              {work.dimensions && (
                <p className="text-sm text-neutral-500 mt-1">
                  {work.dimensions}
                </p>
              )}
            </article>
          ))}
        </div>

        <section className="mt-20 pt-12 border-t border-neutral-200">
          <h3 className="text-2xl font-semibold mb-4">Contato</h3>
          <p className="text-neutral-700 mb-2">{artist.location}</p>

          {artist.email && (
            <p className="text-neutral-700">E-mail: {artist.email}</p>
          )}

          {artist.instagram && (
            <p className="text-neutral-700">Instagram: {artist.instagram}</p>
          )}

          {artist.whatsapp && (
            <a
              href={`https://wa.me/${artist.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 rounded-xl bg-neutral-900 px-5 py-3 text-white hover:opacity-90 transition"
            >
              Falar no WhatsApp
            </a>
          )}
        </section>
      </section>
    </main>
  );
}