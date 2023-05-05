import { createContext, useReducer } from "react";

export const ProfileContext = createContext()

const initialProfile = {
    setProfile: false
}

const reducer = (state,action) =>{
    const [type,payload] = action

    switch(type) {
        case "PROFILE_ON":
            return{
                setProfile: true
            }
        case "PROFILE_OFF":
            return{
                setProfile: false
            }
        default:
            throw new Error()
    } 

}

export const ProfileContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(reducer,initialProfile)
    return (
        <ProfileContext.Provider>
            {children}
        </ProfileContext.Provider>
    )
}