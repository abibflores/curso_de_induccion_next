// app/blog/page.tsx
import React from 'react';
import Image from 'next/image';
import { fetchBlogPosts } from '@/lib/contentful';

import styles from './blog.module.css';

type BlogPost = {
  fields: {
    title: string;
    description: string;
    slug: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
};

export default async function BlogPage() {
  const blogPosts: BlogPost[] = await fetchBlogPosts();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Blog de Nuestro E-Commerce</h1>
        <p className={styles.subtitle}>
          Descubre consejos, noticias y tendencias sobre nuestros productos y el mundo del e-commerce.
        </p>
      </header>

      <section className={styles.postsSection}>
        {blogPosts.map((post) => (
          <article key={post.fields.slug} className={styles.post}>
            <Image
              src={`https:${post.fields.image.fields.file.url}`}
              alt={post.fields.title}
              className={styles.postImage}
            />
            <h2 className={styles.postTitle}>{post.fields.title}</h2>
            <p className={styles.postDescription}>{post.fields.description}</p>
            <a href={`/blog/${post.fields.slug}`} className={styles.readMore}>
              Leer más
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}
