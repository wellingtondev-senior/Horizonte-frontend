"use client"

import { CookiesDB } from "@/lib/cookies";
import { VereficSession } from "@/lib/vereficSession";
import { CredenciasRetorno } from "@/types/credencias";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IAccount {
  isUser: CredenciasRetorno | null;
  isLogout: () => void;
}

const useAccount = (): IAccount => {
  const [isUser, setIsUser] = useState<CredenciasRetorno | null>(null);
  const router = useRouter();

  const getUser = async () => {
    const token = verificToken();
    if (token) {
      const user: CredenciasRetorno = await VereficSession.isTokenVerefic(token);
      setIsUser(user);
    }
  };

  const verificToken = (): string | undefined => {
    const token = CookiesDB.get("jwt-secret");
    return token ? token : undefined;
  };

  const isLogout = () => {
    CookiesDB.delete("jwt-secret");
    
    setIsUser(null);
    router.replace("/u");
  };

  useEffect(() => {
    getUser();
  }, []);

  return { isUser, isLogout };
};

export default useAccount;
