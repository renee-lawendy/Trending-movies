import React, { useState } from 'react'
import DisplaySpecificMedia from '../DisplaySpecificMedia/DisplaySpecificMedia';
import useFetch from '../../Hooks/useFetch'


export default function Movies() {
  const media_type='movie'
  let [page,setPage]=useState(1)
  const {data,isLoading,errorMessage}= useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=e5b977d149f2951f7a25e257e3f62068&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)

return (

<DisplaySpecificMedia data={data} errorMessage={errorMessage}  isLoading={isLoading} media_type={media_type} page={page} setPage={setPage} />
)
}
