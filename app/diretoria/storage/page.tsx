import { Button } from "@/components/ui/button";
import Dashboard from "../components/layout/Dashboard";
import { BsDatabaseAdd } from "react-icons/bs";

const HomeDiretor = () => {
    return (
        <Dashboard>
            <h2 className="text-3xl font-bold tracking-tight">Provedores Storage</h2>
            <article className="w-full  flex flex-col items-start gap-4 border border-gray-200 shadow-sm rounded-lg p-2">
                <div className="w-full flex items-center justify-between h-[60px] border-b-[1px] border-gray-200 px-2">
                    <div>
                        <span className="text-[18px] text-gray-700 font-bold ">Lista de todos os Provedores</span>
                    </div>
                    <div>
                        <Button variant="outline" className="p-0 px-4 h-[40px] gap-2">
                            <BsDatabaseAdd className="w-4 h-4"/>
                            <span>Criar um Novo</span>
                        </Button>
                    </div>
                </div>
                <div>
                    dd
                </div>
            </article>
        </Dashboard>
    );
}

export default HomeDiretor;