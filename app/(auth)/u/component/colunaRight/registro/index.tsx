import Logo from "@/components/Logo";
import RegistroClienteForm from "./form";

interface RegistroPageProps {

}


const RegistroPage = ({ }: RegistroPageProps) => {
    return (
        <div className="w-full h-full flex flex-col ">
            <Logo className={"w-[300px]"} imageName={"Meio Ambiente"} />
            <RegistroClienteForm />
        </div>

    );
}

export default RegistroPage;