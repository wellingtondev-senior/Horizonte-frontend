import Image from "next/image";
import getConfig from 'next/config';



interface LogoProps {
    className?: string
    imageName:string
}

const Icon = ({ className, imageName }: LogoProps) => {

    
    return (
       
            <div className="w-full flex items-center justify-center">
                <Image src={"/assets/images/icon.png"} alt={""} width={60} height={50}  />
            </div>
    );
}

export default Icon;