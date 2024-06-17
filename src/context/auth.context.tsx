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
}



const AuthContext = createContext<AuthType>({} as AuthType);

function AuthProvider({ children }: any) {


    const [isLogger, setIsLogger] = useState(false)
    const [isError, setIsError] = useState({ error: false, message: '' })
    const [isUser,  setIsUser] = useState<CredenciasRetorno | null >(null);
    
   


    


    return (<>
        <AuthContext.Provider value={{
            isUser,
            isLogger,
            isError,
        }}>
            {children}
        </AuthContext.Provider>

    </>)
}
export { AuthContext, AuthProvider };