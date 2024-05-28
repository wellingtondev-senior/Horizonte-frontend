import Dashboard from "../components/layout/Dashboard";

const PainelControlePage = () => {
    return (
        <Dashboard>
            <article className="w-full p-10 max-lg:p-4 flex flex-col items-center ">
                <div className="w-full flex items-center justify-center py-10">
                    <span className="text-[25px] text-white font-bold">Painel de Controle</span>
                </div>

            </article>
        </Dashboard>
    );
}

export default PainelControlePage;