import { useState } from 'react';
import { Player, ApiResponse } from '../types/common';

interface usePlayersResponse extends ApiResponse<Player[]> {
  getPlayers: () => Promise<void>;
}

export const usePlayers = (): usePlayersResponse => {
  const [data, setData] = useState<Player[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getPlayers = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch('http://localhost:3001/players');
      const data = await apiResponse.json();
      setData(data);
      setError(null);
    } catch (error) {
      setError(error as Error);
    }
    setLoading(false);
  };

  return { data, error, loading, getPlayers };
};
