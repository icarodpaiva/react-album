import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PhotoContainer = styled.div`
  display: inline-block;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  font-size: 1.2rem;
  color: black;
  font-weight: bold;

  &:hover {
    background-color: #eee;
  }
`

type Props = {
  thumbnailUrl: string
  title: string
  id: number
}

export const Photos = ({ id, thumbnailUrl, title }: Props) => {
  return (
    <Link to={`/photo/${id}`}>
      <PhotoContainer>
        <img src={thumbnailUrl} alt={title} />
      </PhotoContainer>
    </Link>
  )
}
