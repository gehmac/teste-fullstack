import { useCallback } from "react";
import { instanceApi } from "./service/get-instance-client";
import { Player } from "./types/player";

interface UseListPlayersApi {
  getAllPlayers: () => Promise<Player[]>;
}

export default function useListPlayersApi(): UseListPlayersApi {
  const getAllPlayers = useCallback(async (): Promise<Player[]> => {
    try {
      const response = await instanceApi.get("v1/player/all");
      return response.data;
    } catch (error) {
      console.log("Failed to fetch players", error);
      return [];
    }
  }, []);

  return {
    getAllPlayers,
  };
}
