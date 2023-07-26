import { useLocation ,Link} from "react-router-dom"
import React from 'react'

export default function BreadCrumb() {
    const location = useLocation()
    // console.log(location)
    let currentLocation =""
    let crumbs = location.pathname.split("/")
    .filter((crumb)=>{return crumb!==""})
    .map((crumb)=>{ currentLocation+= `/${crumb}`
         return ( <div key={crumb} className="crumb"><Link to={currentLocation}>{crumb}</Link></div>)})
  return (
    <div className="breadcrumbs">{crumbs}</div>
    //e5b977d149f2951f7a25e257e3f62068
  )
}