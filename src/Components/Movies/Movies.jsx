import React, { useState } from 'react'
import DisplaySpecificMedia from '../DisplaySpecificMedia/DisplaySpecificMedia';
import useFetch from '../../Hooks/useFetch'

// import { Link } from 'react-router-dom'

export default function Movies() {
  const media_type='movie'
  let [page,setPage]=useState(1)
  const {data,isLoading,errorMessage}= useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=e5b977d149f2951f7a25e257e3f62068&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
//   function handlePagination(e){
// setPage(e.target.textContent)
// }
// function handlePrevious(){
//   setPage(page-1 )
//   if(page===1){
//     setPage(1)
//   }
// }
// function handleNext(){
//   setPage(page +1 )
  
// }
// console.log(page)

//   return (
//     <>
//     <div className="row py-5">
//       {data?.results.map((movie)=>{return <div key={movie.id} className="col-md-2">
//           <Link className='text-decoration-none text-white' to={`/mediaDetails/movie/${movie.id}`}>
//             <div className="position-relative">
//               <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='w-100' alt="" />
              
//               <h3 className="h6 text-center my-2">{movie.title}</h3>

//                <div className="vote position-absolute end-0 top-0">
//                 <span>{movie.vote_average.toFixed(2)}</span>
//               </div>
//             </div>
//           </Link>
//         </div>})}
//     </div>
//     <nav className='d-flex justify-content-center mb-5 ' aria-label="Page navigation example  ">
//   <ul  className="pagination my-5 ">
//     <li  className="page-item"><span onClick={()=>{handlePrevious()}}   className="page-link" >Previous</span></li>
//     <li  className="page-item"><span onClick={(e)=>{handlePagination(e)}}  className="page-link" >1</span></li>
//     <li  className="page-item"><span onClick={(e)=>{handlePagination(e)}}  className="page-link" >2</span></li>
//     <li  className="page-item"><span onClick={(e)=>{handlePagination(e)}}  className="page-link" >3</span></li>
//     <li  className="page-item"><span onClick={(e)=>{handlePagination(e)}}  className="page-link" >4</span></li>
//     <li  className="page-item"><span onClick={()=>{handleNext()}}    className="page-link" >next</span></li>
//   </ul>
// </nav>
// {errorMessage!=='Request failed with status code 422'&& errorMessage.length > 0?<div className='text-center'>
//    <h3>Error</h3>
//         <p>{errorMessage}</p>
//        <Link className=' text-white' to={"/"}> BACK TO HOME PAGE</Link></div>:""}
    
//       {isLoading && <div className='d-flex align-items-center justify-content-center vh-75'>
//         <i className="fas fa-spinner fa-spin fa-6x"></i></div>}</>
//   )
return (

<DisplaySpecificMedia data={data} errorMessage={errorMessage}  isLoading={isLoading} media_type={media_type} page={page} setPage={setPage} />
)
}
