import { NextResponse } from "next/server";
import { client } from "@/lib/sanity";
import { latestBlogPostsQuery } from "@/lib/sanity.queries";

export const revalidate = 60;

export async function GET() {
  const posts = await client.fetch(latestBlogPostsQuery);
  return NextResponse.json(posts);
}

