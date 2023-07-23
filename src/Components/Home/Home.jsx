
import { Outlet } from 'react-router-dom';
import DisplayMedia from '../DisplayMedia/DisplayMedia';


export default function Home() {

  return (
    <>
    <div className="row">
      <DisplayMedia showLoading={true} media_type={'Movies'} url={'https://api.themoviedb.org/3/trending/movie/week?api_key=e5b977d149f2951f7a25e257e3f62068'}/>
      <DisplayMedia media_type={'Tv Shows'} url={'https://api.themoviedb.org/3/trending/tv/week?api_key=e5b977d149f2951f7a25e257e3f62068'}/>
      <DisplayMedia media_type={'people'} url={'https://api.themoviedb.org/3/trending/person/week?api_key=e5b977d149f2951f7a25e257e3f62068'}/>
      <Outlet/>
    </div>
    </>
    )
}
