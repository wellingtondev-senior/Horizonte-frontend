import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useMenuState, { useMenuStateProps } from "@/store/useMenuState";
import { ElementType, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";




interface MenuActionProps extends VariantProps<typeof menuAction> {
    className?: string;
    icon: ElementType;

}

const menuAction = tv({
    base: "fixed top-0 z-[9999] cursor-pointer  w-[50px] h-[50px] rounded-r-lg  flex items-center justify-center bg-white mt-[10px]",
    variants: {
        open: {
            true: "left-[300px]  duration-500",
            false: "left-0 duration-300"
        },
    },
    defaultVariants:{
        open:true
    }
});



export const MenuAction = ({ className, icon: Icon, open }: MenuActionProps) => {
    const {visible, setVisible} = useMenuState((state:useMenuStateProps)=>state);
    return (
        <button onClick={setVisible} className={cn(menuAction({ open:visible }))}>
            {
                <Icon className="fill-gray-100 w-[17px] h-[17px] duration-700" />
            }
        </button>
    );
}

