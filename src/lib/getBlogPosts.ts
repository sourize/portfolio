import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export async function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fileNames = await fs.readdir(postsDirectory);

  const posts = await Promise.all(fileNames.map(async (fileName) => {
    const slug = fileName.replace(/\.mdx?$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data: metadata, content } = matter(fileContents);

    return {
      slug,
      metadata: {
        ...metadata,
        featured: metadata.featured || false,
      },
      content,
    };
  }));

  return posts;
}
