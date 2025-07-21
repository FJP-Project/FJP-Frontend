'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Newspaper,
  Search,
  CalendarDays,
  User,
  ArrowRight,
  Filter,
  BookOpen,
  Clock,
  TrendingUp,
  Grid3X3,
  List,
  Tag,
  Eye,
  Star,
  Sparkles
} from 'lucide-react';

import { blogDatas } from '@/database/blogData';

const categories = ["Semua", "Interior", "Eksterior"];
const sortOptions = ["Terbaru", "Terlama", "Populer"];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Terbaru");
  const [viewMode, setViewMode] = useState('grid');
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredArticles = blogDatas.filter((article) => {
    const matchesCategory = activeCategory === "Semua" || article.category === activeCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    switch (sortBy) {
      case "Terbaru":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "Terlama":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "Populer":
        return Math.random() - 0.5;
      default:
        return 0;
    }
  });

  const latestArticles = sortedArticles.slice(0, 3);
  const allArticles = sortedArticles;

  if (isLoading) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-black text-white py-32 sm:py-32 lg:py-52 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('/assets/images/blogBG.jpg')" }}
          aria-hidden="true"
        />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-6xl">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-lg px-4 py-2 mb-6 border border-yellow-500/30">
            <BookOpen className="w-4 h-4 text-yellow-400" />
            <span className="text-sm md:text-base">Hubungi Kami</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent leading-tight">
            Blog & Insights
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed mb-10">
            Temukan wawasan mendalam tentang tren desain, teknologi ACP terbaru, dan tips dari para ahli untuk menciptakan ruang yang menakjubkan
          </p>
        </div>
      </section>

      <section className="py-8 bg-white shadow-sm top-0 z-30 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Cari artikel berdasarkan judul, kategori, atau topik..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-base placeholder-gray-500 transition-all duration-200"
                  aria-label="Cari artikel"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2">
                  <Tag className="w-5 h-5 text-gray-600" />
                  <select
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="px-2 py-2 sm:px-4 sm:py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm font-medium text-gray-900 min-w-[130px]"
                    aria-label="Filter kategori">
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-2 py-2 sm:px-4 sm:py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm font-medium text-gray-900 min-w-[130px]"
                    aria-label="Urutkan berdasarkan">
                    {sortOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="hidden sm:block sm:flex bg-gray-100 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-lg transition-all duration-200 ${
                      viewMode === 'grid'
                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-md'
                        : 'text-gray-600 hover:bg-gray-200'
                    }`}
                    aria-label="Tampilan grid">
                    <Grid3X3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 rounded-lg transition-all duration-200 ${
                      viewMode === 'list'
                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-md'
                        : 'text-gray-600 hover:bg-gray-200'
                    }`}
                    aria-label="Tampilan list">
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm font-medium text-gray-600">
                  Menampilkan {sortedArticles.length} artikel
                  {activeCategory !== "Semua" && (
                    <span className="text-yellow-600 font-semibold ml-2">• Kategori: {activeCategory}</span>
                  )}
                  {sortBy !== "Terbaru" && (
                    <span className="text-yellow-600 font-semibold ml-2">• Diurutkan: {sortBy}</span>
                  )}
                </p>

                {(searchTerm || activeCategory !== "Semua") && (
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setActiveCategory("Semua");
                      setSortBy("Terbaru");
                    }}
                    className="text-sm text-gray-500 hover:text-yellow-600 font-medium transition-colors duration-200">
                    Reset Filter
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {searchTerm === "" && activeCategory === "Semua" && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-md px-6 py-3 mb-6 border border-yellow-200">
                <Sparkles className="w-5 h-5 text-yellow-600" />
                <span className="text-sm font-bold text-yellow-800">Artikel Terbaru</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Konten Terbaru Kami
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 rounded-full mb-6" />
              <p className="text-gray-600 text-md sm:text-xl max-w-3xl leading-relaxed">
                Dapatkan insight terbaru tentang desain, teknologi, dan tren industri ACP langsung dari para ahli
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestArticles.map((article, index) => (
                <LatestArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6">
              {searchTerm || activeCategory !== "Semua" ? "Hasil Pencarian" : "Semua Artikel"}
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-6" />
            <p className="text-gray-600 text-md sm:text-lg">
              {searchTerm || activeCategory !== "Semua"
                ? `Ditemukan ${sortedArticles.length} artikel yang sesuai dengan pencarian Anda`
                : "Jelajahi seluruh koleksi artikel dan insights kami untuk menambah pengetahuan"
              }
            </p>
          </div>

          {sortedArticles.length > 0 ? (
            <div className={`
              ${viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'flex flex-col gap-8'
              }
            `}>
              {sortedArticles.map((article) => (
                viewMode === 'grid' ? (
                  <ArticleGridCard key={article.id} article={article} />
                ) : (
                  <ArticleListCard key={article.id} article={article} />
                )
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-16 max-w-lg mx-auto">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Search className="w-12 h-12 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Artikel Tidak Ditemukan</h3>
                <p className="text-gray-600 text-base mb-8 leading-relaxed">
                  Maaf, tidak ada artikel yang sesuai dengan pencarian Anda. Silakan coba kata kunci lain atau ubah filter pencarian.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("Semua");
                    setSortBy("Terbaru");
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-xl text-sm font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Reset Semua Filter
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    shortDescription: string;
    date: string;
    author: string;
    imageUrl: string;
    category: string;
    slug: string;
  };
}

interface LatestArticleCardProps extends ArticleCardProps {
  index: number;
}

const LatestArticleCard = ({ article, index }: LatestArticleCardProps) => {
  const router = useRouter();

  return (
    <article className="group relative">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-yellow-300 transition-all duration-500 h-full">
        <div className="relative overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-56 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            loading={index < 3 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold rounded-full shadow-lg">
              {article.category}
            </span>
          </div>
          {index < 3 && (
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full shadow-lg">
                <Star className="w-3 h-3 fill-current" />
                <span>TERBARU</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col h-full">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4 text-gray-900 line-clamp-2 group-hover:text-yellow-600 transition-colors duration-200 leading-tight">
            {article.title}
          </h3>

          <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
            {article.shortDescription}
          </p>

          <button
            onClick={() => router.push(`/pages/blog/${article.slug}`)}
            className="w-full cursor-pointer bg-gradient-to-r from-gray-900 to-gray-800 text-white py-3 px-4 rounded-md text-sm font-semibold hover:from-yellow-400 hover:to-yellow-500 hover:text-black flex items-center justify-center gap-2 group transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label={`Baca selengkapnya tentang ${article.title}`}>
            Baca Artikel
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};

const ArticleGridCard = ({ article }: ArticleCardProps) => {
  const router = useRouter();

  return (
    <article className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl hover:border-yellow-300 transition-all duration-300 h-full">
        <div className="relative overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold rounded-full">
              {article.category}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col h-full">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
          </div>

          <h3 className="text-lg font-bold mb-3 text-gray-900 line-clamp-2 group-hover:text-yellow-600 transition-colors duration-200">
            {article.title}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {article.shortDescription}
          </p>

          <button
            onClick={() => router.push(`/pages/blog/${article.slug}`)}
            className="cursor-pointer w-full bg-gray-900 text-white py-3 px-4 rounded-md text-sm font-semibold hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-black flex items-center justify-center gap-2 group transition-all duration-200"
            aria-label={`Baca selengkapnya tentang ${article.title}`}>
            Baca Artikel
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};

const ArticleListCard = ({ article }: ArticleCardProps) => {
  const router = useRouter();

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl hover:border-yellow-300 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-80 aspect-[4/3] relative overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold rounded-full">
              {article.category}
            </span>
          </div>
        </div>

        <div className="flex-1 p-6 sm:p-8">
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 hover:text-yellow-600 transition-colors duration-200">
                {article.title}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {article.shortDescription}
              </p>
            </div>

            <button
              onClick={() => router.push(`/pages/blog/${article.slug}`)}
              className="self-start cursor-pointer bg-gray-900 text-white py-3 px-6 rounded-md text-sm font-semibold hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-black flex items-center gap-2 group transition-all duration-200"
              aria-label={`Baca selengkapnya tentang ${article.title}`}>
              Baca Artikel Lengkap
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPage;
