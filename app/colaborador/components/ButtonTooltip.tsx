import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ElementType } from "react";
import { VariantProps, tv } from "tailwind-variants";




interface ButtonTooltipProps extends VariantProps<typeof buttonIcon> {
    label?: string
    className?: string
    icon: ElementType
    tip:string
    variant?:"default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined
    onClick?:()=>void
    side:"top" | "bottom" | "right" | "left" | undefined, 
}


const buttonIcon = tv({
    base: "flex gap-2  max-lg:w-[20px]  h-[20px]  m-0 p-0 w-[20px]    text-white  text-[17px] duration-500",
});


const ButtonTooltip = ({ icon: Icon, label, className, tip, variant, onClick, side}: ButtonTooltipProps) => {
    return (
        <TooltipProvider >
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button onClick={onClick} variant={variant} className={cn(buttonIcon(), className)}>
                        <Icon />
                        {
                            label ? 
                            <span className="">{label}</span> :
                            <></>
                        }
                    </Button>
                </TooltipTrigger>
                <TooltipContent  side={side} className=" top-6  border rounded-md border-purple-800   px-2 z-[9999999999999]">
                    <p>{tip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export default ButtonTooltip;