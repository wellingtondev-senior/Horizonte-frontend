"use client"
import { useSession } from "@/hook/useSessionUser";
import { useEffect, useState } from "react"
import Modal from "./Modal";
import SignInPage from "./(auth)/login/page";
import HomeCliente from "./cliente/page";

export default function Home() {
  const session = useSession();
  const [isModal, setIsModal] = useState(true);



  useEffect(() => {
    const loop = setTimeout(() => {
      setIsModal(false);
    }, 2000);

    return () => clearTimeout(loop);
  }, []);

  return (
    <section>  
     {session ? <HomeCliente /> : <SignInPage />}
      <Modal stateActive={isModal} />
    </section>
  )
}
