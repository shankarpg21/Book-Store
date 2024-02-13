import { createContext, useContext, useState } from "react";

const AuthContext=createContext(null)
export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);
    const [chk,setChk]=useState(false);
    const [token,setToken]=useState("");
    const login=(user)=>{
        setUser(user)
    }

    const register=()=>{
        !chk?setChk(true):setChk(false);
    }
    const logout=()=>{
        setUser(null)
    }
    const verify=(token)=>{
        setToken(token);
    }
    
    return(
        <AuthContext.Provider value={{user,login,logout,register,chk,token,verify}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>{
    return useContext(AuthContext)
}