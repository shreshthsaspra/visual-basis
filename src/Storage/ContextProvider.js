import { createContext, useState, useEffect } from 'react'
const GlobalStorage = createContext()
export default GlobalStorage;


export const DataStorage = ({ children }) => {

    const [currentStep, setCurrentStep] = useState(0)
    const [rotation, setRotation] = useState(0)
    const [zoom, setZoom] = useState(1)
    const [tokens, setTokens] = useState()
    const [PateintDetails, setPateintDetails] = useState();
    const [Bgcolor, setBgcolor] = useState();
    const [PateintService, setPateintService] = useState();
    const [uploadedImage, setUploadIMage] = useState();
    const [showProfile, setShowProfile] = useState(false);
    const [saveImage, setSaveImage] = useState(false);
    const [imgPath, setImgPath] = useState("");
    const [step, setStep] = useState(currentStep);
    const [switchPoint, setSwitchPoint] = useState("");
    const [model, setModel] = useState("");


    const [point, setPoint] = useState({
        front: "",
        left: "",
        back: "",
        right: "",
    });
    const [pointMap, setPointMap] = useState({
        front: "",
        left: "",
        back: "",
        right: "",
    });
    const [pointMapMv, setPointMapMv] = useState({
        front: "",
        left: "",
        back: "",
        right: "",
    });

    return (
        <GlobalStorage.Provider value={{
            model,
            setModel,
            pointMapMv,
            setPointMapMv,
            Bgcolor,
            setBgcolor,
            zoom,
            setZoom,
            pointMap,
            setPointMap,
            rotation,
            setRotation,
            uploadedImage,
            switchPoint,
            setSwitchPoint,
            setUploadIMage,
            point,
            setPoint,
            tokens,
            step,
            setStep,
            currentStep,
            setCurrentStep,
            setTokens,
            imgPath,
            setImgPath,
            PateintDetails,
            setPateintDetails,
            PateintService,
            setPateintService,
            showProfile,
            setShowProfile,
            saveImage,
            setSaveImage
        }} >
            {children}
        </GlobalStorage.Provider>
    )
}
