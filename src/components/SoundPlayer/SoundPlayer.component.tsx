/** @jsxImportSource @emotion/react */
import { FC, useState, useRef } from 'react';
import { jsx } from '@emotion/react';
import { cx } from '@emotion/css';

import { DataTrack } from '../../constants';
import { SoundPlayerInfo } from './SoundPlayerInfo';
import { SoundPlayerAlbum } from './SoundPlayerAlbum';
import { AudioManager } from '../AudioManager';
import { AudioTimeline } from '../AudioTimeline';
import { AudioControls } from '../AudioControls';
import { styles } from './SoundPlayer.styles';

interface SoundPlayerProps {
  track: DataTrack
  onBackward?: () => void
  onForward?: () => void
  className?: string
}

const SoundPlayer: FC<SoundPlayerProps> = props => {
  const { track, onBackward, onForward, className } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isError, setIsError] = useState(false);
  const [audioDurationTrack, setAudioDurationTrack] = useState(0);
  const [audioDurationTotal, setAudioDurationTotal] = useState(0);

  const rootRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const onTimelineTrackUpdate = (time: number): void => {
    if (isPlaying && audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  return (
    <div
      className={cx('sound-player', className)}
      css={styles.root}
      ref={rootRef}
    >
      <AudioManager
        audioRef={audioRef}
        audioURL={track.audioURL}
        isPlaying={isPlaying}
        setIsLoading={setIsLoading}
        setIsPlaying={setIsPlaying}
        setIsError={setIsError}
        setAudioDurationTrack={setAudioDurationTrack}
        setAudioDurationTotal={setAudioDurationTotal}
        onForward={onForward}
      />

      <div
        className='sound-player__header'
        css={[styles.header, (isPlaying || isLoading) && styles.headerVisible]}
      >
        <SoundPlayerInfo
          track={track}
        />
        <AudioTimeline
          className='sound-player__timeline'
          isLoading={isLoading}
          isPlaying={isPlaying}
          isError={isError}
          audioDurationTrack={audioDurationTrack}
          audioDurationTotal={audioDurationTotal}
          onTimelineTrackUpdate={onTimelineTrackUpdate}
        />
      </div>

      <div
        className='sound-player__footer'
        css={styles.footer}
      >
        <SoundPlayerAlbum
          className='sound-player__album'
          css={[styles.album, (isPlaying || isLoading) && styles.albumActive]}
          isLoading={isLoading}
          isPlaying={isPlaying}
          isError={isError}
          imageURL={track.albumImageURL}
        />
        <AudioControls
          className='sound-player__controls'
          isLoading={isLoading}
          isPlaying={isPlaying}
          isError={isError}
          setIsPlaying={setIsPlaying}
          onBackward={onBackward}
          onForward={onForward}
        />
      </div>
    </div>
  );
};

export type { SoundPlayerProps };
export { SoundPlayer };
