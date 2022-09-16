
import './App.css';
import { useContext } from "react";
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';


import Navbar from './components/Header/Navbar';
import {GlobalStorage} from "./Storage/ContextProvider"

import AnimatedRoutes from './AnimatedRoutes/AnimatedRoutes';


function App() {
 

  return (
    <>
      
        <Navbar />
        <AnimatedRoutes/>
    
    </>
  );
}

export default App;
