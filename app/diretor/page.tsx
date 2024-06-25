import Stats from "./components/Stats";
import Dashboard from "./components/layout/Dashboard";


const HomeDiretor = () => {
    return (
        <Dashboard>
            <h2 className="text-3xl font-bold tracking-tight">Resumo Geral</h2>
            <Stats/>
        </Dashboard>

    );
}

export default HomeDiretor;