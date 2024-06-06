"use client"

import React, { createContext, useState, useEffect, } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { VereficSession } from '@/lib/vereficSession';
import { CredenciasRetorno } from '@/types/credencias';
import { CookiesDB } from '@/lib/cookies';

export interface AuthType {
    isUser: CredenciasRetorno | null;
    isLogger: boolean;
    isError: object;
    isLogout:()=>void
}



const AuthContext = createContext<AuthType>({} as AuthType);

function AuthProvider({ children }: any) {


    const [isLogger, setIsLogger] = useState(false)
    const [isError, setIsError] = useState({ error: false, message: '' })
    const [isUser,  setIsUser] = useState<CredenciasRetorno | null >(null);
    const router = useRouter();
   

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
        setIsUser(user)
       }else{
        
       }
    }

    function isLogout(){
        const token = Cookies.remove("jwt-secret");
        router.replace("/u")
    }





    useEffect(() => {
        vereficSession()
    }, [isLogger])

    return (<>
        <AuthContext.Provider value={{
            isUser,
            isLogger,
            isError,
            isLogout
        }}>
            {children}
        </AuthContext.Provider>

    </>)
}
export { AuthContext, AuthProvider };