import { useState, useEffect } from 'react'
import { Api } from '../Api'
import { Albuns } from '../components/Albuns'
import { AlbumType } from '../types/AlbumType'

export const Home = () => {
  const [albuns, setAlbuns] = useState<AlbumType[]>([])

  useEffect(() => {
    loadAlbuns()
  }, [])

  const loadAlbuns = async () => {
    const json = await Api.loadAlbuns()
    setAlbuns(json)
  }

  return (
    <>
      {albuns.map(({ id, userId, title }, index) => (
        <Albuns key={index} title={title} userId={userId} id={id} />
      ))}
    </>
  )
}
