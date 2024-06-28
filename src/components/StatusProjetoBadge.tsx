import { EstadoProjeto } from "@/enums/satusProjeto.enum";
import { Badge } from "./ui/badge";

interface tatusProjetoBadgeProps {
    status:EstadoProjeto
}



const StatusProjetoBadge = ({status}:tatusProjetoBadgeProps ) => {
    return (
        <Badge>
            {status}
        </Badge>
    );
}

export default StatusProjetoBadge;