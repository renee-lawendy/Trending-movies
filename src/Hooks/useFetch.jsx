import { useEffect } from "react"
import useSwr from 'swr'

import axios from 'axios'

const useFetch = (url) => {
  const controller = new AbortController()
  function getApi() {
    return axios.get(url, { signal: controller.signal }).then(res => res.data)
  }
  useEffect(() => {
    return () => { controller.abort() }
  }, [])

  return useSwr(url, getApi)
}
export default useFetch
