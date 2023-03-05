import * as postService from '@/services/post-service'

export async function getStaticProps() {
  const postData = await postService.loadMarkdown('sample')

  return {
    props: {
      contents: postData.contents,
    },
  }
}

const Slug = ({ contents }) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: contents }} />
    </>
  )
}

export default Slug
