import { useEffect, useState } from "react";
import { FAKE_SEARCH_games } from "../services/fake-data";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesReponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // const controller = new AbortController();

    // apiClient
    //   .get<FetchGamesReponse>("/games", { signal: controller.signal })
    //   .then((res) => {
    //     console.log(res.data.results);
    //     setGames(res.data.results);
    //   })
    //   .catch((err) => {
    //     if (err instanceof CanceledError) return;
    //     setError(err.message);
    //   });

    // return () => controller.abort();

    console.log(FAKE_SEARCH_games);
    setGames(FAKE_SEARCH_games);
  }, []);

  return { games, error };
};

export default useGames;
