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
import useAccount from "@/hook/useAccount"

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];



const HoverCardAvatar = () => {

    const account = useAccount();

    const formatDate = (data: string) => {
        const currentDate = new Date(data);
        // Obtém o mês e o ano da data atual
        const currentMonth = currentDate.getMonth(); // Retorna um número entre 0 (Janeiro) e 11 (Dezembro)
        const currentYear = currentDate.getFullYear(); // Retorna o ano atual
        // Formata a string no formato desejado
        const formattedDate = `Joined ${months[currentMonth]} ${currentYear}`;
        return formattedDate
    }

   

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
                
            </HoverCardContent>
        </HoverCard>
    );
}

export default HoverCardAvatar;