"use client"
import { useContext, useEffect, useState } from "react"
import Modal from "./Modal";
import SignInPage from "./(auth)/login/page";
import HomeCliente from "./cliente/page";
import { AuthContext } from "@/context/auth.context";

export default function Home() {
  const {isLogger} = useContext(AuthContext);
  const [isModal, setIsModal] = useState(true);


  const ComponentHome = () => {
    switch (isLogger) {
      case true:
        return <HomeCliente />
      case false:
        return <SignInPage />
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
