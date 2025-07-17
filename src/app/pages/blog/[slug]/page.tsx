import BlogDetailClient from './BlogDetailClient';

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogDetailClient params={params} />;
}
