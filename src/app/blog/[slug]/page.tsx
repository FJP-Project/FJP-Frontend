import BlogDetailClient from './BlogDetailClient';

export default async function Page({ params }: { params: { slug: string } }) {
  return <BlogDetailClient params={params} />;
}
