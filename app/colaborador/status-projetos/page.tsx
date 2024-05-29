import { Button } from "@/components/ui/button";
import MenuHome from "../components/MenuHome";
import Dashboard from "../components/layout/Dashboard";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



const StatusPage = () => {
    return (
        <Dashboard>
            <article className="w-full p-10 max-lg:p-4 flex flex-col items-center ">
                <div className="w-full flex items-center justify-center py-10">
                    <span className="text-[25px] text-white font-bold">Status do Projeto</span>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className=" border-none">
                        <AccordionTrigger className="w-full" >
                            <div className="w-full flex items-center justify-between bg-gray-800 rounded-full py-4 px-4">
                                <div className="w-full flex items-center justify-start">
                                    <span className="font-bold text-white text-[16px] no-underline hover:no-underline">Projeto numero cinco</span>
                                </div>
                                <div className=" flex items-center justify-end gap-2 w-[100px]">
                                    <span className="font-bold text-white text-[16px]">Status:</span>
                                    <div className="w-6 h-6 rounded-full bg-green-500"></div>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </article>
        </Dashboard>
    );
}

export default StatusPage;