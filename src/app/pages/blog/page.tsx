import BlogClient from './BlogClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Artikel | Solusi ACP untuk Desain Interior dan Eksterior',
  description: 'Temukan artikel terbaru tentang ACP, desain interior & eksterior, serta tips dan trik dari para ahli kami.',
  keywords: 'ACP, Aluminium Composite Panel, desain interior, desain eksterior, artikel konstruksi',
  openGraph: {
    title: 'Blog & Artikel | Solusi ACP Profesional',
    description: 'Kumpulan artikel terbaru tentang penggunaan ACP untuk desain interior dan eksterior',
    type: 'website',
    url: '/blog',
    images: [
      {
        url: '/assets/images/blogBG.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog & Artikel Kami',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Artikel | Solusi ACP Profesional',
    description: 'Kumpulan artikel terbaru tentang penggunaan ACP untuk desain interior dan eksterior',
    images: ['/assets/images/blogBG.jpg'],
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
