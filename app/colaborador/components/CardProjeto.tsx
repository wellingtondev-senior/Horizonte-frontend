import StatusProjetoBadge from "@/components/StatusProjetoBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EstadoProjeto } from "@/enums/satusProjeto.enum";
import { CiMenuKebab } from "react-icons/ci";

const CardProjeto = () => {
    return (
        <div className="bg-white border border-gray-50 shadow-sm rounded-lg h-auto p-4 flex flex-col gap-4">
            <div className="flex items-center justify-between ">
                <div className=" flex flex-col">
                    <span className="font-bold text-[14px] text-gray-600">Nome do Projetos</span>
                    <span className="text-[14px] text-gray-400">Area do Projeto</span>
                </div>
                <Button variant="ghost" className="p-0">
                    <CiMenuKebab className="w-6 h-6 fill-gray-800 stoke-gray-700" />
                </Button>
            </div>
            <div className="flex max-lg:flex-col  max-lg:items-start items-center justify-between">
                <div className="flex gap-2 text-[14px]">
                    <span className="font-bold">status:</span>
                    <StatusProjetoBadge status={EstadoProjeto.ATRIBUIDO} />
                </div>
                <div className="flex gap-2 text-[14px]">
                    <span className="font-bold">Documento:</span>
                    <span className="text-gray-500">Licenciamento Ambiental</span>
                </div>
                <div className="flex gap-2 text-[14px]">
                    <span className="font-bold">validade:</span>
                    <span className="text-green-500 font-semibold">24/09/24</span>
                </div>
                <div className="flex gap-2 text-[14px]">
                    <span className="font-bold">cliente:</span>
                    <span className="text-gray-500">Empresa Ambiental</span>
                </div>
            </div>
        </div>
    );
}

export default CardProjeto;