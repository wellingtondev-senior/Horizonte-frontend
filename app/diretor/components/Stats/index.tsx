import { Card } from "@/components/ui/card";
import { TableProjeto } from "../TableProjetos";
import StateStatusProjeto from "./StateStatusProjeto";

const Stats = () => {


    return (
        <div className="w-full h-auto flex items-center justify-between gap-4">
            <StateStatusProjeto />
            <Card className="w-full">
                <TableProjeto />
            </Card>
        </div>
    );
}

export default Stats;