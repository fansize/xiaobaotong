import { allPosts } from "@/.contentlayer/generated";

export const baseUrl = "http://localhost:3000";

export default async function sitemap() {
  let blogs = allPosts.map((post) => ({
    url: `${baseUrl}${post.slug}`,
    lastModified: post.date,
  }));

  let routes = ["", "/posts"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
