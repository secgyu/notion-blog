"use client";

import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export function MDXContent({ source }: { source: MDXRemoteSerializeResult }) {
  return <MDXRemote {...source} />;
}
