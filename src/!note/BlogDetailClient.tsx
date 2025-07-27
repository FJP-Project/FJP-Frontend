import BlogDetailClient from '../app/blog/[slug]/page';

export default async function BlogPage({ params }: { params: { slug: string } }) {
  return <BlogDetailClient params={params} />;
}
