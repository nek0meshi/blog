import { ChangeEventHandler, FormEventHandler } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  justify-content: space-between;
`

const SearchInput = styled.input`
  margin-right: 10px;
  padding: 7px;
  border: 1px solid #444;
  border-radius: 5px;
  font-size: 1.2rem;
`

type Props = {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  onSubmit: FormEventHandler<HTMLFormElement>
}

const SearchPostForm = ({ value, onChange, onSubmit }: Props) => {
  return (
    <Form onSubmit={onSubmit}>
      <SearchInput type="search" value={value} onChange={onChange} />
    </Form>
  )
}

export default SearchPostForm
