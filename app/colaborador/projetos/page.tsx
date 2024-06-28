import { Button } from "@/components/ui/button";
import Dashboard from "../components/layout/Dashboard";
import { EstadoProjeto } from "@/enums/satusProjeto.enum";
import PieChart from "../components/PieChart";
import CardProjeto from "../components/CardProjeto";



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
                        <span className="text-[18px] text-gray-700 font-bold">Lista de Projetos</span>
                    </div>
                    <div>
                        <Button variant="outline">Novo Projeto</Button>
                    </div>
                </div>
                <div className=" w-full flex max-md:flex-col items-start justify-between gap-4">
                    <div className="w-[30%] max-md:w-full max-md:h-[400px] h-full   border border-gray-200 shadow-sm rounded-lg p-2 flex flex-col gap-[5px] ">
                        <span className="font-bold text-[16px] text-gray-700">Demonstrativo gráfico do status do projeto</span>
                        <span className="text-[14px] text-gray-400">Um resumo visual do progresso e estado atual de um projeto.</span>
                        <div className="mt-10">
                            <PieChart dataPie={[4, 25, 34]} />
                        </div>
                    </div>
                    <div className="w-[70%] max-md:w-full border max-h-screen h-auto overflow-y-auto border-gray-200 shadow-sm rounded-lg p-2 flex flex-col gap-4">
                        <CardProjeto/>
                        <CardProjeto/>
                        <CardProjeto/>
                        <CardProjeto/>
                    </div>
                </div>

            </article>
        </Dashboard>
    );
}

export default StatusPage;