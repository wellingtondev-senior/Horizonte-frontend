import Dashboard from "../components/layout/Dashboard";
import { ListaColaboradores } from "../components/tables/colaboradores";

const ColaboradoresPage = () => {
    return (
        <Dashboard>
            <article className="w-full p-10 max-lg:p-4 flex flex-col items-center ">
                <div className="w-full flex items-center justify-center py-10">
                    <span className="text-[25px] text-white font-bold">Colaboradores</span>
                </div>
                <div className="w-full rounded-lg shadow-lg bg-white p-4">
                <ListaColaboradores/>
                </div>
            </article>
        </Dashboard>
    );
}

export default ColaboradoresPage;