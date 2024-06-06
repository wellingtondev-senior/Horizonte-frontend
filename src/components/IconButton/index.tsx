import { cn } from "@/lib/utils";
import { ElementType } from "react";

interface IconProps {
    icon: ElementType 
    className:string
}




export const IconButton = ({ icon: Icon, className }: IconProps) => {
    return  <Icon className={cn(className)} />;
}

