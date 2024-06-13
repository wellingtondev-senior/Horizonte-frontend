import { ElementType } from "react";
import { tv } from 'tailwind-variants'



const menuAction = tv({
    base: "p-4 text-[20px] text-white hover:text-[#804201]",
    variants: {
        
    },
    defaultVariants: {
      
    }
});

interface MenuActionProps  {
    menuActionIcon:ElementType
    onOpenAtion:()=>void
}


export const MenuAction = ({menuActionIcon:Icon, onOpenAtion}:MenuActionProps) => {
    return (
        <button onClick={onOpenAtion} className={menuAction({})}>
           <Icon/>
        </button>
    );
}

