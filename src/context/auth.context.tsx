"use client"

import React, { createContext, useState, useEffect, } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { VereficSession } from '@/lib/vereficSession';
import { CredenciasRetorno } from '@/types/credencias';

export interface AuthType {
    user: object;
    isLogger: boolean;
    isError: object;
}



const AuthContext = createContext<AuthType>({} as AuthType);

function AuthProvider({ children }: any) {


    const [isLogger, setIsLogger] = useState(false)
    const [isError, setIsError] = useState({ error: false, message: '' })
    const router = useRouter()

    function validarToken(): boolean {
        const token = Cookies.get("jwt-secret")?.valueOf();
        // VEREFICA SE EXISTE TOKEN
        if (token) {
            return true
        }else{
          
          return false  
        }
    }

    function vereficSession(){
       if(validarToken()){
        setIsLogger(true);
        const token = Cookies.get("jwt-secret")?.valueOf();
        const user: CredenciasRetorno =  VereficSession.isTokenVerefic(token);
        console.log(user)
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
            isError
        }}>
            {children}
        </AuthContext.Provider>

    </>)
}
export { AuthContext, AuthProvider };