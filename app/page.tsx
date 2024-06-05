"use client"
import { useContext, useEffect, useState } from "react"
import Modal from "./Modal";
import HomeCliente from "./cliente/page";
import { AuthContext } from "@/context/auth.context";
import HomeColaborador from "./colaborador/page";
import HomeDiretor from "./diretoria/page";
import AuthenticationPage from "./(auth)/u/page";

export default function Home() {
  const {isLogger, isUser} = useContext(AuthContext);
  const [isModal, setIsModal] = useState(true);


  const ComponentHome = () => {
    switch (isLogger) {
      case true:
        return isUser?.role ==="CLIENTE"? <HomeCliente /> : 
               isUser?.role ==="COLABORADOR"? <HomeColaborador/> :
               isUser?.role ==="DIRETOR" || isUser?.role ==="MASTER" ? <HomeDiretor/> :<></>
      case false:
        return <AuthenticationPage />
    }
  }

  useEffect(() => {
    const loop = setTimeout(() => {
      setIsModal(false);
    }, 2000);

    return () => clearTimeout(loop);
  }, []);

  return (
    <section>  
      <ComponentHome /> 
      <Modal stateActive={isModal} />
    </section>
  )
}
