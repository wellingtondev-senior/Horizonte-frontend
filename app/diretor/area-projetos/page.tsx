import Dashboard from "../components/layout/Dashboard";
import { NewArea } from "../components/NewArea";
import { TableProvedor } from "../components/TableProvedores";

const ProjetosPage = () => {
    return (
        <Dashboard>
            <h2 className="text-3xl font-bold tracking-tight">Área dos Projetos</h2>
            <article className="w-full  flex flex-col items-start gap-4 border border-gray-200 shadow-sm rounded-lg p-2">
                <div className="w-full flex items-center justify-between h-[60px] border-b-[1px] border-gray-200 px-2">
                    <div>
                        <span className="text-[18px] text-gray-700 font-bold ">Lista de todas áreas dos Projetos</span>
                    </div>
                    <div>
                      < NewArea/>
                    </div>
                </div>
                <div className="w-full">
                    <TableProvedor/>
                </div>
            </article>
        </Dashboard>
    );
}

export default ProjetosPage;