'use client';

import { useState } from 'react';
import {
  Newspaper,
  Search,
  CalendarDays,
  User,
  ArrowRight,
} from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
  imageUrl: string;
}

type ArticleCardProps = {
  article: Article;
};

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('SEMUA');
  const [searchTerm, setSearchTerm] = useState('');

  const articles: Article[] = [
    {
      id: 1,
      title: "Pemasangan ACP Interior Modern untuk Kantor",
      description: "Solusi interior terbaik dengan panel ACP premium untuk menciptakan ruang kantor yang profesional dan estetis.",
      category: "Exterior",
      date: "05/07/2025",
      author: "User Admin",
      imageUrl: "/assets/images/assets-blog.jpg"
    },
    {
      id: 2,
      title: "Pemasangan ACP Interior Modern untuk Kantor",
      description: "Solusi interior terbaik dengan panel ACP premium untuk menciptakan ruang kantor yang profesional dan estetis.",
      category: "Exterior",
      date: "05/07/2025",
      author: "User Admin",
      imageUrl: "/assets/images/assets-blog.jpg"
    },
    {
      id: 3,
      title: "Pemasangan ACP Interior Modern untuk Kantor",
      description: "Solusi interior terbaik dengan panel ACP premium untuk menciptakan ruang kantor yang profesional dan estetis.",
      category: "Exterior",
      date: "05/07/2025",
      author: "User Admin",
      imageUrl: "/assets/images/assets-blog.jpg"
    },
  ];

  const categories = [
    { name: "SEMUA", active: activeCategory === "SEMUA" },
    { name: "Exterior", active: activeCategory === "Exterior" },
    { name: "Interior", active: activeCategory === "Interior" },
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'SEMUA' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-32 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/assets/images/blogBG.jpg')"
          }}
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            <Newspaper className="w-4 h-4 mr-2 text-yellow-400" />
            <span>Blog Terbaru</span>
          </Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] bg-clip-text text-transparent leading-tight">
            Blog & Artikel Kami
          </h1>
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-8">
            Temukan wawasan terbaru tentang ACP, desain interior & eksterior, serta tips dan trik dari para ahli kami.
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
          <Card className="p-6">
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <div className="flex-1 w-full">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Cari artikel..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10"
                    aria-label="Cari artikel"
                  />
                </div>
              </div>

              <div className="flex gap-2 w-full lg:w-auto flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    variant={category.active ? "default" : "secondary"}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    aria-label={`Filter kategori ${category.name}`}>
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Artikel Terbaru
            </h2>
            <p className="text-gray-600 text-lg">
              Berikut adalah artikel terbaru kami
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredArticles.slice(0, 3).map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SEMUA ARTIKEL
            </h2>
            <p className="text-gray-600 text-lg">
              Berikut adalah semua artikel kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Tidak ada artikel yang ditemukan sesuai dengan pencarian Anda.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className="group hover:shadow-md transition-shadow">
      <div className="p-0 relative">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-72 object-cover rounded-t-lg"
          loading="lazy"
          width={400}
          height={288}
        />
        <Badge className="absolute top-4 left-4">
          {article.category}
        </Badge>
      </div>
      <CardContent className="p-5">
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{article.author}</span>
          </div>
        </div>

        <CardTitle className="text-lg mb-2 line-clamp-2">
          {article.title}
        </CardTitle>

        <CardDescription className="text-sm mb-4 line-clamp-2">
          {article.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button variant="link" className="px-0 text-blue-600 group-hover:gap-3">
          Baca Selengkapnya
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardFooter>
    </div>
  );
};

export default BlogPage;
