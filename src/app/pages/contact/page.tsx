import ContactClient from './ContactClient'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontak Kami - Hubungi Tim Support 24/7 | Nama Perusahaan',
  description: 'Hubungi tim support kami melalui email, telepon, atau form kontak online. Respon cepat dalam 1 jam kerja. Konsultasi gratis tersedia.',
  keywords: 'kontak, hubungi kami, customer service, layanan pelanggan, support 24/7, konsultasi gratis',
  openGraph: {
    title: 'Kontak Kami - Hubungi Tim Support 24/7',
    description: 'Hubungi tim support kami melalui email, telepon, atau form kontak online. Respon cepat dalam 1 jam kerja.',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactClient />
};
