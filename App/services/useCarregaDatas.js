import { useCallback, useState } from 'react'
import { http } from '../resources/http'
import URLS from '../resources/urls'

export default function useCarregaDatas(ano, estado, cidade, callback) {
  const [loading, setLoading] = useState(false)

  const carregaDatas = useCallback(
    async () => {
      setLoading(true)
      const url = URLS.DATAS_COMEMORATIVAS(ano, estado, cidade)
      try {
        const { data } = await http.get(url)
        callback(data)
      } catch (e) {

      } finally {
        setLoading(false)
      }
    },
    [callback]
  )

  return [carregaDatas, loading]
}