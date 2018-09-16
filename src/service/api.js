import asios from 'axios'

export const homeApi = () => {
  return asios.get('/api/index.json')
}
