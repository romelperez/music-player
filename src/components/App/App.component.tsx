/** @jsxImportSource @emotion/react */
import { FC, useState } from 'react';
import { jsx } from '@emotion/react';

import { DataTrack } from '../../constants';
import { useDataTracks } from '../../services/tracks';
import { SoundPlayer } from '../SoundPlayer';
import { Loading } from '../Loading';
import { Tracks } from '../Tracks';
import { styles } from './App.styles';

const App: FC = () => {
  const [currentTrackId, setCurrentTrackId] = useState<DataTrack['id'] | null>(null);
  const { isLoading, tracks } = useDataTracks();

  const currentTrack = tracks.find(track => track.id === currentTrackId);

  const onSelect = (trackId: string) => {
    setCurrentTrackId(trackId);
  };

  const onBackward = () => {
    const currentTrackIndex = tracks.findIndex(track => track.id === currentTrackId);

    if (currentTrackIndex > 0) {
      setCurrentTrackId(tracks[currentTrackIndex - 1].id);
    }
    else if (currentTrackIndex === 0) {
      setCurrentTrackId(tracks[tracks.length - 1].id);
    }
  };

  const onForward = () => {
    const currentTrackIndex = tracks.findIndex(track => track.id === currentTrackId);

    if (currentTrackIndex < tracks.length - 1) {
      setCurrentTrackId(tracks[currentTrackIndex + 1].id);
    }
    else if (currentTrackIndex === tracks.length - 1) {
      setCurrentTrackId(tracks[0].id);
    }
  };

  return (
    <div css={styles.root}>
      <header css={[styles.wrapper, styles.header]}>
        <h1>Music</h1>
      </header>
      <main css={[styles.wrapper, styles.main]}>
        {isLoading ? (
          <Loading />
        ) : (
          <Tracks
            tracks={tracks}
            currentTrackId={currentTrackId}
            onSelect={onSelect}
          />
        )}
      </main>
      {!!currentTrack && (
        <SoundPlayer
          css={styles.soundPlayer}
          track={currentTrack}
          onBackward={onBackward}
          onForward={onForward}
        />
      )}
    </div>
  );
};

export { App };
