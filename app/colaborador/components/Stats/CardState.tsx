import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ElementType } from "react";

interface ICardState {
    titulo: string;
    description: string;
    valor: string;
    icon: ElementType
}

const CardState = ({ titulo, description, valor, icon: Icon }: ICardState) => {
    return (
        <Card className="hover:border-[#454545]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    {titulo}
                </CardTitle>
                <Icon className="w-6 h-6 stroke-gray-600" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{valor}</div>
                <p className="text-xs text-muted-foreground">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
}

export default CardState;