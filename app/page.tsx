"use client"
import { useSession } from "@/hook/useSessionUser";
import { useEffect, useState } from "react"
import Modal from "./Modal";
import SignInPage from "./(auth)/login/page";
import HomeCliente from "./cliente/page";

export default function Home() {
  const session = useSession();
  const [isModal, setIsModal] = useState(true);


  const ComponentHome = () => {
    switch (!!session) {
      case true:
        return <HomeCliente />
      case false:
        return <SignInPage />
    }
  }
  const loop =  setTimeout(() => { setIsModal(false) }, 2000)

  useEffect(() => {
    if(isModal){
      clearTimeout(loop)
    }
  }, [isModal])

  return (
    <section>  
      <ComponentHome /> 
      <Modal stateActive={isModal} />
    </section>
  )
}
