import { useEffect, useState } from "react";

// To replace useApi
function useGetApi(api, params) {
  const [apiData, setApiData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getApiData() {
      try {
        const response = await api(params);
        const data = response.data;
        setApiData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getApiData();
  }, [api, params]);
  return { isLoading, apiData, error };
}

export default useGetApi;
