"use client"
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
import { useContext, useEffect } from "react"
import { AuthContext } from "@/context/auth.context"

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];



const HoverCardAvatar = () => {

    const authLogin = useContext(AuthContext);

    const formatDate = (data: string) => {
        const currentDate = new Date(data);
        // Obtém o mês e o ano da data atual
        const currentMonth = currentDate.getMonth(); // Retorna um número entre 0 (Janeiro) e 11 (Dezembro)
        const currentYear = currentDate.getFullYear(); // Retorna o ano atual
        // Formata a string no formato desejado
        const formattedDate = `Joined ${months[currentMonth]} ${currentYear}`;
        return formattedDate
    }

    useEffect(() => {
        if (authLogin.isLogger) {
            console.log(authLogin.isUser)
        }

    }, [authLogin.isLogger])

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
                        <h4 className="text-sm font-semibold">{authLogin.isUser?.user[0].nome}</h4>
                        <div className="text-sm flex flex-col gap-2">
                            <div className="flex items-center pt-2">
                                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                                <span className="text-xs text-muted-foreground">
                                    {formatDate(authLogin.isUser?.create_at!)}
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <span>{authLogin.isUser?.user[0].cargo}</span>
                                <span>/</span>
                                <span>{authLogin.isUser?.user[0].empresa}</span>

                            </div>
                            <div className="pt-4">
                                <Button variant="outline" className="flex gap-2" onClick={authLogin.isLogout}>
                                    <MdLogout />
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