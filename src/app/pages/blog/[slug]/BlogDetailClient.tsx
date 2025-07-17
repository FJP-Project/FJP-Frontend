import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, Share2, Newspaper, ChevronRight, ArrowRight } from 'lucide-react';
import { blogDatas } from '@/database/blogData';

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

const BlogDetailPage = ({ params }: BlogDetailPageProps) => {
  const { slug } = params;
  const article = blogDatas.find((item) => item.slug === slug);

  if (!article) {
    return notFound();
  }

  const relatedArticles = blogDatas
    .filter((item) => item.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">

      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-32 sm:py-32 md:py-40 lg:py-58 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/assets/images/blogBG.jpg')" }}
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-1 sm:py-2 mb-4 sm:mb-6 border border-yellow-500/30">
            <Newspaper className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
            <span className="text-xs sm:text-sm md:text-base">Detail Artikel</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] bg-clip-text text-transparent leading-tight">
            {article.title}
          </h1>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-6 sm:mb-8">
            {article.shortDescription}
          </p>
        </div>
      </section>

      <section className="bg-white border-b py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs xs:text-sm text-gray-600 mb-3 sm:mb-4">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <User className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{article.author}</span>
                </div>
                <button className="ml-auto bg-yellow-400 hover:bg-yellow-500 text-black px-3 sm:px-4 py-1 sm:py-2 rounded text-xs sm:text-sm flex items-center gap-1 sm:gap-2 transition-colors">
                  <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  Bagikan
                </button>
              </div>
              <hr className="border-t border-gray-300 mb-4 sm:mb-6" />
            </div>

            <div className="mb-6 sm:mb-8">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-96 object-cover rounded-lg"
                loading="lazy"
              />
            </div>

            <div className="prose max-w-none text-sm xs:text-base sm:text-[15px] md:text-base">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {article.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Artikel Lainnya</h2>
              <div className="h-[4px] w-32 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] rounded" />
              <p className="text-xs sm:text-sm md:text-base mt-2 text-gray-600">Temukan artikel lainnya yang mungkin Anda sukai</p>
            </div>
            <Link href="../../pages/blog">
                <button 
                className="bg-yellow-400 cursor-pointer flex items-center gap-2 text-black px-4 py-2 rounded text-sm hover:bg-yellow-500 transition-colors">
                    Lihat Semua
                    <ChevronRight className='w-4 h-4'/>
                </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedArticles.map((relatedArticle) => (
              <ArticleCard key={relatedArticle.id} article={relatedArticle} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ArticleCard = ({ article }: { article: typeof blogDatas[0] }) => {
  return (
    <article className="shadow-sm hover:shadow-md transition-shadow duration-300 group bg-white rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-t-lg"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-semibold rounded-sm md:rounded-md">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 xs:gap-4 text-xs text-gray-500 mb-2 sm:mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{article.author}</span>
          </div>
        </div>
        <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-gray-900 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
          {article.shortDescription}
        </p>
        <a
          href={`/pages/blog/${article.slug}`}
          className="inline-flex items-center gap-1 sm:gap-2 text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium group-hover:gap-2 sm:group-hover:gap-3 transition-all duration-200">
          Baca Selengkapnya
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </a>
      </div>
    </article>
  );
};

export default BlogDetailPage;