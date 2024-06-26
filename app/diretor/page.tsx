import { Card } from "@/components/ui/card";
import Dashboard from "./components/layout/Dashboard";
import StateStatusProjeto from "./components/Stats/StateStatusProjeto";
import { TableAreaTotalProjeto } from "./components/TableAreaTotalProjeto";
import { TableProjeto } from "./components/TableProjeto";


const HomeDiretor = () => {
    return (
        <Dashboard>
            <h2 className="text-3xl font-bold tracking-tight">Resumo Geral</h2>
            <article className="w-full flex flex-col items-start justify-between gap-4">
                <div className="w-full max-h-[355px] flex  max-lg:flex-col items-start justify-between gap-4">
                    <StateStatusProjeto />
                    <Card className="w-full max-h-[355px]">
                        <TableAreaTotalProjeto />
                    </Card>
                </div>
                <div className="w-full">
                    <TableProjeto />
                </div>
            </article>


        </Dashboard>

    );
}

export default HomeDiretor;