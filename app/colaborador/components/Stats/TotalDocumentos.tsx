import { Card, CardHeader } from "@/components/ui/card";
import CardState from "./CardState";
import { HiOutlineDocumentReport } from "react-icons/hi";

const TotalDocumentos = () => {
    return (
       <CardState titulo={"Total de Projetos"} description={"total de projetos dentro do prazo"} valor={"100"} icon={HiOutlineDocumentReport}/>
    );
}

export default TotalDocumentos;