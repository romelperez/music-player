import { useState, useEffect } from 'react';

import { DataTrack } from '../../constants';

import tracksDataMock from './data-mock.json';

const useDataTracks = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState<DataTrack[]>([]);

  // TODO: Use real data source.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setTracks(tracksDataMock);
    }, 750);

    return () => clearTimeout(timeout);
  }, []);

  return { isLoading, tracks };
};

export { useDataTracks };
