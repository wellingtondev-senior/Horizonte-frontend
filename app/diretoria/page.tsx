import Dashboard from "./components/layout/Dashboard";
import Stats from "./components/Stats";


const HomeDiretor = () => {
    return (
        <Dashboard>
            <article className="w-full p-10 max-lg:p-4 flex flex-col items-center ">
                <div className="w-full flex items-center justify-center py-10">
                    <span className="text-[25px] text-white font-bold">Dashboard Diretor</span>
                </div>
               <div className="w-full">
                <Stats/>
               </div>
            </article>
        </Dashboard>

    );
}

export default HomeDiretor;