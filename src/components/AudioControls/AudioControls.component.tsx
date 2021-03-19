/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { jsx } from '@emotion/react';
import { cx } from '@emotion/css';

import { styles } from './AudioControls.styles';

interface AudioControlsProps {
  isLoading: boolean
  isPlaying: boolean
  isError: boolean
  setIsPlaying: (value: boolean) => void
  onBackward?: () => void
  onForward?: () => void
  className?: string
}

const AudioControls: FC<AudioControlsProps> = props => {
  const {
    isLoading,
    isPlaying,
    isError,
    setIsPlaying,
    onBackward,
    onForward,
    className
  } = props;

  const onPlay = () => {
    if (!isError) {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className={cx('audio-controls', className)}
      css={styles.root}
    >
      <button
        className='audio-controls__option audio-controls__option-backward'
        css={styles.option}
        onClick={onBackward}
      >
        <span className='fas fa-backward' />
      </button>
      <button
        className='audio-controls__option audio-controls__option-play'
        css={styles.option}
        disabled={isLoading || isError}
        onClick={onPlay}
      >
        <span className={`fas fa-${isPlaying ? 'pause' : 'play'}`} />
      </button>
      <button
        className='audio-controls__option audio-controls__option-forward'
        css={styles.option}
        onClick={onForward}
      >
        <span className='fas fa-forward' />
      </button>
    </div>
  );
};

export type { AudioControlsProps };
export { AudioControls };
