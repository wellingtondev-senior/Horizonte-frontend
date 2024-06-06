import { ReactElement } from 'react';
import { FaUsers } from 'react-icons/fa';
import { GiSettingsKnobs } from 'react-icons/gi';
import { GrDocumentText } from 'react-icons/gr';
import { IoTimeOutline } from 'react-icons/io5';
import { IconType } from 'react-icons/lib';
import { MdOutlineHelpOutline } from 'react-icons/md';
import { VscGraph } from 'react-icons/vsc';

export type menuColaboradorType = {
    item: string,
    data: SubMenu[]
}

export type SubMenu = {
    label: string,
    page: string
    icon:IconType
}
                {/* 
                <Menu.Subitems iconSize={"sm"} color={"white"} label={"Ajuda"} page={"/colaborador/ajuda"} icon={MdOutlineHelpOutline}/>  */}

export const menuColaborador = (item:string)=>{
 const data:menuColaboradorType[] = [{
    item: "dashboard",
    data: [
        {
            label: "Projeto",
            page: "/colaborador/projetos",
            icon:VscGraph
        },   
        {
            label: "Relatórios",
            page: "/colaborador/relatorios",
            icon:GrDocumentText
        },
        {
            label: "Consultores e Técnicos",
            page: "/colaborador/consultores",
            icon:FaUsers
        },
        {
            label: "Painel de Controle",
            page: "/colaborador/painel-controle",
            icon:GiSettingsKnobs
        },
        {
            label: "Prazos de Validade",
            page: "/colaborador/prazos",
            icon:IoTimeOutline
        },
        {
            label: "Ajuda",
            page: "/colaborador/ajuda",
            icon:MdOutlineHelpOutline
        },

    ]
   

}]
const filter  = data.filter(element=>element.item == item)
return  filter[0]
}

