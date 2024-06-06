import { ElementType } from "react";
import { tv, VariantProps } from "tailwind-variants";

interface IconProps extends VariantProps<typeof iconTV> {
    icon: ElementType 
}
const iconTV = tv({
    base: "fill-white",
    variants: {
        iconFill: {
            orange: "fill-[#804201]"
        },
        iconSize: {
            sm: "min-w-4 min-h-4",
            md: "w-6 h-6",
            lg: "w-10 h-10"
        }
    },
    defaultVariants: {
        iconSize: "sm"
    }

});



export const IconButton = ({ icon: Icon, iconSize,  iconFill }: IconProps) => {
    return <div className={iconTV({ iconSize }) }> <Icon className={iconTV({ iconSize,  iconFill })} /></div>;
}

