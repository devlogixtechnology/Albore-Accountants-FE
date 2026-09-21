import { groq } from 'next-sanity';

// Query all published blogs for the insights listing page
export const BLOGS_QUERY = groq`
  *[_type == "blog" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    readTime,
    publishedAt,
    excerpt,
    coverImage,
    isFeatured,
    "author": author->{ name, role, avatar }
  }
`;

// Query a single blog article by its slug
export const BLOG_BY_SLUG_QUERY = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    readTime,
    publishedAt,
    excerpt,
    coverImage,
    content,
    seoTargetKeyword,
    seoSecondaryKeywords,
    seoMetaDescription,
    "author": author->{ name, role, avatar }
  }
`;

// Slugs query for SSG generateStaticParams
export const BLOG_SLUGS_QUERY = groq`
  *[_type == "blog" && defined(slug.current)][].slug.current
`;