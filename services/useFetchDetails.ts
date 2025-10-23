import { useEffect, useState } from "react";

type ApiResponse<T> = {
  data: T;
};


const useFetch = <DataType>(fetchFunction: () => Promise<ApiResponse<DataType>>, autoFetch = true) => {
    const [data, setData] = useState<DataType | null | []>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try{
            setLoading(true);
            setError(null);


            const result = await fetchFunction();

            setData(result.data);
        }
         catch (err) {
            setError(err instanceof Error ? err : new Error('An error occured'));
         } finally {
            setLoading(false);
         }
    }

    const reset = () => {
        setData([] as DataType);
        setLoading(false);
        setError(null);
    }

    useEffect(() => {
        if(autoFetch){
            fetchData();
        }
    }, []);

    //console.log(dataDetails)

    return {data, loading, error, refetch: fetchData, reset};
}

export default useFetch;