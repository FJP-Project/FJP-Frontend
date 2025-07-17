'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Newspaper,
  Search,
  CalendarDays,
  User,
  ArrowRight,
} from 'lucide-react';

import { blogDatas } from '@/database/blogData';

const categories = ["Semua", "Interior", "Eksterior"];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const filteredArticles = blogDatas.filter((article) => {
    const matchesCategory = activeCategory === "Semua" || article.category === activeCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-32 sm:py-32 md:py-40 lg:py-58 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/assets/images/blogBG.jpg')" }}
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-1 sm:py-2 mb-4 sm:mb-6 border border-yellow-500/30">
            <Newspaper className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
            <span className="text-xs sm:text-sm md:text-base">Blog Terbaru</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] bg-clip-text text-transparent leading-tight">
            Blog & Artikel Kami
          </h1>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-6 sm:mb-8">
            Temukan wawasan terbaru tentang ACP, desain interior & eksterior, serta tips dan trik dari para ahli kami.
          </p>
        </div>
      </section>

      <section className="py-6 sm:py-8 bg-gray-50">
        <div className=" sm:max-w-[60%] md:max-w-[70%] lg:max-w-[70%] xl:max-w-[50%] container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row items-center gap-3 sm:gap-4">
              <div className="flex-1 w-full">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Cari artikel..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-sm md:rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-xs sm:text-sm"
                    aria-label="Cari artikel"
                  />
                </div>
              </div>

              <div className="flex gap-1 sm:gap-2 w-full lg:w-auto flex-wrap justify-center sm:justify-start">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3 sm:px-4 py-1 sm:py-2 rounded-sm md:rounded-md text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                      activeCategory === category
                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-sm'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    aria-label={`Filter kategori ${category}`}>
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
              Artikel Terbaru
            </h2>
            <div className="h-[4px] w-32 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] rounded" />
            <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
              Berikut adalah artikel terbaru kami
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredArticles.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
              Semua Artikel
            </h2>
            <div className="h-[4px] w-32 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] rounded" />
            <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
              Berikut adalah daftar semua artikel kami
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-sm sm:text-base">Tidak ada artikel yang ditemukan sesuai dengan pencarian Anda.</p>
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

const ArticleCard = ({ article }: ArticleCardProps) => {
  const router = useRouter();

  return (
    <article className="shadow-sm hover:shadow-md transition-shadow duration-300 group bg-white rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-semibold rounded-sm md:rounded-md">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
          <div className="flex items-center gap-1">
            <CalendarDays className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{article.author}</span>
          </div>
        </div>
        <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2 text-gray-900 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
          {article.shortDescription}
        </p>
        <button
          onClick={() => router.push(`/pages/blog/${article.slug}`)}
          className="cursor-pointer inline-flex items-center gap-1 sm:gap-2 text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium group-hover:gap-2 sm:group-hover:gap-3 transition-all duration-200"
          aria-label={`Baca selengkapnya tentang ${article.title}`}>
          Baca Selengkapnya
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </div>
    </article>
  );
};

export default BlogPage;
