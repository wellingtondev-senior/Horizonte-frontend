import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";




interface LogoProps extends VariantProps<typeof logo> { }

interface HeaderRootProps extends  LogoProps {
    className?: string;
    children: ReactNode
}

const logo = tv({
    base: "w-full h-[200px] bg-contain bg-no-repeat bg-center",
    variants: {
        open: {
            true: "",
            false:"",
        },
    },



});

const MenuHeader = ({ open, className, children }: HeaderRootProps) => {
    return (
        <header className={cn(className)}>
                {children}
                <div className={cn(logo({ open }))} style={{ backgroundImage: `url("/assets/images/logo.png")` }} />
        </header>
    );
}

export default MenuHeader;