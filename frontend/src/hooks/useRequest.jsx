import { useEffect, useState } from "react";

const useRequest = (httpRequest, url, body) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await httpRequest(url,body);
        setResponse(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error(error);
        setError(error);
        setIsLoading(false);
      }
    };
    getData();
  }, [httpRequest, url, body]);

  return [response, error, isLoading];
};

export default useRequest;