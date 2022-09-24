import * as postService from '@/services/post-service'

export async function getStaticPaths() {
  return {
    paths: postService.getSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const postData = await postService.loadMarkdown(params.slug)

  return {
    props: {
      content: postData.content,
    },
  }
}

type Props = {
  content: string
}

const Slug = ({ content }: Props) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}

export default Slug
