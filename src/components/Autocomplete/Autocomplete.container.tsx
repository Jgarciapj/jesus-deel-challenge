import React from 'react';
import { usePlayers } from '../../hooks/usePlayers';
import { Autocomplete } from './Autocomplete.component';

export const AutocompleteContainer = () => {
  const { loading, error, data, getPlayers } = usePlayers();

  if (error) {
    return (
      <p className="error-display">
        Error loading players.
        <br />
        Please check that your server is running or start it using ( npm run
        server )
      </p>
    );
  }

  return (
    <Autocomplete data={data ?? []} loading={loading} getPlayers={getPlayers} />
  );
};
