import { MdQrCode } from "react-icons/md";
import { LuWorkflow } from "react-icons/lu";
import { SiDependabot } from "react-icons/si";



const Stats = () => {
    return (
        <section className="w-full px-10 py-10">
            <div className="flex items-center justify-between gap-6 max-lg:gap-2 flex-wrap">

                <div className="w-fill flex  rounded-lg bg-purple-100 text-purple-600">
                    <div className="flex  rounded-l-lg items-center justify-center px-4 bg-violet-400 text-gray-800">
                       <MdQrCode className="w-6 h-6"/>
                    </div>
                    <div className="flex items-center justify-between flex-1 p-3 gap-2">
                        <p className="text-2xl font-semibold">20 </p>
                        <p>Instancias Ativas</p>
                    </div>
                </div>
                <div className="w-fill flex  rounded-lg bg-purple-100 text-purple-600">
                    <div className="flex  rounded-l-lg items-center justify-center px-4 bg-violet-400 text-gray-800">
                        <LuWorkflow className="w-6 h-6"/>
                    </div>
                    <div className="flex items-center justify-between flex-1 p-3 gap-2">
                        <p className="text-2xl font-semibold">5</p>
                        <p>Flow ativo</p>
                    </div>
                </div>
                <div className="w-fill flex  rounded-lg bg-purple-100 text-purple-600">
                    <div className="flex  rounded-l-lg items-center justify-center px-4 bg-violet-400 text-gray-800">
                        <SiDependabot className="w-6 h-6"/>
                    </div>
                    <div className="flex items-center justify-between flex-1 p-3 gap-2">
                        <p className="text-2xl font-semibold">20</p>
                        <p>Robo de atendimento</p>
                    </div>
                </div>
                <div className="w-fill flex  rounded-lg bg-purple-100 text-purple-600">
                    <div className="flex  rounded-l-lg items-center justify-center px-4 bg-violet-400 text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                            <path d="M487.938,162.108l-224-128a16,16,0,0,0-15.876,0l-224,128a16,16,0,0,0,.382,28l224,120a16,16,0,0,0,15.112,0l224-120a16,16,0,0,0,.382-28ZM256,277.849,65.039,175.548,256,66.428l190.961,109.12Z"></path>
                            <path d="M263.711,394.02,480,275.061V238.539L256,361.74,32,238.539v36.522L248.289,394.02a16.005,16.005,0,0,0,15.422,0Z"></path>
                            <path d="M32,362.667,248.471,478.118a16,16,0,0,0,15.058,0L480,362.667V326.4L256,445.867,32,326.4Z"></path>
                        </svg>
                    </div>
                    <div className="flex items-center justify-between flex-1 p-3 gap-2">
                        <p className="text-2xl font-semibold">200+</p>
                        <p>Projects</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Stats;