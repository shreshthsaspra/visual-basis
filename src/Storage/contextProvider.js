import { createContext, useState } from "react"
//data layer
export const GlobalStorage = createContext()

//wraap app and provide the data layer

export const DataStorage = ({ children }) => {
    const[loggedIN, setLoggedIn] = useState(false)
    const [patients, setPatients] = useState([])
    return (    
        <GlobalStorage.Provider value={{pateints:[patients, setPatients],login:[loggedIN, setLoggedIn]}}>
            {children}
        </GlobalStorage.Provider>
    )
}