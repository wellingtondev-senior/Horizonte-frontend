"use client"
import { ReactNode } from "react";
import Menu from "../Menu";
import useMenuState , { useMenutateProps }from "@/store/useMenuState";

interface DashboardProps {
    children: ReactNode
}



const Dashboard = ({ children }: DashboardProps) => {
    const {visible} = useMenuState((state:useMenutateProps)=>state);
    return (
        <main className="w-full h-[100vh] bg-gradient-to-r from-[#FACE08] to-[#F98E1B] flex justify-center">
            <Menu open={visible}/>
            <div>
                {children}
            </div>
        </main>
    );
}

export default Dashboard;