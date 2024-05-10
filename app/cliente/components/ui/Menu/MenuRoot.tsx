import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

interface MenuRootProps extends VariantProps<typeof menu> {
    className?:string;
    children:ReactNode;
}

const menu = tv({
    base: "flex flex-col fixed z-[99]  h-full overflow-y-scroll top-0 items-center  justify-start pb-4  pt-2 gap-6 bg-white duration-500",
    variants: {
        open: {
            true: "left-0 w-[300px]",
            false: "max-lg:left-[-60px] left-[-240px] w-[60px]",
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

