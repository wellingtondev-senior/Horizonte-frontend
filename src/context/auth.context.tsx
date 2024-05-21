"use client"

import React, { createContext, useState, useEffect, } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export interface AuthType {
    user: object;
    isLogger: boolean;
    isLoading: boolean;
    isError: object;
}



const AuthContext = createContext<AuthType>({} as AuthType);

function AuthProvider({ children }: any) {


    const [isLogger, setIsLogger] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState({ error: false, message: '' })
    const router = useRouter()

    function validarToken(): boolean {
        const token = Cookies.get("jwt-secret")?.valueOf();
        if (token) {
            return true
        }else{
          return false  
        }
        
    }

    function vereficSession(){
       if(validarToken()){
        const token = Cookies.get("jwt-secret")?.valueOf();
        console.log(token)
       }else{
        
       }
    }





    useEffect(() => {
        vereficSession()
    }, [isLogger])

    return (<>
        <AuthContext.Provider value={{
            user: {},
            isLogger,
            isLoading,
            isError
        }}>
            {children}
        </AuthContext.Provider>

    </>)
}
export { AuthContext, AuthProvider };