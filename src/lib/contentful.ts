import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

export async function fetchBlogPosts() {
  const response = await client.getEntries({ content_type: 'blogPost' });
  return response.items;
}
