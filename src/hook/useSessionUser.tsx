import { CookiesDB } from "@/lib/cookies";
import { VereficSession } from "@/lib/vereficSession";
import { useEffect, useState } from "react";

interface useSessionClienteProps {
    id: number,
    email: string,
    nome: string,
    role: string,
    iat: number
}



const useSession = ()=> {
  
    // const token = CookiesDB.get("jwt-secret");
    // const decodeToken = VereficSession.isTokenVerefic(token);
    // const Cliente = decodeToken;
    // return Cliente;
    return true
};


export {useSession};

