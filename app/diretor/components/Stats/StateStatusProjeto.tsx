import ChartStatusProjeto from "@/components/ChartStatusProjeto";
import { Card } from "@/components/ui/card";

const StateStatusProjeto = () => {
    return (
        <Card className="p-4">
            <span className="font-bold text-[16px]">Status Projentos</span>
            <ChartStatusProjeto/>
        </Card>
    );
}

export default StateStatusProjeto;
