export interface CatalogProject {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  location: string;
  year: string;
  imageUrl: string;
  slug: string;
  features: string[];
  client: string;
  gallery?: string[];
}

export const catalogData: CatalogProject[] = [
  {
    id: 1,
    title: "Kitchen Set",
    shortDescription: "Kitchen set modern",
    fullDescription: "Kitchen set modern adalah proyek desain interior yang menggunakan material ACP berkualitas premium.",
    category: "Interior",
    location: "Jakarta",
    year: "2023",
    imageUrl: "/assets/images/catalogProject/KitchenSet/catalog-kitchen1.jpg",
    slug: "kitchenset-project1",
    features: [
      "Penggunaan ACP high gloss",
      "Sistem pencahayaan LED",
      "Furniture ergonomis",
      "Zona kerja kolaboratif"
    ],
    client: "PT. Lorem Ipsum",
    gallery: [
      "/assets/images/catalogProject/KitchenSet/catalog-kitchen1.jpg",
      "/assets/images/catalogProject/KitchenSet/catalog-kitchen2.jpeg",
      "/assets/images/catalogProject/KitchenSet/catalog-kitchen3.jpg"
    ]
  },
  {
    id: 2,
    title: "Disbudpar Videotron",
    shortDescription: "Disbudpar Videotron",
    fullDescription: "Disbudpar Videotron adalah proyek desain interior yang menggunakan material ACP berkualitas premium.",
    category: "Interior",
    location: "Jakarta",
    year: "2023",
    imageUrl: "/assets/images/catalogProject/VideoTron-Disbudpar/disbudpar-videotron1.jpg",
    slug: "disbudpar-videotron",
    features: [
      "Penggunaan ACP high gloss",
      "Sistem pencahayaan LED",
      "Furniture ergonomis",
      "Zona kerja kolaboratif"
    ],
    client: "PT. Lorem Ipsum",
    gallery: [
      "/assets/images/catalogProject/VideoTron-Disbudpar/disbudpar-videotron1.jpg",
      "/assets/images/catalogProject/VideoTron-Disbudpar/disbudpar-videotron2.jpg",
      "/assets/images/catalogProject/VideoTron-Disbudpar/disbudpar-videotron3.jpg",
    ]
  },
];
