import Logo from "@/components/Logo";
import { UserAuthForm } from "./UserAuthForm";
import { Toaster } from "sonner";

interface AuthPageProps {
}


const AuthPage = ({ }: AuthPageProps) => {

    return (
        <div className="w-full h-full flex flex-col ">
              <Logo className={"w-[300px]"} imageName={"Meio Ambiente"} />
              <UserAuthForm />
              <Toaster/>

        </div>
    );

}

export default AuthPage;