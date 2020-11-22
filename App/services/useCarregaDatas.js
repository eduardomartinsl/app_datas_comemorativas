import { useCallback, useState } from 'react'
import FormataStringData from '../helpers/FormataStringData'
import { http } from '../resources/http'
import URLS from '../resources/urls'

export default function useCarregaDatas(ano, estado, cidade) {

  const[calendario, setCalendario] = useState({})
  const[isLoading, setIsLoading] = useState(false)

  const loadHollidays = useCallback(
    async () => {
      setIsLoading(true)
      const url = URLS.DATAS_COMEMORATIVAS(ano, estado, cidade)
      try {
        const { data } = await http.get(url)

        let retorno = {}

        for(const item of data){
          retorno[FormataStringData(item.date)] = {
            "selected": true,
            "marked": true,
            "selectedColor": "green"
          };
        }

        setCalendario(retorno)
      } catch (e) {

      } finally {
        setIsLoading(false)
      }
    },
    []
  )

  return {calendario, isLoading, loadHollidays}
}