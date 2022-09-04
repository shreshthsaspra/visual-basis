import { createContext, useState } from "react"
//data layer
export const GlobalStorage = createContext()

//wraap app and provide the data layer

export const DataStorage = ({ children }) => {
    const [patients, setPatients] = useState([])
    return <GlobalStorage.Provider value={{patients, setPatients}}> {children} </GlobalStorage.Provider>
}