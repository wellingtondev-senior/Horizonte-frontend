import Image from "next/image";
import getConfig from 'next/config';



interface LogoProps {
    className?: string
    imageName:string
}

const Logo = ({ className, imageName }: LogoProps) => {

    
    return (
       
            <div className="w-full flex items-center justify-center">
                <Image src={"/assets/images/logo.png"} alt={""} width={200} height={150}  />
            </div>
    );
}

export default Logo;