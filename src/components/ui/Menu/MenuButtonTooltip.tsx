import { ElementType} from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Route } from "next";
import { tv } from 'tailwind-variants'

interface MenuButtonTooltipProps {
    buttonIcon: ElementType
    label?: string,
    onAction: () => void | Route
}

const menuButton = tv({
    base: "rounded-sm w-[40px] h-[40px] flex items-center justify-center bg-[#ffffff] text-[#804201]",
  
});

export const MenuButtonTooltip = ({ buttonIcon: Icon, onAction, label }: MenuButtonTooltipProps) => {

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button onClick={onAction} className={menuButton({})}>
                        <Icon />
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    {label}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

