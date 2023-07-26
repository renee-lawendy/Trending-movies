import React from 'react'
import useFetch from '../../Hooks/useFetch'
import { Link } from 'react-router-dom'


export default function DisplayMedia({ url, media_type,showLoading }) {
  const { data, isLoading, errorMessage } = useFetch(url)
const response = data?.results

  return (
    
    <div className="row py-4 gy-3">
      <div className="col-md-4 d-flex align-items-center">
        <div><div className="border w-25 mb-3"></div>
          <h2 className="h3">
            Trending <br />{media_type} <br />To watch
          </h2>
          <p className='text-muted'>most watched {media_type} this week </p>
          <div className="border w-100 mt-3"></div></div>
      </div>
      {response?.slice(0, 10).map((data) => {
        return <div key={data.id} className="col-md-2">
          <Link className='text-decoration-none text-white' to={`/${data.media_type}/${data.id}`}>
            <div className="position-relative">
              {data.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} className='w-100' alt="" />
                : <img src={`https://image.tmdb.org/t/p/w500${data.profile_path}`} className='w-100' alt="" />}

              <h3 className="h6 text-center my-2">{data.title}{data.name}</h3>

              {data.vote_average && <div className="vote position-absolute end-0 top-0">
                <span>{data.vote_average.toFixed(2)}</span>
              </div>}
            </div>
          </Link>
        </div>
      })}
      {errorMessage.length > 0 && <div className='d-flex align-items-center justify-content-center vh-75'>
        <h3>{errorMessage}</h3></div>}
      {isLoading&&showLoading? <div className='d-flex align-items-center justify-content-center vh-75'>
        <i className="fas fa-spinner fa-spin fa-6x"></i></div>:''}
        
    </div>
  )
}
