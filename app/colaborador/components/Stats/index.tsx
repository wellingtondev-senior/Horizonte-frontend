import TotalDocumentos from "./TotalDocumentos";
import Vencimentos from "./Vencimento";

const Stats = () => {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <TotalDocumentos />
            <Vencimentos />
        </div>
    )


}

export default Stats;