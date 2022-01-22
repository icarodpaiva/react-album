import axios from 'axios'

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const Api = {
  loadAlbuns: async () => {
    const response = await http.get('/albums')
    return response.data
  },
  loadAlbumName: async (id: string) => {
    const response = await http.get(`/albums/${id}`)
    return response.data
  },
  loadPhotos: async (id: string) => {
    const response = await http.get(`/albums/${id}/photos`)
    return response.data
  },
  loadPhoto: async (id: string) => {
    const response = await http.get(`/photos/${id}`)
    return response.data
  }
}
