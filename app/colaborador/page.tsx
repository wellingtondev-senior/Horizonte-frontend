import { Button } from "@/components/ui/button";
import Dashboard from "./components/layout/Dashboard";
import { VscGraph } from "react-icons/vsc";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineHelpOutline } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";


const HomeColaborador = () => {
    return (
        <Dashboard>
            <article className="w-full p-10 max-lg:p-4 flex flex-col items-center ">
                <div className="w-full flex items-center justify-center py-10">
                    <span className="text-[25px] text-white font-bold">Dashboard Colaborador</span>
                </div>
                <div className="grid grid-cols-3  max-lg:grid-cols-2 gap-20 max-lg:gap-4 justify-center">
                    <Button className="w-[180px] h-[150px] rounded-[20px] bg-white flex flex-col items-center justify-center gap-4 text-gray-700 hover:text-gray-100">
                        <VscGraph className="w-10 h-10 "/>
                        <span className="text-[20px] ">Status</span>
                        <span className="text-[20px] ">dos Projetos</span>
                    </Button>
                    <Button className="w-[180px] h-[150px] rounded-[20px] bg-white flex flex-col items-center justify-center gap-4 text-gray-700 hover:text-gray-100">
                        <GrDocumentText className="w-10 h-10 "/>
                        <span className="text-[20px] "></span>
                        <span className="text-[20px] ">Ralatórios</span>
                    </Button>
                    <Button className="w-[180px] h-[150px] rounded-[20px] bg-white flex flex-col items-center justify-center gap-4 text-gray-700 hover:text-gray-100">
                        <FaUsers className="w-10 h-10 "/>
                        <span className="text-[20px] ">Consultores</span>
                        <span className="text-[20px] ">e Técnicos</span>
                    </Button>
                    <Button className="w-[180px] h-[150px] rounded-[20px] bg-white flex flex-col items-center justify-center gap-4 text-gray-700 hover:text-gray-100">
                        <GiSettingsKnobs  className="w-10 h-10 "/>
                        <span className="text-[20px] ">Painel</span>
                        <span className="text-[20px] ">de Controle</span>
                    </Button>
                    <Button className="w-[180px] h-[150px] rounded-[20px] bg-white flex flex-col items-center justify-center gap-4 text-gray-700 hover:text-gray-100">
                        <IoTimeOutline  className="w-10 h-10 "/>
                        <span className="text-[20px] ">Prazos</span>
                        <span className="text-[20px] ">de Validade</span>
                    </Button>
                    <Button className="w-[180px] h-[150px] rounded-[20px] bg-white flex flex-col items-center justify-center gap-4 text-gray-700 hover:text-gray-100">
                        <MdOutlineHelpOutline className="w-10 h-10 "/>
                        <span className="text-[20px] "></span>
                        <span className="text-[20px] ">Ajuda</span>
                    </Button>
                </div>
            </article>
        </Dashboard>

    );
}

export default HomeColaborador;