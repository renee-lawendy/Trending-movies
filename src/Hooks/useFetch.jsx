import { useState, useEffect } from "react"

import axios from 'axios'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsloading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  useEffect(() => {
    const controller = new AbortController()
    function getApi() {
      axios.get(url, { signal: controller.signal })
        .then((res) => { setData(res.data); return res })
        .catch((err) => {
  
  
          if (err.name === "CanceledError") {
            console.log(err.message)
          }
  
          else {
            setErrorMessage(err.message)
  
  
          }
          throw Error(err.message)
          //  there a part of throw error("messages ") didn't get it in case !res.ok 
        }).finally(() => {
          setIsloading(false)
        })
  
  
    }

    getApi()
    return () => { controller.abort() }
  }, [url])
  return { data, isLoading, errorMessage }
}
export default useFetch
