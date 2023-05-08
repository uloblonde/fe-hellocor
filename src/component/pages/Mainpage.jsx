import { useContext, useEffect } from "react";
import Landingpage from "./Landingpage";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";


export default function Mainpage(){
    const [iniState] = useContext(UserContext)
    const navigate = useNavigate()

    
    useEffect(()=>{
        if(iniState.user.role === 'doctor'){
            navigate("/Table")
            window.location.reload()
        }
    },[iniState])

    return(
        <Landingpage/>
    )
}