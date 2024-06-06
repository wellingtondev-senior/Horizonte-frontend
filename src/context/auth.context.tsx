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
    vereficSession:()=>void
}



const AuthContext = createContext<AuthType>({} as AuthType);

function AuthProvider({ children }: any) {


    const [isLogger, setIsLogger] = useState(false)
    const [isError, setIsError] = useState({ error: false, message: '' })
    const [isUser,  setIsUser] = useState<CredenciasRetorno | null >(null);
    const router = useRouter();
   

    
    function vereficSession(){
        const token = Cookies.get("jwt-secret")?.valueOf();
       if(token){
        setIsLogger(true);
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
            isLogout,
            vereficSession
        }}>
            {children}
        </AuthContext.Provider>

    </>)
}
export { AuthContext, AuthProvider };