import { useCallback, useState } from 'react'
import { http } from '../resources/http'
import URLS from '../resources/urls'

export default function useCarregaDatas(ano, estado, cidade) {
  const [loading, setLoading] = useState(false)

  const carregaDatas = useCallback(
    async () => {
      debugger;
      setLoading(true)
      const url = URLS.DATAS_COMEMORATIVAS(ano, estado, cidade)
      try {
        const { data } = http.get(url)

      } catch (e) {

      } finally {
        setLoading(false)
      }
    },
    []
  )

  return [carregaDatas, loading]
}