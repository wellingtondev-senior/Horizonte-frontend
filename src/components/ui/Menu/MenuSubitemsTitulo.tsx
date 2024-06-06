import { ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants'


interface MenuSubitemsTituloProps extends VariantProps<typeof titulo>{
    label:string,
}

const titulo = tv({
    base: "font-bold  text-[20px] flex items-center justify-center py-6",
    variants:{
        color:{
            sky:"text-sky-200",
            orange:"text-orange-300"
        }
    },
   
});


export const MenuSubitemsTitulo = ({label,color,  ...props}:MenuSubitemsTituloProps) => {
    return (
        <h2 className={titulo({color})} {...props}>{label}</h2>
    );
}

