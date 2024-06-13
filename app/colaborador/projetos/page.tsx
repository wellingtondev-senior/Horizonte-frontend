import { Button } from "@/components/ui/button";
import Dashboard from "../components/layout/Dashboard";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { EstadoProjeto } from "@/enums/satusProjeto.enum";
import { Badge } from "@/components/ui/badge";
import PieChart from "../components/PieChart";



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

    },
    {
        projeto: "Projeto de Teste de Desenvolvimento",
        status: EstadoProjeto.ATRIBUIDO,
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
            <h2 className="text-3xl font-bold tracking-tight">Gerenciador de Projetos</h2>

            <article className="w-full  flex flex-col items-start gap-4 border border-gray-200 shadow-sm rounded-lg p-2">
                <div className="w-full flex items-center justify-between h-[60px] border-b-[1px] border-gray-200 px-2">
                    <div>
                        <span className="text-[18px] text-gray-700 font-bold">Projetos</span>
                    </div>
                    <div>
                        <Button variant="outline">Novo Projeto</Button>
                    </div>
                </div>
                <div className=" w-full flex items-start justify-between gap-4">
                    <div className="w-[50%] h-full   border border-gray-200 shadow-sm rounded-lg p-2">
                        <PieChart dataPie={[4, 25, 34]} />
                    </div>
                    <div className="w-[50%] max-md:w-full border max-h-screen h-auto overflow-y-auto border-gray-200 shadow-sm rounded-lg p-2 flex flex-col gap-4">
                        <div className="bg-gray-100 rounded-lg h-[50px] p-4 flex items-center justify-between">
                            <span className="font-bold text-[16px] text-gray-600">Nome do Projeto</span>
                            <Badge className="rounded-full bg-green-200 border-[1px] border-green-700 text-green-900 hover:text-white text-[12px]">Projeto Andamento</Badge>
                        </div>
                        <div className="bg-gray-100 rounded-lg h-[50px] p-4 flex items-center justify-between">
                            <span className="font-bold text-[16px] text-gray-600">Nome do Projeto</span>
                            <Badge className="rounded-full bg-green-200 border-[1px] border-green-700 text-green-900 hover:text-white text-[12px]">Projeto Andamento</Badge>
                        </div>
                        <div className="bg-gray-100 rounded-lg h-[50px] p-4 flex items-center justify-between">
                            <span className="font-bold text-[16px] text-gray-600">Nome do Projeto</span>
                            <Badge className="rounded-full bg-green-200 border-[1px] border-green-700 text-green-900 hover:text-white text-[12px]">Projeto Andamento</Badge>
                        </div>
                        <div className="bg-gray-100 rounded-lg h-[50px] p-4 flex items-center justify-between">
                            <span className="font-bold text-[16px] text-gray-600">Nome do Projeto</span>
                            <Badge className="rounded-full bg-green-200 border-[1px] border-green-700 text-green-900 hover:text-white text-[12px]">Projeto Andamento</Badge>
                        </div>
                        <div className="bg-gray-100 rounded-lg h-[50px] p-4 flex items-center justify-between">
                            <span className="font-bold text-[16px] text-gray-600">Nome do Projeto</span>
                            <Badge className="rounded-full bg-green-200 border-[1px] border-green-700 text-green-900 hover:text-white text-[12px]">Projeto Andamento</Badge>
                        </div>
                        <div className="bg-gray-100 rounded-lg h-[50px] p-4 flex items-center justify-between">
                            <span className="font-bold text-[16px] text-gray-600">Nome do Projeto</span>
                            <Badge className="rounded-full bg-green-200 border-[1px] border-green-700 text-green-900 hover:text-white text-[12px]">Projeto Andamento</Badge>
                        </div>
                        <div className="bg-gray-100 rounded-lg h-[50px] p-4 flex items-center justify-between">
                            <span className="font-bold text-[16px] text-gray-600">Nome do Projeto</span>
                            <Badge className="rounded-full bg-green-200 border-[1px] border-green-700 text-green-900 hover:text-white text-[12px]">Projeto Andamento</Badge>
                        </div>
                    </div>
                </div>

            </article>
        </Dashboard>
    );
}

export default StatusPage;