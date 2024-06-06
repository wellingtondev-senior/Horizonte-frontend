"use client"
import useMenuState, { useMenuStateProps } from "@/store/useMenuState";
import { HiMenuAlt1 } from "react-icons/hi";
import { Search } from "./Search";
import { UserNav } from "./UserNav";
import { PainelComboBox } from "./PainelComboBox";

const HeaderComponent = () => {
    const menuState = useMenuState((state: useMenuStateProps) => state);

    return (
        <header className="fixed z-[1] w-full h-[50px]  bg-white flex items-center justify-between border-b-[1px] border-gray-100">
            <div className="w-full h-[50px] flex items-center justify-start gap-8">
                <button onClick={() => menuState.setVisible()} className="text-[20px] text-[#F98E1B] w-[60px] h-[50px] bg-transparent p-4"><HiMenuAlt1 /></button>
                <PainelComboBox/>
            </div>
            <div className="flex items-center justify-end gap-2 pr-4 border-l-[1px] border-gray-100 px-10">
                <Search/>
                <UserNav/>
            </div>
        </header>
    );
}

export default HeaderComponent;