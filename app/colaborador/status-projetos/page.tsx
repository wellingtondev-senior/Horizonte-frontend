import { Button } from "@/components/ui/button";
import MenuHome from "../components/MenuHome";
import Dashboard from "../components/layout/Dashboard";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { EstadoProjeto } from "@/enums/satusProjeto.enum";



interface IProjetos {
    projeto: string
    status: EstadoProjeto
    inicioData: string
    estimativaTermino: string
    setor: string
    responsavel: string
}

const PROJETOS: IProjetos[] = [
    {
        projeto: "Projeto de Teste de Desenvolvimento",
        status: EstadoProjeto.ANDAMENTO,
        inicioData: "29/05/24",
        estimativaTermino: "29/05/24",
        setor: "Setor",
        responsavel: "Wellington Ramos"

    }
]




const StatusPage = () => {

    const statusNome = (status: EstadoProjeto) => {
        switch (status) {
            case "ANDAMENTO":
                return "Projeto em Andamento"
            case "ATRIBUIDO":
                return "Projeto Atribuido"
            default:
                return "Projeto Status indefinido"
        }
    }
    return (
        <Dashboard>
            <article className="w-full p-10 max-lg:p-4 flex flex-col items-center ">
                <div className="w-full flex items-center justify-center py-10">
                    <span className="text-[25px] text-white font-bold">Status do Projeto</span>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {
                        PROJETOS.map((e) => (
                            <AccordionItem key={e.projeto} value="item-1" className=" border-none ">
                                <AccordionTrigger className="w-full  p-0 rounded-full pr-2 border-[3px] border-gray-800 " style={{ backgroundColor: e.status === "ANDAMENTO" ? "#19FC6C" : e.status === "ATRIBUIDO" ? "#FCF819" : "#1983FC" }}>
                                    <div className="w-full flex items-center justify-between bg-gray-800 rounded-full py-4 px-4">
                                        <div className="w-full flex items-center justify-start">
                                            <span className="font-bold text-white text-[16px] no-underline hover:no-underline">
                                                {e.projeto}
                                            </span>
                                        </div>
                                        <div className=" flex items-center justify-end gap-2 w-[250px]">
                                            <span className="font-bold text-white text-[16px]">{statusNome(e.status)}:</span>

                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="w-full p-4 bg-white  rounded-[30px] flex flex-col gap-2">
                                        <div className="flex gap-2">
                                            <span className="font-bold text-gray-800">Data de inicio do projeto:</span>
                                            <span>{e.inicioData}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="font-bold text-gray-800">Estimativa de término:</span>
                                            <span>{e.estimativaTermino}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="font-bold text-gray-800">Setor do projeto:</span>
                                            <span>{e.setor}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="font-bold text-gray-800">responsavel Pelo projeto:</span>
                                            <span>{e.responsavel}</span>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </article>
        </Dashboard>
    );
}

export default StatusPage;