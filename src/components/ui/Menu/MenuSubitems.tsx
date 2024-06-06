"use client"
import { ElementType, useState } from "react";
import { VariantProps, tv } from "tailwind-variants";
import { IconButton } from "../../IconButton";
import { Button } from "../button";
import useSubMenutate, { useSubMenutateProps } from "@/store/useSubMenuState";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";

interface MenuSubitemsTituloProps extends VariantProps<typeof item> {
    label: string,
    page: string,
    icon: IconType,
  
}

const item = tv({
    base: "font-semibold  text-[15px] flex items-center justify-start p-0 hover:bg-transparent space-x-4 ",
    variants: {
        iconDefault:{
            true:"fill-[#FC8F1A] w-4 h-4",
            false:"fill-white  w-4 h-4"
        },
      labelText:{
        true:"text-white hover:text-[#FC8F1A]",
        false:"text-white hover:text-[#FC8F1A]",
      }
       

    },
  
});




export const MenuSubitems = ({ label, page, icon }: MenuSubitemsTituloProps) => {
    const subMenuState = useSubMenutate((state: useSubMenutateProps) => state);
    const [isHover, setIsHover] = useState<boolean>(false);
    
    const router = useRouter();
    return (
        <Button 
        variant="ghost"
        className={cn(item({labelText:isHover}))} 
        onClick={() => {
            router.push(page)
            subMenuState.setVisible();
        }} 
        onMouseEnter={()=>setIsHover(!isHover)}
        onMouseLeave={()=>setIsHover(!isHover)}
        >
            <IconButton className={item({ iconDefault:isHover})} icon={icon} />
            <span>{label}</span>
        </Button>
    );
}

