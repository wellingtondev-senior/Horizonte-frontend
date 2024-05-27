import Dashboard from "../components/layout/Dashboard";
import { ListaClientes } from "../components/tables/clientes";
import { ListaColaboradores } from "../components/tables/colaboradores";
import { FaUsersGear } from "react-icons/fa6";


const ClientePage = () => {
    return (
        <Dashboard>
            <article className="w-full p-10 max-lg:p-4 flex flex-col items-center ">

                <div className="w-full rounded-lg shadow-lg bg-white p-4 mt-[70px]">
                    <div className="flex items-center justify-start gap-4">
                        <FaUsersGear className="w-10 h-10 fill-gray-400"/>
                        <span className="text-[25px] font-bold text-gray-500">Clientes</span>
                    </div>
                    <ListaClientes/>
                </div>
            </article>
        </Dashboard>
    );
}

export default ClientePage;