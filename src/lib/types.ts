export type Artwork = {
  title: string;
  year: string;
  medium: string;
  dimensions?: string;
  image: string;
  category: "pintura" | "escultura" | "ceramica" | "objeto";
};

export type Artist = {
  slug: string;
  name: string;
  subtitle: string;
  location: string;
  bio: string;
  statement: string;
  whatsapp?: string;
  instagram?: string;
  email?: string;
  artworks: Artwork[];
};