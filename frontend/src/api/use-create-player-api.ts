import { useCallback } from "react";
import { instanceApi } from "./service/get-instance-client";

interface UseCreatePlayerApi {
  createPlayer: (props: UseCreatePlayerApiProps) => Promise<void>;
}

type UseCreatePlayerApiProps = {
  name: string;
  age: number;
  teamId: string;
};

export default function useCreatePlayerApi(): UseCreatePlayerApi {
  const createPlayer = useCallback(
    async ({ name, age, teamId }: UseCreatePlayerApiProps): Promise<void> => {
      try {
        await instanceApi.post("v1/player/create", {
          name,
          age,
          teamId,
        });
      } catch (error) {
        console.log("Failed to fetch players", error);
      }
    },
    []
  );

  return {
    createPlayer,
  };
}
