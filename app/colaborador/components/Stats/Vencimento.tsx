import { Card, CardHeader } from "@/components/ui/card";
import CardState from "./CardState";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { CiCalendarDate } from "react-icons/ci";

const Vencimentos = () => {
    return (
       <CardState titulo={"Projetos com Prazo limite"} description={"Total de projetos pra vencer"} valor={"100"} icon={CiCalendarDate }/>
    );
}

export default Vencimentos;