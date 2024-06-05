"use client"
import animationData from '@/assets/lottie/painel.json'
import { useLottie } from "lottie-react";


const ColunaLeft = () => {

    const options = {
        animationData: animationData,
        loop: true
      };
   
      const { View } = useLottie(options);
    return (
        <div className="max-lg:hidden w-[50%] min-h-screen h-auto bg-gradient-to-r from-[#f98e1b3d] via-white to-[#f5f91b4b] flex flex-col items-start justify-start pt-[25px] px-10">
            <h1 className=" font-extrabold text-[60px] text-gray-900">Plataforma para <span className='text-[#E46184]'>Gestão de trabalho</span></h1>
            <h2 className=" font-semibold text-[40px] text-gray-900">Protegendo o Presente, Garantindo o Futuro</h2>
           <div className='w-[400px] '>
           {View}
           </div>
        
        </div>
    );
}

export default ColunaLeft;