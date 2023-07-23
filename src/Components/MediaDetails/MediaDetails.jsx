import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch';



export default function MediaDetails() {
  const { media_type, id } = useParams();
  const { data, isLoading, error } = useFetch(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=e5b977d149f2951f7a25e257e3f62068&language=en-US`)

  return (
    <div className="row pt-5 gx-5 ">
      <div className="col-3">
        {data?.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} className='w-100' alt="" />
          : <img src={`https://image.tmdb.org/t/p/w500${data?.profile_path}`} className='w-100' alt="" />}
      </div>
      <div className="col-6 ">
        <div className="">
          <h3 >{data?.title}{data?.name}</h3>
          <h5>{data?.known_for_department}</h5>
          <p className='text-muted my-3'>{data?.overview}{data?.biography}</p>

          {data?.vote_average && <><span>vote average is : {data.vote_average.toFixed(2)}</span><br /><span>vote count is : {data.vote_count}</span></>}
        </div>
      </div>
      {error && <div className='text-center'>
        <h3>Error</h3>
        <p>{error}</p>
        <Link className=' text-white' to={"/"}> BACK TO HOME PAGE</Link></div>}
      {isLoading && <div className='d-flex align-items-center justify-content-center vh-75'>
        <i className="fas fa-spinner fa-spin fa-6x"></i></div>}
    </div>

  )
}
