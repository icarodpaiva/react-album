import styled from 'styled-components'

const PhotoContainer = styled.div`
  p {
    font-weight: bold;
    color: blueviolet;
  }

  img {
    border: 1px solid red;
    margin: 10px;
  }
`

type Props = {
  title: string
  url: string
}

export const PhotoBig = ({ title, url }: Props) => {
  return (
    <PhotoContainer>
      <p>{title}</p>
      <img src={url} alt={title} />
    </PhotoContainer>
  )
}
