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
                <div className=" w-full border border-gray-200 shadow-sm rounded-lg p-2 grid  grid-cols-2 max-md:grid-cols-1 gap-4">
                    <div className="bg-gray-100 rounded-lg h-[50px] p-4 flex items-center justify-between">
                        <span className="font-bold text-[16px] text-gray-600">Nome do Projeto</span>
                        <Badge className="rounded-full bg-green-200 border-[1px] border-green-700 text-green-900 hover:text-white text-[12px]">Projeto Andamento</Badge>
                    </div>
                    <div className="bg-gray-100 rounded-lg h-[50px] p-4 flex items-center justify-between">
                        <span className="font-bold text-[16px] text-gray-600">Nome do Projeto</span>
                        <Badge className="rounded-full bg-green-200 border-[1px] border-green-700 text-green-900 hover:text-white text-[12px]">Projeto Andamento</Badge>
                    </div>
                </div>
                {/* <Accordion type="single" collapsible className="w-full space-y-2">
                    {
                        PROJETOS.map((e, i) => (
                            <AccordionItem key={e.projeto+`-`+i} value={`item-${i}`} className=" border-none ">
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
                                    <div className="w-full p-4 bg-white  rounded-[30px] flex flex-col gap-2 mt-4">
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
                </Accordion> */}
            </article>
        </Dashboard>
    );
}

export default StatusPage;