let BASE_URL = 'https://api.calendario.com.br/'
let TOKEN = 'ZW1hcnRpbnNsZW1vc0BnbWFpbC5jb20maGFzaD0yMzExNDUyMzg'

const URLS = {
  DATAS_COMEMORATIVAS: (ano, estado, cidade) => `?ano=${ano}&estado=${estado}&cidade=${cidade}&token=${TOKEN}&json=true`
}

export default URLS
export { BASE_URL }
