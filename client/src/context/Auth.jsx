import React,{createContext, useContext} from "react";


const AuthContext=createContext();

export const useAuth=()=>{
    return useContext(AuthContext)
}


export const AuthProvider=({children})=>{
    const value={name:"shrey"}

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}