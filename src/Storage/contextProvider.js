import { createContext, useState, useEffect } from 'react'
const GlobalStorage = createContext()
export default GlobalStorage;


export const DataStorage = ({children}) => {
  
const [tokens, setTokens] = useState()
const [PateintDetails, setPateintDetails] = useState();
const [PateintService, setPateintService] = useState();
const [showProfile, setShowProfile] = useState(false);

    return(
        <GlobalStorage.Provider value={{tokens, setTokens,PateintDetails, setPateintDetails,PateintService, setPateintService,showProfile, setShowProfile}} >
            {children}
        </GlobalStorage.Provider>
    )
}