import { createContext, useState, useEffect } from 'react'
const GlobalStorage = createContext()
export default GlobalStorage;


export const DataStorage = ({children}) => {
    
const [currentStep , setCurrentStep] = useState(0)
const [rotation, setRotation] = useState(0)
const [zoom, setZoom] = useState(1)
const [tokens, setTokens] = useState()
const [PateintDetails, setPateintDetails] = useState();
const [PateintService, setPateintService] = useState();
const [uploadedImage, setUploadIMage] = useState();
const [showProfile, setShowProfile] = useState(false);
const [saveImage, setSaveImage]= useState(false);
const [imgPath, setImgPath] = useState("");
const [step, setStep] = useState(currentStep);
const [switchPoint, setSwitchPoint] = useState("");

const [point, setPoint] = useState({
    front:"",
    left:"",
    back:"",
    right:"",
});

    return(
        <GlobalStorage.Provider value={{zoom, setZoom,rotation, setRotation,uploadedImage, switchPoint, setSwitchPoint, setUploadIMage, point, setPoint, tokens, step, setStep, currentStep , setCurrentStep, setTokens, imgPath, setImgPath, PateintDetails, setPateintDetails,PateintService, setPateintService,showProfile, setShowProfile,saveImage,setSaveImage  }} >
            {children}
        </GlobalStorage.Provider>
    )
}
