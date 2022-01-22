import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Api } from '../Api'
import { AlbumType, PhotoType } from '../types/AlbumType'
import { Photos } from '../components/Photos'
import { Voltar } from '../components/Voltar'

export const Album = () => {
  const [albumName, setAlbumName] = useState<AlbumType>({
    userId: 0,
    id: 0,
    title: ''
  })
  const [photos, setPhotos] = useState<PhotoType[]>([])

  const params = useParams()

  useEffect(() => {
    loadAlbum()
    loadPhotos()
  }, [])

  const loadAlbum = async () => {
    if (params.id) {
      const json = await Api.loadAlbumName(params.id)
      setAlbumName(json)
    }
  }

  const loadPhotos = async () => {
    if (params.id) {
      const json = await Api.loadPhotos(params.id)
      setPhotos(json)
    }
  }

  return (
    <div style={{ padding: '5px' }}>
      <Voltar />
      <h2>{albumName.title}</h2>
      {photos.map((item, index) => (
        <Photos
          key={index}
          id={item.id}
          title={item.title}
          thumbnailUrl={item.thumbnailUrl}
        />
      ))}
    </div>
  )
}
