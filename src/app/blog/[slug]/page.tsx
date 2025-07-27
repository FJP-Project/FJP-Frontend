import { blogDatas } from '@/database/blogData';
import { ArrowRight, Calendar, ChevronRight, Clock, Eye, Share2, Tag, User } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { 
    slug: string 
  };
  searchParams?: { 
    [key: string]: string | string[] | undefined 
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  const article = blogDatas.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: 'Artikel Tidak Ditemukan',
      description: 'Artikel yang Anda cari tidak ditemukan.',
    };
  }

  return {
    title: `${article.title} | Blog`,
    description: article.shortDescription,
    keywords: [article.category, 'blog', 'artikel', article.title].join(', '),
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.shortDescription,
      images: [
        {
          url: article.imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.shortDescription,
      images: [article.imageUrl],
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return blogDatas.map((article) => ({
    slug: article.slug,
  }));
}

const ArticleCard = ({ article }: { article: typeof blogDatas[0] }) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl hover:border-yellow-300 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex flex-col h-full">
        <div className="w-full aspect-[4/3] relative overflow-hidden">
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
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 hover:text-yellow-600 transition-colors duration-200">
                {article.title}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {article.shortDescription}
              </p>
            </div>

            <Link
              href={`/blog/${article.slug}`}
              className="self-start cursor-pointer bg-gray-900 text-white py-3 px-6 rounded-md text-sm font-semibold hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-black flex items-center gap-2 group transition-all duration-200"
              aria-label={`Baca selengkapnya tentang ${article.title}`}
            >
              Baca Artikel Lengkap
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default function BlogDetailPage({ params }: PageProps) {
  const { slug } = params;
  const article = blogDatas.find((item) => item.slug === slug);

  if (!article) {
    return notFound();
  }

  const relatedArticles = blogDatas
    .filter((item) => item.id !== article.id && item.category === article.category)
    .slice(0, 3);

  if (relatedArticles.length < 3) {
    const additionalArticles = blogDatas
      .filter(
        (item) =>
          item.id !== article.id &&
          !relatedArticles.some((related) => related.id === item.id)
      )
      .slice(0, 3 - relatedArticles.length);

    relatedArticles.push(...additionalArticles);
  }

  const estimatedReadTime = Math.ceil(article.fullDescription.split(' ').length / 200);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": article.title,
            "description": article.shortDescription,
            "image": article.imageUrl,
            "author": {
              "@type": "Person",
              "name": article.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Blog Website"
            },
            "datePublished": article.date,
            "dateModified": article.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `/blog/${slug}`
            }
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-32 sm:py-32 md:py-52 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: "url('/assets/images/blogBG.jpg')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          <div className="relative container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 mb-6 border border-yellow-500/30">
                <Tag className="w-4 h-4 text-yellow-400" />
                <span className="text-sm md:text-base font-medium">{article.category}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] bg-clip-text text-transparent leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Oleh {article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={article.date}>{article.date}</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{estimatedReadTime} menit baca</span>
                </div>
              </div>
              <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
                {article.shortDescription}
              </p>
            </div>
          </div>
        </section>

        <article className="bg-white py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>{article.title}</span>
                  </div>
                </div>
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  aria-label="Bagikan artikel ini"
                >
                  <Share2 className="w-4 h-4" />
                  Bagikan
                </button>
              </div>

              <div className="mb-8 sm:mb-12">
                <figure>
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-lg"
                    loading="lazy"
                  />
                </figure>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  {article.fullDescription.split('\n').map(
                    (paragraph, index) =>
                      paragraph.trim() && (
                        <p key={index} className="mb-4">
                          {paragraph.trim()}
                        </p>
                      )
                  )}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold">
                      {article.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{article.author}</p>
                      <p className="text-sm text-gray-500">Penulis</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    Dipublikasikan pada {article.date}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <section className="py-12 sm:py-16 bg-white border-t">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-12">
                <div className="mb-6 sm:mb-0">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Artikel Terkait
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-[#FFB629] to-[#FFD7A6] rounded" />
                  <p className="text-gray-600 mt-3">
                    Temukan artikel menarik lainnya yang mungkin Anda sukai
                  </p>
                </div>
                <Link href="/blog">
                  <button className="bg-yellow-400 hover:bg-yellow-500 cursor-pointer text-black px-5 py-2 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300">
                    Semua Artikel
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <ArticleCard key={relatedArticle.id} article={relatedArticle} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}