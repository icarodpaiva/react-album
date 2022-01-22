import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AlbumType } from '../types/AlbumType'

const AlbumContainer = styled.div`
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

export const Albuns = ({ id, userId, title }: AlbumType) => {
  return (
    <Link to={`/album/${id}`} style={{ textDecoration: 'none' }}>
      <AlbumContainer>{title}</AlbumContainer>
    </Link>
  )
}
