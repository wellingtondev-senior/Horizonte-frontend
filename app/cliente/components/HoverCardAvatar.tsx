import { CalendarDays } from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { MdLogout } from "react-icons/md"



const HoverCardAvatar = () => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button className=" w-[60px] h-[60px] flex items-center justify-center px-2 py-2 rounded-full bg-gray-50 shadow-lg gap-2  ">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    {/* <span className="text-white font-semibold ">wrm.net@gmail.com</span>
                    <Button variant="ghost" className=""><MdLogout className="fill-white h-6 w-6"/></Button> */}
                </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">

                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">Paulo Fernando</h4>
                        <div className="text-sm flex flex-col gap-2">
                            <div className="flex items-center pt-2">
                                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                                <span className="text-xs text-muted-foreground">
                                    Joined December 2021
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <span> Gerente de vendas</span>
                                <span>/</span>
                                <span> Nome da Empresa</span>

                            </div>
                            <div className="pt-4">
                                <Button className="flex gap-2">
                                    <MdLogout/>
                                    <span>Sair</span>
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}

export default HoverCardAvatar;