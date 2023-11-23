import { useEffect, useState } from "react";
import { FAKE_SEARCH_games } from "../services/fake-data";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesReponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // const controller = new AbortController();
    // setLoading(true);
    // apiClient
    //   .get<FetchGamesReponse>("/games", { signal: controller.signal })
    //   .then((res) => {
    //     console.log(res.data.results);
    //     setGames(res.data.results);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     if (err instanceof CanceledError) return;
    //     setError(err.message);
    //     setLoading(false);
    //   });

    // return () => controller.abort();

    setLoading(true);
    console.log(FAKE_SEARCH_games);
    setGames(FAKE_SEARCH_games);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return { games, error, isLoading };
};

export default useGames;
