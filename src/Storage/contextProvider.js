import { createContext, useState, useEffect } from 'react'
const GlobalStorage = createContext()
export default GlobalStorage;


export const DataStorage = ({children}) => {
  
const [tokens, setTokens] = useState()
const [PateintDetails, setPateintDetails] = useState();
const [PateintService, setPateintService] = useState();
const [showProfile, setShowProfile] = useState(false);
const [saveImage, setSaveImage]= useState(false);
const [imgPath, setImgPath] = useState("");




    return(
        <GlobalStorage.Provider value={{tokens, setTokens, imgPath, setImgPath, PateintDetails, setPateintDetails,PateintService, setPateintService,showProfile, setShowProfile,saveImage,setSaveImage  }} >
            {children}
        </GlobalStorage.Provider>
    )
}