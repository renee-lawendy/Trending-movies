import React, { useState } from 'react'
import useFetch from '../../Hooks/useFetch'

import DisplaySpecificMedia from '../DisplaySpecificMedia/DisplaySpecificMedia'
export default function People() {
  const media_type = 'person';
  let [page, setPage] = useState(1)
  const { data, isLoading, error } = useFetch(`https://api.themoviedb.org/3/person/popular?api_key=e5b977d149f2951f7a25e257e3f62068&language=en-US&page=${page}`)

  return (
    <DisplaySpecificMedia data={data} errorMessage={error} isLoading={isLoading} media_type={media_type} page={page} setPage={setPage} />

  )
}
