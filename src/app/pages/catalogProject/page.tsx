'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Calendar, User, ArrowRight, Grid3X3, Filter, Building2, Home } from 'lucide-react';
import { catalogData, CatalogProject } from '@/database/catalogData';

const categories = ["Semua", "Interior", "Eksterior"];
const locations = ["Semua", "Jakarta", "Bandung", "Bali", "Surabaya", "Tangerang"];

const CatalogProjectCatalog = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [activeLocation, setActiveLocation] = useState("Semua");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const router = useRouter();

  const filteredCatalogProjects = catalogData.filter((CatalogProject) => {
    const matchesCategory = activeCategory === "Semua" || CatalogProject.category === activeCategory;
    const matchesLocation = activeLocation === "Semua" || CatalogProject.location === activeLocation;
    const matchesSearch =
      CatalogProject.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      CatalogProject.fullDescription.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesLocation && matchesSearch;
  });

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
            Galeri Project Kami
          </h1>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-6 sm:mb-8">
            Temukan inspirasi dari koleksi proyek desain interior dan eksterior terbaik kami
            dengan material ACP berkualitas premium
          </p>
        </div>
      </section>

      <section className="py-6 sm:py-8 bg-gray-50 top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Cari nama proyek, deskripsi, atau lokasi..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-12 pr-4 py-2 sm:py-3 bg-gray-50 border border-gray-300 rounded-sm md:rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-xs sm:text-sm placeholder-gray-500"
                  aria-label="Cari proyek"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  <select
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-sm md:rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-xs sm:text-sm text-gray-900"
                    aria-label="Filter kategori">
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  <select
                    value={activeLocation}
                    onChange={(e) => setActiveLocation(e.target.value)}
                    className="px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-sm md:rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-xs sm:text-sm text-gray-900"
                    aria-label="Filter lokasi" >
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex bg-gray-100 rounded-sm md:rounded-md p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1 sm:p-2 rounded-sm ${
                      viewMode === 'grid'
                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-sm'
                        : 'text-gray-600 hover:bg-gray-200'
                    }`}
                    aria-label="Tampilan grid">
                    <Grid3X3 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1 sm:p-2 rounded-sm ${
                      viewMode === 'list'
                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-sm'
                        : 'text-gray-600 hover:bg-gray-200'
                    }`}
                    aria-label="Tampilan list" >
                    <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-gray-600 font-medium">
                Menampilkan {filteredCatalogProjects.length} proyek
                {activeCategory !== "Semua" && (
                  <span className="text-yellow-600"> • Kategori: {activeCategory}</span>
                )}
                {activeLocation !== "Semua" && (
                  <span className="text-yellow-600"> • Lokasi: {activeLocation}</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {filteredCatalogProjects.length > 0 ? (
            <div className={`
              ${viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'
                : 'flex flex-col gap-4 sm:gap-6'
              }
            `}>
              {filteredCatalogProjects.map((CatalogProject) => (
                viewMode === 'grid' ? (
                  <CatalogProjectGridCard key={CatalogProject.id} CatalogProject={CatalogProject} router={router} />
                ) : (
                  <CatalogProjectListCard key={CatalogProject.id} CatalogProject={CatalogProject} router={router} />
                )
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-20">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 sm:p-12 max-w-lg mx-auto">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Search className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">Proyek Tidak Ditemukan</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6">
                  Tidak ada proyek yang sesuai dengan filter pencarian Anda.
                  Coba ubah kata kunci atau filter yang digunakan.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("Semua");
                    setActiveLocation("Semua");
                  }}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-sm md:rounded-md text-xs sm:text-sm font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200">
                  Reset Filter
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

interface CatalogProjectCardProps {
  CatalogProject: CatalogProject;
  router: any;
}

const CatalogProjectGridCard = ({ CatalogProject, router }: CatalogProjectCardProps) => {
  return (
    <article className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg hover:border-yellow-300 transition-all duration-300">
        <div className="relative overflow-hidden">
          <img
            src={CatalogProject.imageUrl}
            alt={`Proyek ${CatalogProject.title} - ${CatalogProject.category}`}
            className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
            <span className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-bold rounded-sm md:rounded-md ${
              CatalogProject.category === 'Interior'
                ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black'
                : 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black'
            }`}>
              {CatalogProject.category}
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5 md:p-6">
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2 line-clamp-2 group-hover:text-yellow-600 transition-colors duration-200">
            {CatalogProject.title}
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
            {CatalogProject.fullDescription}
          </p>

          <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
            <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="truncate">{CatalogProject.location}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>{CatalogProject.year}</span>
            </div>
            {CatalogProject.client && (
              <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500">
                <User className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="truncate">{CatalogProject.client}</span>
              </div>
            )}
          </div>

          <button
            onClick={() => router.push(`/pages/catalogProject/${CatalogProject.slug}`)}
            className="w-full bg-gray-900 cursor-pointer text-white py-2 sm:py-3 px-3 sm:px-4 rounded-sm md:rounded-md text-xs sm:text-sm font-semibold hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-black flex items-center justify-center gap-1 sm:gap-2 group transition-all duration-200"
            aria-label={`Lihat detail proyek ${CatalogProject.title}`}>
            Lihat Detail
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};

const CatalogProjectListCard = ({ CatalogProject, router }: CatalogProjectCardProps) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg hover:border-yellow-300 transition-all duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-80 aspect-[4/3] relative overflow-hidden rounded-sm shadow-md">
          <img
            src={CatalogProject.imageUrl}
            alt={`Proyek ${CatalogProject.title} - ${CatalogProject.category}`}
            className="w-full h-full object-cover block hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
            <span
              className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-bold rounded-sm md:rounded-md ${
                CatalogProject.category === 'Interior'
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black'
                  : 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black'
              }`} >
              {CatalogProject.category}
            </span>
          </div>
        </div>

        <div className="flex-1 p-4 sm:p-6 md:p-8">
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 hover:text-yellow-600 transition-colors duration-200">
                {CatalogProject.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 leading-relaxed">
                {CatalogProject.fullDescription}
              </p>

              <div className="flex flex-wrap gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="flex items-center gap-1 sm:gap-2 text-gray-500">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm font-medium">{CatalogProject.location}</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-gray-500">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm font-medium">{CatalogProject.year}</span>
                </div>
                {CatalogProject.client && (
                  <div className="flex items-center gap-1 sm:gap-2 text-gray-500">
                    <User className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-medium">{CatalogProject.client}</span>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => router.push(`/pages/catalogProject/${CatalogProject.slug}`)}
              className="self-start bg-gray-900 cursor-pointer text-white py-2 sm:py-3 px-4 sm:px-6 rounded-sm md:rounded-md text-xs sm:text-sm font-semibold hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-black flex items-center gap-1 sm:gap-2 group transition-all duration-200"
              aria-label={`Lihat detail proyek ${CatalogProject.title}`}>
              Lihat Detail Proyek
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CatalogProjectCatalog;
