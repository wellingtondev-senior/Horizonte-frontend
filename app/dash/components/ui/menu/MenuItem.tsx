import { cn } from "@/lib/utils";
import Link from "next/link";
import { ElementType, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";




interface MenuListaProps extends VariantProps<typeof menuList> {
    className?: string;
    icon:ElementType
    href:string
}

const menuList = tv({
    base: "cursor-pointer  w-[30px] h-[30px] bg-[#150124] p-[8px] hover:bg-[#290F3D]  border-[1px] border-[#10011B] rounded-lg shadow-lg flex items-center justify-center",
    
})

export const MenuItem = ({ className, icon:Icon, href}: MenuListaProps) => {
    return (
        <Link href={href} className={cn(menuList(), className)}>
            {<Icon className="fill-white w-[17px] h-[17px]"/>}
        </Link>
    );
}

