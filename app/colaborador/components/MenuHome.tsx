"use client"
import { Button } from "@/components/ui/button";
import { VscGraph } from "react-icons/vsc";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineHelpOutline } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { ReactElement } from "react";
import { useRouter } from "next/navigation";

interface IMenuHome {
    id: number
    icon: ReactElement,
    titulo: string
    subtitulo: string
    path: string
}


const MENUHOME: IMenuHome[] = [
    {
        id: 1,
        icon: <VscGraph className="w-10 h-10 " />,
        titulo: "Status",
        subtitulo: "dos Projetos",
        path: "/status-projetos"
    },

    {
        id: 2,
        icon: <GrDocumentText className="w-10 h-10 " />,
        titulo: "",
        subtitulo: "Ralatórios",
        path: "/relatorios"
    },
    {
        id: 3,
        icon: <FaUsers className="w-10 h-10 " />,
        titulo: "Consultores",
        subtitulo: "e Técnicos",
        path: "/consultores"
    },
    {
        id: 4,
        icon: <GiSettingsKnobs className="w-10 h-10 " />,
        titulo: "Painel",
        subtitulo: "de Controle",
        path: "/painel-controle"
    },
    {
        id: 5,
        icon: <IoTimeOutline className="w-10 h-10 " />,
        titulo: "Prazos",
        subtitulo: "de Validade",
        path: "/prazos"
    },
    {
        id: 6,
        icon: <MdOutlineHelpOutline className="w-10 h-10 " />,
        titulo: "",
        subtitulo: "Ajuda",
        path: "/ajuda"
    },
]

const MenuHome = () => {
   const router = useRouter();
    const push = (path:string)=>{
        router.push(path)
    }
    return (
        <div className="grid grid-cols-3  max-lg:grid-cols-2 gap-20 max-lg:gap-4 justify-center">
            {
                MENUHOME.map((e) => (
                    <Button key={e.id} onClick={()=>push(e.path)} className="w-[180px] h-[150px] rounded-[20px] bg-white flex flex-col items-center justify-center gap-4 text-gray-700 hover:text-gray-100">
                        {e.icon}
                        <span className="text-[20px] ">{e.titulo}</span>
                        <span className="text-[20px] ">{e.subtitulo}</span>
                    </Button>
                ))
            }
        </div>
    );
}

export default MenuHome;