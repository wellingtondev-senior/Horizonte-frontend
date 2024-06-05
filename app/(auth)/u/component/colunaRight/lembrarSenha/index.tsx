import Logo from "@/components/Logo";
import { LembrarSenhaForm } from "./form";

interface LembrarSenhaPageProps {

}


const LembrarSenhaPage = ({ }: LembrarSenhaPageProps) => {
    return (
        <div className="w-full h-full flex flex-col ">
            <Logo className={"w-[300px]"} imageName={"Meio Ambiente"} />
            <LembrarSenhaForm />
        </div>
    );
}

export default LembrarSenhaPage;