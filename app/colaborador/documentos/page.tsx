import { Button } from "@/components/ui/button";
import Dashboard from "../components/layout/Dashboard";
import { EstadoProjeto } from "@/enums/satusProjeto.enum";
import { NewDocumentoDialog } from "../components/NewDocumentoDialog";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

interface IProjetos {
    projeto: string
    status: EstadoProjeto
    inicioData: string
    estimativaTermino: string
    setor: string
    responsavel: string
}

const PROJETOS: IProjetos[] = [
    {
        projeto: "Projeto de Teste de Desenvolvimento",
        status: EstadoProjeto.ANDAMENTO,
        inicioData: "29/05/24",
        estimativaTermino: "29/05/24",
        setor: "Setor",
        responsavel: "Wellington Ramos"

    },
    {
        projeto: "Projeto de Teste de Desenvolvimento",
        status: EstadoProjeto.ATRIBUIDO,
        inicioData: "29/05/24",
        estimativaTermino: "29/05/24",
        setor: "Setor",
        responsavel: "Wellington Ramos"

    }
]




const StatusPage = () => {

    const statusNome = (status: EstadoProjeto) => {
        switch (status) {
            case "ANDAMENTO":
                return "Projeto em Andamento"
            case "ATRIBUIDO":
                return "Projeto Atribuido"
            default:
                return "Projeto Status indefinido"
        }
    }
    return (
        <Dashboard>
            <h2 className="text-3xl font-bold tracking-tight">Gerenciador de Documento</h2>

            <article className="w-full  flex flex-col items-start gap-4 border border-gray-200 shadow-sm rounded-lg p-2">
                <div className="w-full flex items-center justify-between h-[60px] border-b-[1px] border-gray-200 px-2">
                    <div>
                        <span className="text-[18px] text-gray-700 font-bold">Lista de todos os Documentos</span>
                    </div>
                    <div>
                        <NewDocumentoDialog />
                    </div>
                </div>
                <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid w-[450px] grid-cols-3">
                        <TabsTrigger value="todos">Todos</TabsTrigger>
                        <TabsTrigger value="firebase">Firebase</TabsTrigger>
                        <TabsTrigger value="gdriver">Google Driver</TabsTrigger>
                    </TabsList>
                    <TabsContent value="todos">
                        <Card>
                            <CardHeader>
                                <CardTitle>Todos</CardTitle>
                                <CardDescription>
                                    Todos.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                               
                            </CardContent>
                            <CardFooter>
                                <Button></Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="firebase">
                        <Card>
                            <CardHeader>
                                <CardTitle>Firebase</CardTitle>
                                <CardDescription>
                                   Firebase
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                
                            </CardContent>
                            <CardFooter>
                                <Button></Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="gdriver">
                        <Card>
                            <CardHeader>
                                <CardTitle>Google Driver</CardTitle>
                                <CardDescription>
                                   Google Driver
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                
                            </CardContent>
                            <CardFooter>
                                <Button></Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>


            </article>
        </Dashboard>
    );
}

export default StatusPage;