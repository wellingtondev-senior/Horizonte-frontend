"use client";

import { useQueryProvedorFindAll } from "@/query/useQueryProvedor";
import { Provedor } from "@/types/provedor";
import { useEffect, useState } from "react";

const useProvider = () => {
    const [isData, setIsData] = useState<Provedor[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const queryProvedorFindAll = useQueryProvedorFindAll();


    const setNewObject = (index: number, cheched: boolean) => {
        const newData = isData.map((e, i) => {
            if (i === index ) {
             e.status = cheched
            }else{
             e.status = false  
            }
            return e
        })
        setIsData(newData)
    }




    useEffect(() => {
        if (queryProvedorFindAll.isLoading) {
            setIsLoading(true);
        } else if (queryProvedorFindAll.error) {
            setIsError(true);
            setIsLoading(false);
        } else if (queryProvedorFindAll.data) {
            setIsData(queryProvedorFindAll.data.message);
            setIsLoading(false);
            setIsError(false);
        }
    }, [queryProvedorFindAll.isLoading, queryProvedorFindAll.data, queryProvedorFindAll.error]);

    return { isData, isLoading, isError, setNewObject};
};

export default useProvider;
