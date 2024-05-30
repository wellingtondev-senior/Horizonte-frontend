"use client"
import { Button } from "@/components/ui/button";
import Dashboard from "../components/layout/Dashboard";
import { useRouter } from "next/navigation";

const PainelControlePage = () => {

    const router = useRouter();
    const push = (path:string)=>{
        router.push(`/colaborador/painel-controle/${path}`)
    }
    return (
        <Dashboard>
            <article className="w-full p-10 max-lg:p-4 flex flex-col items-center ">
                <div className="w-full flex items-center justify-center py-10">
                    <span className="text-[25px] text-white font-bold">Painel de Controle</span>
                </div>
                <div className="grid grid-cols-2 w-[563px] max-lg:w-full gap-[1px] max-lg:grid-cols-1">
                   <Button onClick={()=>push("licenciamento-ambiental")} className="h-[50px] bg-[#77716C] rounded-none rounded-tl-[10px] max-lg:rounded-tr-[10px]">Licenciamento Ambiental</Button>
                   <Button className="h-[50px] bg-[#77716C] rounded-none rounded-tr-[10px] max-lg:rounded-none">Gestão Ambiental de Obras</Button>
                   <Button className="h-[50px] bg-[#77716C] rounded-none ">Resíduos Sólidos</Button>
                   <Button className="h-[50px] bg-[#77716C] rounded-none ">Projetos e Estudos Ambientais</Button>
                   <Button className="h-[50px] bg-[#77716C] rounded-none ">Cadastro Técnico Federal (IBAMA)</Button>
                   <Button className="h-[50px] bg-[#77716C] rounded-none ">Regularização Ambiental Rural</Button>
                   <Button className="h-[50px] bg-[#77716C] rounded-none ">Compensação Ambiental</Button>
                   <Button className="h-[50px] bg-[#77716C] rounded-none ">Educação Ambiental e Sustentabilidades</Button>
                   <Button className="h-[50px] bg-[#77716C] rounded-none ">Áreas Contaminadas</Button>
                   <Button className="h-[50px] bg-[#77716C] rounded-none ">Produtos Controlados</Button>
                   <Button className="h-[50px] bg-[#77716C] rounded-none rounded-bl-[10px] max-lg:rounded-none">Direito Ambiental</Button>
                   <Button className="h-[50px] bg-[#77716C] rounded-none rounded-br-[10px] max-lg:rounded-bl-[10px]">Assuntos Regulatórios</Button>
                </div>
            </article>
        </Dashboard>
    );
}

export default PainelControlePage;