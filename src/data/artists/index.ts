import { eliseuJoca } from "./eliseu-joca";
import { marceloSantabaia } from "./marcelo-santabaia";

export const artists = [marceloSantabaia, eliseuJoca];

export function getArtistBySlug(slug: string) {
  return artists.find((artist) => artist.slug === slug);
}