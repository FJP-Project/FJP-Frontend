import BlogDetailClient from './BlogDetailClient';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: PageProps) {
  return <BlogDetailClient params={params} />;
}
