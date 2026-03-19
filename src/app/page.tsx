import Link from "next/link";
import { artists } from "@/data/artists";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">
      <section className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
          Portfólio do Artista
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
          Plataforma para portfólios de artistas visuais
        </h1>

        <p className="max-w-2xl text-lg text-neutral-600 leading-relaxed mb-14">
          Um espaço para apresentar obras, trajetória, coleções e presença
          artística com visual elegante, autoral e profissional.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {artists.map((artist) => (
            <Link
              key={artist.slug}
              href={`/${artist.slug}`}
              className="block rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-md transition"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3">
                Artista
              </p>
              <h2 className="text-2xl font-semibold mb-2">{artist.name}</h2>
              <p className="text-neutral-600 mb-4">{artist.subtitle}</p>
              <span className="text-sm text-neutral-900">Ver portfólio →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}