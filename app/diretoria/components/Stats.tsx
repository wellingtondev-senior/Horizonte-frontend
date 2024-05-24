import { FaUsersCog } from "react-icons/fa";








const Stats = () => {
    return (
        <section className="w-full">
            <div className="w-full flex max-lg:flex-col gap-4">
                <div className="w-full flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-600">
                    <div className="w-[50px] h-[50px] flex justify-center  align-center rounded-lg  bg-violet-400">
                        <FaUsersCog />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold leadi">20</p>
                        <p className="capitalize">Colaboradores</p>
                    </div>
                </div>

                <div className="w-full flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-600">
                    <div className="w-[50px] h-[50px] flex justify-center  align-center rounded-lg  bg-violet-400">
                        <FaUsersCog />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold leadi">20</p>
                        <p className="capitalize">Colaboradores</p>
                    </div>
                </div>
                <div className="w-full flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-600">
                    <div className="w-[50px] h-[50px] flex justify-center  align-center rounded-lg  bg-violet-400">
                        <FaUsersCog />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold leadi">20</p>
                        <p className="capitalize">Colaboradores</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Stats;