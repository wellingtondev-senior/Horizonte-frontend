import { Card } from "@/components/ui/card";
import Dashboard from "./components/layout/Dashboard";
import StateStatusProjeto from "./components/Stats/StateStatusProjeto";
import { TableProjeto } from "./components/TableProjetos";


const HomeDiretor = () => {
    return (
        <Dashboard>
            <h2 className="text-3xl font-bold tracking-tight">Resumo Geral</h2>
            <article className="w-full flex  max-lg:flex-col items-start justify-between gap-4">
            <StateStatusProjeto />
            <Card className="w-full h-[355px] overflow-y-auto">
                <TableProjeto />
            </Card>
            </article>
          
        
        </Dashboard>

    );
}

export default HomeDiretor;