import { createContext, useState, useEffect } from 'react'
const GlobalStorage = createContext()
export default GlobalStorage;


export const DataStorage = ({children}) => {
  
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