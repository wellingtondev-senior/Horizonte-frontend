import { Button } from "@/components/ui/button";
import Dashboard from "../components/layout/Dashboard";
import { EstadoProjeto } from "@/enums/satusProjeto.enum";
import { FaGoogleDrive } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";

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
            <h2 className="text-3xl font-bold tracking-tight">Documento Upload</h2>

            <article className="w-full  flex flex-col items-start gap-4 border border-gray-200 shadow-sm rounded-lg p-2">
                <div className="w-full flex items-center justify-between h-[60px] border-b-[1px] border-gray-200 px-2">
                    <div>
                        <span className="text-[18px] text-gray-700 font-bold">Lista de Documentos</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" className="p-0 gap-2 px-10">
                            <FaDropbox className="w-4 h-4 fill-gray-700" />
                            <span>DropBox</span>
                        </Button>
                        <Button variant="outline" className="p-0 gap-2 px-10">
                            <FaGoogleDrive className="w-4 h-4 fill-gray-700" />
                            <span>GDriver</span>
                        </Button>
                    </div>
                </div>



            </article>
        </Dashboard>
    );
}

export default StatusPage;