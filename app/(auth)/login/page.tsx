import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

const SignInPage = () => {
    return (

        <section className="w-full min-h-screen fixed overflow-y-auto">
            <div className="w-full h-[50vh] bg-gradient-to-r from-[#FACE08] to-[#F98E1B] flex justify-center">
                <div className="absolute top-[15vh] w-[400px] max-lg:w-[300px] h-auto bg-white rounded-lg shadow-lg">
                    <Logo className={"w-[300px]"} imageName={""} />
                    <form className="px-10 py-10 flex flex-col gap-10">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between border border-gray-200 rounded-lg">
                                <div className="w-[40px] h-[40px] bg-gray-400 rounded-l-lg flex items-center justify-center"><FaUser /></div>
                                <Input
                                    type="email"
                                    placeholder="email@email.com"
                                    className="border-none"
                                />
                            </div>
                            <div className="flex items-center justify-between border border-gray-200 rounded-lg">
                                <div className="w-[40px] h-[40px] bg-gray-400 rounded-l-lg flex items-center justify-center"><FaKey /></div>
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    className="border-none"
                                />
                            </div>
                        </div>
                        <Button className="w-full bg-[#F98E1B]">
                            Efetuar Login
                        </Button>
                        <div className="flex items-center justify-between">
                            <Link href={"/recuperar-senha"} className="text-[11px] text-[#F98E1B]">Recuperar a senha</Link>
                            <Link href={"/cliente/registro"} className="text-[11px] text-[#F98E1B]">Efetuar cadastro</Link>
                        </div>
                    </form>
                </div>

            </div>
        </section>

    );
}

export default SignInPage;