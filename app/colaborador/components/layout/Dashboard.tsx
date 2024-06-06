"use client"
import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";
import HeaderComponent from "@/components/header";
import SideBar from "../SideBar";


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
    return (
        <section className="w-full min-h-screen bg-white">
            <HeaderComponent />
            <SideBar />
            <article className="max-sm:p-2 p-10">
                {children}
            </article>
        </section>
    );
}

export default Dashboard;