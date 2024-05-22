import { Button } from "@/components/ui/button";
import Dashboard from "./components/layout/Dashboard";
import { VscGraph } from "react-icons/vsc";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineHelpOutline } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { ListaColaboradores } from "./components/tables/colaboradores";


const DashPage = () => {
    return (
        <Dashboard>
            <article className="w-full p-10 max-lg:p-4 flex flex-col items-center ">
                <div className="w-full flex items-center justify-center py-10">
                    <span className="text-[25px] text-white font-bold">Dashboard Diretor</span>
                </div>
               
            </article>
        </Dashboard>

    );
}

export default DashPage;