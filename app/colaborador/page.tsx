import MenuHome from "./components/MenuHome";
import Dashboard from "./components/layout/Dashboard";



const HomeColaborador = () => {
    
    return (
        <Dashboard>
            <article className="w-full p-10 max-lg:p-4 flex flex-col items-center ">
                <div className="w-full flex items-center justify-center py-10">
                    <span className="text-[25px] text-white font-bold">Dashboard Colaborador</span>
                </div>
                <MenuHome />
            </article>
        </Dashboard>

    );
}

export default HomeColaborador;