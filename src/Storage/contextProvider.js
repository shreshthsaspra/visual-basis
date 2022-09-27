import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'
const GlobalStorage = createContext()
export default GlobalStorage;


export const DataStorage = ({children}) => {
    // let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    // let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    // let [loading, setLoading] = useState(true)

    // const history = useNavigate()

    // let loginUser = async (e )=> {
    //     e.preventDefault()
    //     let loginData = new FormData()
        
    //     console.log("login data",loginData);
    //     let response = await fetch('http://18.237.160.150/api/auth/token/', {
    //         method:'post',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body:loginData
    //     })
    //     let data = await response.json()

    //     if(response.status === 200){
    //         setAuthTokens(data)
    //         setUser(jwt_decode(data.access))
    //         localStorage.setItem('authTokens', JSON.stringify(data))
    //         history('/Hospital')
    //     }else{
    //         alert('Something went wrong!')
    //     }
    // }


    // let logoutUser = () => {
    //     setAuthTokens(null)
    //     setUser(null)
    //     localStorage.removeItem('authTokens')
    //     history('/login')
    // }


    // let updateToken = async ()=> {

    //     let response = await fetch('http://18.237.160.150/api/auth/refresh/', {
    //         method:'post',
    //         headers:{
    //             Authorization:`Bearer ${authTokens?.access}`
    //         },
    //         body:JSON.stringify({'refresh':authTokens?.refresh})
    //     })

    //     let data = await response.json()
        
    //     if (response.status === 200){
    //         setAuthTokens(data)
    //         setUser(jwt_decode(data.access))
    //         localStorage.setItem('authTokens', JSON.stringify(data))
    //     }else{
    //         logoutUser()
    //     }

    //     if(loading){
    //         setLoading(false)
    //     }
    // }
const [tokens, setTokens] = useState()
const [PateintDetails, setPateintDetails] = useState();
const [PateintService, setPateintService] = useState();
const [showProfile, setShowProfile] = useState(false);
    let contextData = {
        // user:user,
        // authTokens:authTokens,
        // loginUser:loginUser,
        // logoutUser:logoutUser,
    }


    // useEffect(()=> {

    //     if(loading){
    //         updateToken()
    //     }

    //     let fourMinutes = 1000 * 60 * 4

    //     let interval =  setInterval(()=> {
    //         if(authTokens){
    //             updateToken()
    //         }
    //     }, fourMinutes)
    //     return ()=> clearInterval(interval)

    // }, [authTokens, loading])

    return(
        <GlobalStorage.Provider value={{tokens, setTokens,PateintDetails, setPateintDetails,PateintService, setPateintService,showProfile, setShowProfile}} >
            {children}
        </GlobalStorage.Provider>
    )
}