import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import People from './Components/People/People';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Notfound from './Components/NotFound/Notfound';
import { useState ,useEffect} from 'react';
import jwtDecode from 'jwt-decode';
import ProtectedRoute from './Components/protectedRoute/ProtectedRoute';
import TvShows from './Components/TvShows/TvShows';
import MediaDetails from './Components/MediaDetails/MediaDetails';
import ErrorElement from './Components/ErrorElement/ErrorElement';









function App() {
  const [userData,setUserData]=useState(null)
  function saveUserData(){
    let encodeToken= localStorage.getItem("userToken");
    let decodeToken =jwtDecode(encodeToken);
 
    setUserData(decodeToken)
  
  }
  useEffect(() => {
    if(localStorage.getItem("userToken")!==null){
saveUserData()
    }
  }, [])
  
  let routers = createBrowserRouter([
    { path: "", element: <Layout userData={userData} setUserData={setUserData}  />, errorElement:<ErrorElement/> , children: [
      {index:true , element: <ProtectedRoute><Home/></ProtectedRoute> ,errorElement:<ErrorElement/>},
      {path:"movies" , element:<ProtectedRoute><Movies/></ProtectedRoute> },
      {path:"tvShow" , element: <ProtectedRoute><TvShows/></ProtectedRoute>},
      {path:"people" , element: <ProtectedRoute><People/></ProtectedRoute>},
      {path:"mediaDetails/:media_type/:id" , errorElement:<ErrorElement/>,element: <ProtectedRoute><MediaDetails/></ProtectedRoute>},
      {path:"login" , element: <Login saveUserData={saveUserData}/>},
      {path:"register" , element: <Register/>},
      
      {path:"*" , element: <Notfound/>},
    ]}
  ])
  return <RouterProvider router={routers}></RouterProvider>
}

export default App;
