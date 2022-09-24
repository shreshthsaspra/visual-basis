
import './App.css';
import { useContext, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';


import Navbar from './components/Header/Navbar';
import GlobalStorage from './Storage/ContextProvider';

import AnimatedRoutes from './AnimatedRoutes/AnimatedRoutes';
import { setCookie, signout } from './Storage/auth';
import axios from 'axios';


function App() {
 const {tokens, setTokens} = useContext(GlobalStorage)
 console.log("backend", tokens);
  const [refresToken, setRefreshToken] = useState()
  useEffect(()=>{
    setRefreshToken(localStorage.getItem('refresh_token')?localStorage.getItem('refresh_token'):null)
  },[])
  const [loading, setLoading] = useState(true)
  console.log("refress", refresToken);
  const updateToken = async () => {
    if (refresToken != null) {
      console.log("refress token........")
      let url1 = `http://18.237.160.150/api/auth/refresh/`
      const refreshToken = await axios({
        method: "post",
        url: url1,
        headers: {
          Authorization: `Bearer ${refresToken}`
        }

      })
      if (refreshToken.status == 200) {
        console.log("refress token", refreshToken.data?.access_token);
        localStorage.setItem('token', refreshToken.data?.access_token);
        
        
    }
  }
   else {
      setLoading(false)
    // signout()
  }

}

useEffect(() => {
  let deley = 2000
  const interval = setInterval(() => {
    console.log("refress tokennnnnn");
    updateToken()
  }, deley);

  return () => clearInterval(interval)

}, [refresToken, tokens, loading])


return (
  <>

    <Navbar />
    <AnimatedRoutes />

  </>
);
}

export default App;
