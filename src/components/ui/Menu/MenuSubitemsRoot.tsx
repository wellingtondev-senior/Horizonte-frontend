import { ReactNode } from "react";
import { tv } from 'tailwind-variants'


interface MenuSubitemsRootProps {
    openSubItems?: boolean
    children: ReactNode
}


const animateSubMenu = tv({
    base: "fixed z-[2]  top-0 bottom-0 w-[240px] pl-6  bg-[#241200] transition-1 ease-in-out duration-700",
    variants: {
        openSubItems: {
            true: "left-[60px]",
            false: "left-[-240px]"
        }

    },
    defaultVariants: {
        openSubItems: true
    }
});




export const MenuSubitemsRoot = ({  openSubItems, children }: MenuSubitemsRootProps) => {

    return (
        <article className={animateSubMenu({ openSubItems })}>
            {children}
        </article>
    );
}

