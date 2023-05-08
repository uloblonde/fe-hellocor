import {useContext} from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../component/context/userContext";

export function PrivateRouteLogin(){
    const [state] = useContext(UserContext)
    console.log(state.user.role)

    if (!state.isLogin){
        return <Navigate to={"/"}/>
    }
    return <Outlet/>
}
export const PrivateRoutePatient = () =>{
    const [state] = useContext(UserContext)

    if(state.user.role === "doctor"){
        return <Navigate to={"/"}/>
    }
    return <Outlet/>
}

export const PrivateRouteDoctor = () =>{
    const [state] = useContext(UserContext)

    if (state.user.role !== "doctor"){
        return <Navigate to={"/Table"}/>
    }
    return <Outlet/>
}