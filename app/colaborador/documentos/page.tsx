"use client"
import Dashboard from "../components/layout/Dashboard";
import { EstadoProjeto } from "@/enums/satusProjeto.enum";
import { NewDocumentoDialog } from "../components/NewDocumentoDialog";
import { Card } from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { TableDocumentos } from "../components/TableDocumentos";
import { useDocumentosFindAll } from "@/query/useQueryDocumentoUpload";
import { useState } from "react";




const DocumentoPage = () => {
    const documentosFindAll = useDocumentosFindAll()
    
 
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
                <Tabs defaultValue="todos" className="w-full">
                    <TabsList className="grid w-[450px] grid-cols-3">
                        <TabsTrigger value="todos">Todos</TabsTrigger>
                        <TabsTrigger value="firebase">Firebase</TabsTrigger>
                        <TabsTrigger value="gdriver">Google Driver</TabsTrigger>
                    </TabsList>
                    <TabsContent value="todos">
                        <Card>
                            <TableDocumentos filter="todos"  response={documentosFindAll}/>
                        </Card>
                    </TabsContent>
                    <TabsContent value="firebase">
                        <Card>
                            <TableDocumentos filter="firebase" response={documentosFindAll}/>
                        </Card>
                    </TabsContent>
                    <TabsContent value="gdriver">
                        <Card>
                            <TableDocumentos filter="gdriver" response={documentosFindAll}/>
                        </Card>
                    </TabsContent>
                </Tabs>


            </article>
        </Dashboard>
    );
}

export default DocumentoPage;