import { ButtonHTMLAttributes, ElementType } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { IconButton } from "../IconButton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip";

// Defina 'item' antes da interface 'ButtonProps'
const button = tv({
    base: " font-semibold text-[13px] flex items-center justify-center gap-2 rounded-lg",
    variants: {
        background: {
            transparent: "bg-transparent",
            red:"bg-red-600",
            green:"bg-green-600",
            orange:"bg-orange-600",
            sky:"bg-sky-600",
            purple:"bg-purple-600"
        },
        size: {
            sm: "h-8 w-8",
            full:"w-full h-8"
        },
    },
    defaultVariants: {
        background: "transparent",
        size: "sm"
    }
});

// Agora, defina a interface 'ButtonProps'
interface ButtonProps extends VariantProps<typeof button> {
    icon?: ElementType;
    children?: string;
    onTap?: () => void;
    iconSize?:"sm" | "md" | "lg";
    iconFill?:"orange" | "sky" | "gray"
    tooltip:string

}

// Restante do código
const Button = ({ tooltip,iconFill, size, iconSize, background, onTap, children, icon, ...props }: ButtonProps) => {

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                <button className={button({ background, size })} onClick={onTap} {...props}>
        { icon ? <IconButton iconSize={iconSize} icon={icon} />:<></>}
        {children ? <span>{children}</span> :<></>} 
        </button>
                </TooltipTrigger>
                <TooltipContent>
                    {tooltip}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export default Button;

