import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Api } from '../Api'
import { PhotoType } from '../types/AlbumType'
import { PhotoBig } from '../components/PhotoBig'
import { Voltar } from '../components/Voltar'

export const Photo = () => {
  const [photo, setPhoto] = useState<PhotoType>({
    albumId: 0,
    id: 0,
    title: '',
    url: '',
    thumbnailUrl: ''
  })

  const params = useParams()

  useEffect(() => {
    loadPhoto()
  }, [])

  const loadPhoto = async () => {
    if (params.id) {
      const json = await Api.loadPhoto(params.id)
      setPhoto(json)
    }
  }

  return (
    <div style={{ padding: '5px' }}>
      <Voltar />
      <PhotoBig title={photo.title} url={photo.url} />
    </div>
  )
}
