"use client"
import { useLottie } from "lottie-react";
import animationData from '../assets/lottie/load.json'

const Load = () => {

    
 const options = {
    animationData: animationData,
    loop: true
  };
   
  const { View } = useLottie(options);
    return (
        <div className="w-[200px] h-[200px]">
        {View}
      </div>
    );
}

export default Load;