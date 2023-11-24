import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { FAKE_SEARCH_games, FAKE_SEARCH_genres } from "../services/fake-data";

interface FetchReponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // const controller = new AbortController();
    // setLoading(true);
    // apiClient
    //   .get<FetchReponse<T>>(endpoint, { signal: controller.signal })
    //   .then((res) => {
    //     console.log(res.data.results);
    //     setData(res.data.results);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     if (err instanceof CanceledError) return;
    //     setError(err.message);
    //     setLoading(false);
    //   });

    // return () => controller.abort();

    ////////////////////////////////////////////////////////
    ////// FAKE ENDPOINTS //////////////////////////////////
    ////////////////////////////////////////////////////////
    if (endpoint === "/genres") {
      setLoading(true);
      console.log(FAKE_SEARCH_genres);
      setData(FAKE_SEARCH_genres);
      setTimeout(() => {
        setLoading(false);
      }, 0);
    }
    if (endpoint === "/games") {
      setLoading(true);
      console.log(FAKE_SEARCH_games);
      setData(FAKE_SEARCH_games);
      setTimeout(() => {
        setLoading(false);
      }, 0);
    }
    ////////////////////////////////////////////////////////
    ////// FAKE ENDPOINTS //////////////////////////////////
    ////////////////////////////////////////////////////////
  }, []);

  return { data, error, isLoading };
};

export default useData;
