import { createContext, useState, useEffect } from 'react'
const GlobalStorage = createContext()
export default GlobalStorage;


export const DataStorage = ({children}) => {
  
const [tokens, setTokens] = useState()
   
    return(
        <GlobalStorage.Provider value={{tokens, setTokens}} >
            {children}
        </GlobalStorage.Provider>
    )
}