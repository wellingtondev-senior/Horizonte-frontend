"use client"

import Load from "@/components/Load";
import { useEffect, useLayoutEffect } from "react";
import { VariantProps, tv } from 'tailwind-variants';
import { cn } from "@/lib/utils";






interface ModalProps extends VariantProps<typeof ModalPropsVariant>{
  className?:string;
}

const ModalPropsVariant = tv({
  base: "fixed w-full h-screen  bg-gradient-to-r from-[#FACE08] to-[#F98E1B] flex  items-center justify-center",
  variants: {
    stateActive: {
          true: "top-0 transition-1 ease-in-out duration-500",
          false: "top-[-100vh] transition-1 ease-in-out duration-500",
          null:""
      },
  },
  

});



const Modal = ({ stateActive, className }: ModalProps) => {

  useLayoutEffect(() => {

  }, [stateActive])


  return (
    <main className={cn(ModalPropsVariant({stateActive}), className)}>
      <Load />
    </main>
  );
}

export default Modal;