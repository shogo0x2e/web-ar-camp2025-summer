import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export default async function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navbar = <Navbar logo={<b>ShibaLab @ 熱海合宿</b>} />
  const footer = <Footer>MIT {new Date().getFullYear()} © Web AR Camp.</Footer>

  return (
    <Layout
      navbar={navbar}
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/yourusername/web-ar-camp2025-summer/blob/main"
      footer={footer}
    >
      {children}
    </Layout>
  );
}