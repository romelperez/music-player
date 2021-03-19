/** @jsxImportSource @emotion/react */
import { FC, useState } from 'react';
import { jsx } from '@emotion/react';
import { cx } from '@emotion/css';

import { formatAudioDuration } from '../../utils/formatAudioDuration';
import { getSoundPlayerTimelineMousePosition } from '../../utils/getSoundPlayerTimelineMousePosition';
import { styles } from './AudioTimeline.styles';

interface AudioTimelineProps {
  isLoading: boolean
  isPlaying: boolean
  isError: boolean
  audioDurationTrack: number
  audioDurationTotal: number
  onTimelineTrackUpdate: (time: number) => void
  className?: string
}

const AudioTimeline: FC<AudioTimelineProps> = props => {
  const {
    isLoading,
    isPlaying,
    isError,
    audioDurationTrack,
    audioDurationTotal,
    onTimelineTrackUpdate,
    className
  } = props;

  const [tooltipPosition, setTooltipPosition] = useState<{ width: number, left: number } | null>(null);

  const tooltipAudioTimeTrack = tooltipPosition
    ? (tooltipPosition.left * audioDurationTotal) / tooltipPosition.width
    : 0;

  return (
    <div
      className={cx('audio-timeline', className)}
      css={styles.root}
    >
      <div
        className='audio-timeline__info'
        css={styles.info}
      >
        <span
          className='audio-timeline__duration-track'
          css={[styles.data, isLoading && styles.dataLoading]}
        >
          {formatAudioDuration(audioDurationTrack)}
        </span>
        <span
          className='audio-timeline__duration-total'
          css={[styles.data, isLoading && styles.dataLoading]}
        >
          {formatAudioDuration(audioDurationTotal)}
        </span>
      </div>
      {isPlaying && (
        <div
          className='audio-timeline__tooltip'
          css={styles.tooltip}
          style={{
            opacity: tooltipPosition === null ? '0' : '1',
            transform: tooltipPosition === null ? '' : `translateX(calc(-50% + ${tooltipPosition.left}px))`
          }}
        >
          {tooltipPosition && formatAudioDuration(tooltipAudioTimeTrack)}
        </div>
      )}
      <div
        className='audio-timeline__zone'
        css={[styles.zone, isError && styles.zoneDisabled]}
        onMouseMove={event => {
          if (isPlaying) {
            const position = getSoundPlayerTimelineMousePosition(event);
            setTooltipPosition(position);
          }
        }}
        onMouseLeave={() => setTooltipPosition(null)}
        onClick={() => {
          if (isPlaying) {
            onTimelineTrackUpdate(tooltipAudioTimeTrack);
          }
        }}
      >
        <div
          className='audio-timeline__track'
          css={styles.track}
          style={{
            transform: isLoading ? '' : `scaleX(${audioDurationTrack / audioDurationTotal})`
          }}
        />
      </div>
    </div>
  );
};

export type { AudioTimelineProps };
export { AudioTimeline };
