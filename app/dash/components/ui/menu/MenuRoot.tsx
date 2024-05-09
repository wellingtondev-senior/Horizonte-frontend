import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

interface MenuRootProps extends VariantProps<typeof menu> {
    className?:string;
    children:ReactNode;
}

const menu = tv({
    base: "flex flex-col fixed z-[99] w-[60px] h-full overflow-y-scroll top-0 items-center  justify-start pb-4  pt-2 gap-6 bg-[#08000E] transition-1 ease-in-out duration-900",
    variants: {
        open: {
            true: "left-0 ",
            false: "left-[-60px] ",
        },
    },
    
    

});


export const MenuRoot = ({ className, children, open}:MenuRootProps) => {
    return (
        <nav className={cn(menu({open}), className)}>
           {children} 
        </nav>
    );
}

