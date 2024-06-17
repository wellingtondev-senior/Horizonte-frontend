"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { AuthContext } from "@/context/auth.context"
import { useColaboradorCreate } from "@/query/useColaborador"
import { ColaboradorRequest } from "@/types/colaborador"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { FaUserPlus } from "react-icons/fa"


const ColaboradoresNewPage = () => {
    const colaboradorCreate = useColaboradorCreate();
    const authContext = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<ColaboradorRequest>()

    const onSubmit = (data: ColaboradorRequest) => {
        const { nome, cargo, email, telefone } = data
        colaboradorCreate.mutate({ nome, cargo, email, telefone, diretorId: authContext.isUser?.user[0].id })
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">
                    <FaUserPlus />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[350px] mr-4">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Novo Colaborador</h4>
                        <p className="text-sm text-muted-foreground">
                            Cadastre um novo colaborador.
                        </p>
                    </div>
                    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-2">
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="nome">Nome</Label>
                                <Input
                                    {...register("nome", { required: true })}
                                    id="nome"
                                    placeholder="nome completo"
                                    className="col-span-2 h-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="cargo">Cargo</Label>
                                <Input
                                    {...register("cargo", { required: true })}
                                    id="cargo"
                                    placeholder="cargo"
                                    className="col-span-2 h-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    {...register("email", { required: true })}
                                    id="email"
                                    placeholder="email"
                                    className="col-span-2 h-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="telefone">Telefone</Label>
                                <Input
                                    {...register("telefone", { required: true })}
                                    id="telefone"
                                    placeholder="telefone"
                                    className="col-span-2 h-8"
                                />
                            </div>

                        </div>
                        <div className="items-center mt-10 w-full">
                            <Button type="submit" className="w-full">Enviar</Button>
                        </div>
                    </form>
                </div>
            </PopoverContent>
        </Popover>
    );
}

export default ColaboradoresNewPage;