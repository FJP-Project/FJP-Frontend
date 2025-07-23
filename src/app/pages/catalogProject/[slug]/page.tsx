'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  User,
  Building2,
  Share2,
  Download,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Info
} from 'lucide-react';
import { catalogData, CatalogProject } from '@/database/catalogData';

const CatalogProjectDetail = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  const [CatalogProject, setCatalogProject] = useState<CatalogProject | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [relatedCatalogProjects, setRelatedCatalogProjects] = useState<CatalogProject[]>([]);

  useEffect(() => {
    const foundCatalogProject = catalogData.find(p => p.slug === slug);
    if (foundCatalogProject) {
      setCatalogProject(foundCatalogProject);
      const related = catalogData
        .filter(p => p.category === foundCatalogProject.category && p.slug !== slug)
        .slice(0, 3);
      setRelatedCatalogProjects(related);
    }

    setLoading(false);
  }, [slug]);

  const handleShare = async () => {
    if (navigator.share && CatalogProject) {
      try {
        await navigator.share({
          title: CatalogProject.title,
          text: CatalogProject.fullDescription,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
        navigator.clipboard.writeText(window.location.href);
        alert('Link berhasil disalin ke clipboard!');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link berhasil disalin ke clipboard!');
    }
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = () => {
    if (CatalogProject && CatalogProject.gallery) {
      setCurrentImageIndex((prev) =>
        prev === CatalogProject.gallery!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (CatalogProject && CatalogProject.gallery) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? CatalogProject.gallery!.length - 1 : prev - 1
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat detail Project...</p>
        </div>
      </div>
    );
  }

  if (!CatalogProject) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Building2 className="w-8 h-8 text-gray-500" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Project Tidak Ditemukan</h1>
          <p className="text-white mb-6">
            Maaf, Project yang Anda cari tidak dapat ditemukan atau mungkin sudah tidak tersedia.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-32 sm:py-32 md:py-40 lg:py-58 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/assets/images/projectBG.jpg')" }}
          aria-hidden="true"/>
        <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center">
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-1 sm:py-2 mb-4 sm:mb-6 border border-yellow-500/30">
            <Building2 className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
            <span className="text-xs sm:text-sm md:text-base font-medium">Gallery Project Kami</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] bg-clip-text text-transparent leading-tight">
            {CatalogProject.title}
          </h1>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-6 sm:mb-8">
            {CatalogProject.shortDescription}
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={CatalogProject.imageUrl}
                  alt={`${CatalogProject.title} - Gambar Utama`}
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openLightbox(0)}/>
                <button
                  onClick={() => openLightbox(0)}
                  className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white p-2 rounded-md hover:bg-black/70 transition-colors duration-200"
                  title="Lihat gambar penuh">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {CatalogProject.gallery && CatalogProject.gallery.length > 0 && (
                <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-3">
                  {CatalogProject.gallery.slice(0, 4).map((image, index) => (
                    <div key={index} className="aspect-square rounded-md overflow-hidden bg-gray-100">
                      <img
                        src={image}
                        alt={`${CatalogProject.title} - Gambar ${index + 1}`}
                        className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity duration-200"
                        onClick={() => openLightbox(index)}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <div className="mb-4">
                <span className={`inline-flex items-center gap-1 px-3 py-1 text-sm font-bold rounded-md ${
                  CatalogProject.category === 'Interior'
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black'
                    : 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black'
                }`}>
                  <Building2 className="w-4 h-4" />
                  {CatalogProject.category}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                {CatalogProject.title}
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                {CatalogProject.fullDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Lokasi</p>
                    <p className="text-gray-900 font-semibold">{CatalogProject.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Tahun</p>
                    <p className="text-gray-900 font-semibold">{CatalogProject.year}</p>
                  </div>
                </div>

                {CatalogProject.client && (
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg sm:col-span-2">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Klien</p>
                      <p className="text-gray-900 font-semibold">{CatalogProject.client}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => router.push('/pages/contact')}
                  className="flex-1 cursor-pointer bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-3 px-6 rounded-md font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 text-center" >
                  Konsultasi Project Serupa
                </button>
                <button
                  onClick={() => router.push('/pages/catalogProject')}
                  className="flex-1 cursor-pointer bg-gray-900 text-white py-3 px-6 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-200 text-center">
                  Lihat Project Lainnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-6">
              <Info className="w-5 h-5 text-yellow-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Detail Project</h2>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                {CatalogProject.fullDescription}
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-md">
                <p className="text-sm text-yellow-800">
                  <strong>Catatan:</strong> Setiap Project dirancang khusus sesuai kebutuhan dan preferensi klien.
                  Hasil akhir dapat bervariasi tergantung spesifikasi material dan kondisi lokasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedCatalogProjects.length > 0 && (
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Project Serupa
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedCatalogProjects.map((relatedCatalogProject) => (
                <div key={relatedCatalogProject.id} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg hover:border-yellow-300 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedCatalogProject.imageUrl}
                        alt={`${relatedCatalogProject.title} - ${relatedCatalogProject.category}`}
                        className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 text-xs font-bold rounded-md ${
                          relatedCatalogProject.category === 'Interior'
                            ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black'
                            : 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black'
                        }`}>
                          {relatedCatalogProject.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-yellow-600 transition-colors duration-200">
                        {relatedCatalogProject.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedCatalogProject.fullDescription}
                      </p>

                      <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{relatedCatalogProject.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{relatedCatalogProject.year}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => router.push(`/pages/catalogProject/${relatedCatalogProject.slug}`)}
                        className="w-full bg-gray-900 cursor-pointer text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-black flex items-center justify-center gap-2 transition-all duration-200">
                        Lihat Detail
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {isLightboxOpen && CatalogProject.gallery && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors duration-200">
              <X className="w-8 h-8" />
            </button>
            <img
              src={CatalogProject.gallery[currentImageIndex]}
              alt={`${CatalogProject.title} - Gambar ${currentImageIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain"
            />
            {CatalogProject.gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {CatalogProject.gallery.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogProjectDetail;
