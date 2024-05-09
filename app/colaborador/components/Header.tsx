"use client"
import Logo from "@/components/Logo";
import useFlowSetStore from "@/store/useFlowSetState";

const Header = () => {
    const flowSetStore = useFlowSetStore((state) => state);
    return (
        <header className="fixed top-0 z-[98] w-full min-h-[40px] max-h-[40px] bg-[#08000E] flex items-center justify-between">
            <div className="z-[98] pl-[80px]">
            <Logo className="" />
            </div>
          
            <div className='z-[98] w-full flex items- justify-end  px-10 max-lg:px-2 max-lg:gap-2 gap-4'>
                
            </div>
        </header>
    );
}

export default Header;