import BlogDetailClient from './BlogDetailClient';

export default async function BlogPage({ params }: { params: { slug: string } }) {
  return <BlogDetailClient params={params} />;
}
