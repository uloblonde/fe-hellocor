import { createContext,  useState } from "react";

export const ConsulContext = createContext()

export const ConsulProvider = (props) =>{
    const [idconsul,setIdConsul] = useState(0)

    return (
        <ConsulContext.Provider value={[idconsul,setIdConsul]}> 
            {props.children}
        </ConsulContext.Provider>
    )
}


