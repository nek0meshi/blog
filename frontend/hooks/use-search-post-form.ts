import { useRouter } from 'next/router'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'

const useSearchPostForm = () => {
  const router = useRouter()

  const [searchText, setSearchText] = useState('')

  const onChangeSearchText: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchText(e.target.value)
  }

  const onSubmitSearchText: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    router.push({
      pathname: '/posts/search',
      query: {
        q: searchText,
      },
    })
  }

  return {
    searchText,
    setSearchText,
    onChangeSearchText,
    onSubmitSearchText,
  }
}

export default useSearchPostForm
