import { tv, VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { MdLogout } from "react-icons/md";
import HoverCardAvatar from "../HoverCardAvatar";

interface HeaderProps extends VariantProps<typeof HeaderChildren> {
    className?: string;
}

const HeaderChildren = tv({
    base: "fixed z-[9] w-full h-auto  flex items-center justify-between pl-[80px] pr-4 py-2 ",
    variants: {
        open: {
            true: "left-[300px]  duration-550 ",
            false: "left-0  duration-550",
        },
    },



});



const Header = ({ open }: HeaderProps) => {
    return (
        <header className={cn(HeaderChildren({ open }))}>
            <article></article>
            <article>
                <HoverCardAvatar/>
            </article>
        </header>
    );
}

export default Header;