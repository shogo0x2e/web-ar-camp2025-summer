import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props: any) {
  const { mdxPath } = await props.params
  const { metadata } = await importPage(mdxPath)
  return metadata
}

const Wrapper = getMDXComponents({}).wrapper

export default async function Page(props: any) {
  const { mdxPath } = await props.params
  const { default: MDXContent, toc, metadata, sourceCode } = await importPage(mdxPath)
  
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={{ mdxPath }} />
    </Wrapper>
  )
}