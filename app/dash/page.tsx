import DashProvider from "@/util/dashProvider";
import Stats from "./components/Stats";

const DashPage = () => {
    return (
        <DashProvider>
           <Stats/>
        </DashProvider>

    );
}

export default DashPage;