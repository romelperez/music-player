/** @jsxImportSource @emotion/react */
import { FC, MutableRefObject, useRef, useEffect, useCallback } from 'react';
import { jsx } from '@emotion/react';
import { cx } from '@emotion/css';

interface AudioManagerProps {
  audioURL: string
  isPlaying: boolean
  setIsLoading: (value: boolean) => void
  setIsPlaying: (value: boolean) => void
  setIsError: (value: boolean) => void
  setAudioDurationTrack: (value: number) => void
  setAudioDurationTotal: (value: number) => void
  onForward?: () => void
  audioRef?: MutableRefObject<HTMLAudioElement | null>
  className?: string
}

const AudioManager: FC<AudioManagerProps> = props => {
  const {
    audioRef: externalRef,
    audioURL,
    isPlaying,
    setIsLoading,
    setIsPlaying,
    setIsError,
    setAudioDurationTrack,
    setAudioDurationTotal,
    onForward,
    className
  } = props;

  const internalRef = useRef<HTMLAudioElement | null>(null);

  const actualRef = useCallback((node: HTMLAudioElement) => {
    internalRef.current = node;
    if (externalRef) {
      externalRef.current = node;
    }
  }, [externalRef]);

  useEffect(() => {
    if (internalRef.current) {
      internalRef.current.pause();
      internalRef.current.currentTime = 0;
    }
  }, [audioURL]);

  useEffect(() => {
    if (internalRef.current) {
      if (isPlaying) {
        internalRef.current.play();
      } else {
        internalRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <audio
      className={cx('audio-manager', className)}
      css={{
        display: 'none'
      }}
      ref={actualRef}
      onLoadStart={() => {
        setIsLoading(true);
        setIsPlaying(false);
        setIsError(false);
      }}
      onWaiting={() => {
        setIsLoading(true);
      }}
      onCanPlay={() => {
        setIsLoading(false);
        setIsPlaying(true);
        setIsError(false);
      }}
      onLoadedData={event => {
        setAudioDurationTrack(0);
        setAudioDurationTotal(event.currentTarget.duration);
      }}
      onTimeUpdate={event => {
        setAudioDurationTrack(event.currentTarget.currentTime);
      }}
      onEnded={onForward}
      onError={() => {
        setIsError(true);
      }}
      src={audioURL}
    />
  );
};

export type { AudioManagerProps };
export { AudioManager };
