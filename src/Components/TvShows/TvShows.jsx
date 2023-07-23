import React, { useState } from 'react'
import DisplaySpecificMedia from '../DisplaySpecificMedia/DisplaySpecificMedia';
import useFetch from '../../Hooks/useFetch'

export default function TvShows() {
  const media_type = 'tv'
  let [page, setPage] = useState(1)
  const { data, isLoading, error } = useFetch(` https://api.themoviedb.org/3/discover/tv?api_key=e5b977d149f2951f7a25e257e3f62068&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
  return (
    <DisplaySpecificMedia data={data} errorMessage={error} isLoading={isLoading} media_type={media_type} page={page} setPage={setPage} />

  )
}
