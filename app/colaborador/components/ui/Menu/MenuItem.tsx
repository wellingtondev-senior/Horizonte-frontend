import { cn } from "@/lib/utils";
import Link from "next/link";
import { ElementType, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";



interface MenuListaProps extends VariantProps<typeof menuList> {
    className?: string;
    icon: ElementType
    href: string
    title: string
}

const menuList = tv({
    base: "cursor-pointer  w-full  h-[30px] bg-transparent  text-gray-700 flex items-center justify-center",

})

export const MenuItem = ({ className, icon: Icon, href, title }: MenuListaProps) => {
    return (
        <Link href={href} className={cn(menuList(), className)}>
            <div className="max-lg:w-[90%] w-[70%] flex items-center justify-start gap-4">
                {<Icon className="fill-gray-700 w-[17px] h-[17px]" />}
                <span>{title}</span>
            </div>

        </Link>
    );
}

