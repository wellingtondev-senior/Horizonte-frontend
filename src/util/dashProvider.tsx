import Header from "@/app/dash/components/Header";
import Navbar from "@/app/dash/components/Navbar";
import { ReactNode } from "react";
import { Toaster } from "sonner";

interface DashProviderProps {
    children: ReactNode
}


const DashProvider = ({ children }: DashProviderProps) => {
    return (
        <>
            <Header />
            <Navbar />
            <main className="w-full min-h-screen bg-[#20003B] pt-[50px] pl-[80px] pr-4">

                <div className=" w-full z-[999]  h-auto  flex items-start justify-center">
                    {children}
                </div>
                <Toaster className="bg-[#20003B] w-[400px] h-[100px] p-0" />

            </main>
        </>

    );
}

export default DashProvider;