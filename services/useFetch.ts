import { useEffect, useState } from "react";


type FetchResult<DataType, DetailsType> = {
  data: DataType;
  dataDetails: DetailsType;
};

const useFetch = <DataType, DetailsType>(fetchFunction: () => Promise<FetchResult<DataType, DetailsType>>, autoFetch = true) => {
    const [data, setData] = useState<DataType | null>(null);
    const [dataDetails, setDataDetails] = useState<DetailsType | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try{
            setLoading(true);
            setError(null);


            const result = await fetchFunction();

            setData(result.data);
            setDataDetails(result.dataDetails);
        }
         catch (err) {
            setError(err instanceof Error ? err : new Error('An error occured'));
         } finally {
            setLoading(false);
         }
    }

    const reset = () => {
        setData(null);
        setDataDetails(null)
        setLoading(false);
        setError(null);
    }

    useEffect(() => {
        if(autoFetch){
            fetchData();
        }
    }, []);

    //console.log(dataDetails)

    return {data, dataDetails, loading, error, refetch: fetchData, reset};
}

export default useFetch;