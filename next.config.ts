import type { NextConfig } from "next";
import nextra from 'nextra';
 
const withNextra = nextra({
  // Serve content under /docs
  contentDirBasePath: '/docs'
})

const nextConfig: NextConfig = withNextra({
  // If using Turbopack and mdx-components is in src/, add this alias
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.tsx'
    }
  }
});

export default nextConfig;
