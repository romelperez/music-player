/** @jsxImportSource @emotion/react */
import {
  FC,
  ClassAttributes,
  HTMLAttributes,
  MutableRefObject,
  useRef,
  useEffect,
  useCallback
} from 'react';
import { jsx } from '@emotion/react';
import { cx } from '@emotion/css';

interface AudioManagerProps {
  AudioComponent?: FC<ClassAttributes<HTMLAudioElement> & HTMLAttributes<HTMLAudioElement>>
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
    AudioComponent = 'audio',
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
  const initialRenderRef = useRef<boolean | null>(true);

  const actualRef = useCallback((node: HTMLAudioElement) => {
    internalRef.current = node;
    if (externalRef) {
      externalRef.current = node;
    }
  }, [externalRef]);

  useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }

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
    <AudioComponent
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
