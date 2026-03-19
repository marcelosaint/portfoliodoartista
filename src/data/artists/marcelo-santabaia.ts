import { Artist } from "@/lib/types";

export const marceloSantabaia: Artist = {
  slug: "marcelo-santabaia",
  name: "Marcelo Santabaia",
  subtitle: "Esculturas, pinturas, cerâmicas e objetos artísticos",
  location: "Fortaleza, Ceará, Brasil",
  bio: "Marcelo Santabaia é artista visual e desenvolve trabalhos em escultura, pintura, cerâmica e objetos artísticos, com uma produção marcada pela experimentação de materiais, pelo diálogo entre arte e ofício e pela presença da matéria como linguagem.",
  statement:
    "Sua produção investiga a relação entre forma, materialidade, presença e construção manual, transitando entre peças autorais, séries e coleções.",
  whatsapp: "5585991872550",
  instagram: "@marcelosantabaia",
  email: "seuemail@exemplo.com",
  artworks: [
    {
      title: "Obra em destaque 1",
      year: "2025",
      medium: "Cerâmica",
      dimensions: "30 x 20 x 20 cm",
      image: "/artists/marcelo/obra-1.jpg",
      category: "ceramica",
    },
    {
      title: "Obra em destaque 2",
      year: "2025",
      medium: "Escultura em madeira",
      dimensions: "80 x 25 x 20 cm",
      image: "/artists/marcelo/obra-2.jpg",
      category: "escultura",
    },
  ],
};