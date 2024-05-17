"use client"
import { ReactNode } from "react";
import Menu from "../Menu";
import useMenuState, { useMenutateProps } from "@/store/useMenuState";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import Header from "./Header";
import { AuthProvider } from "@/context/auth.context";


interface DashboardProps extends VariantProps<typeof DashboardChildren> {
    className?: string;
    children: ReactNode;
}

const DashboardChildren = tv({
    base: "relative max-w-[99vw] right-0 w-full h-full  duration-500  block",
    variants: {
        open: {
            true: "left-[300px] right-0",
            false: "left-0 right-0",
        },
    },



});


const Dashboard = ({ children }: DashboardProps) => {
    const { visible } = useMenuState((state: useMenutateProps) => state);
    return (

        <main className="w-full  max-h-screen h-screen bg-gradient-to-r from-[#FACE08] to-[#F98E1B] flex justify-center overflow-x-hidden ">
            <Menu open={visible} />
            <Header open={visible} />
            <section className={cn(DashboardChildren({ open: visible }))}>
                {children}
            </section>
        </main>

    );
}

export default Dashboard;