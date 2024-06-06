"use client"
import { useState } from "react";
import AuthPage from "./auth";
import LembrarSenha from "./lembrarSenha";
import RegistroPage from "./registro";
import usePageStore, { usePageStoreProps } from "@/store/usePageStore";

interface IComponent {
}

const FORMSCOMPOMENT:React.ComponentType<IComponent>[]= [
  AuthPage,
  RegistroPage,
  LembrarSenha,

]



const ColunaRight = () => {
    const pageStore = usePageStore((state:usePageStoreProps)=>state)
  
    return (
        <div className="w-[50%] max-md:w-full max-lg:w-[500px] m-auto min-h-screen h-auto flex flex-col items-center justify-center">
            {
              FORMSCOMPOMENT.map((Component,i)=>{
                if(i == pageStore.page){
                return(<Component key={i} />)

                }
              })  
            }
        </div>
    );
}

export default ColunaRight;