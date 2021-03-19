/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { jsx } from '@emotion/react';
import { cx } from '@emotion/css';

import { DataTrack } from '../../../constants';
import { styles } from './SoundPlayerInfo.styles';

interface SoundPlayerInfoProps {
  track: DataTrack
  className?: string
}

const SoundPlayerInfo: FC<SoundPlayerInfoProps> = props => {
  const { track, className } = props;

  return (
    <div
      className={cx('sound-player-info', className)}
      css={styles.root}
    >
      <div
        className='sound-player-info__name'
        css={[styles.textLine, styles.name]}
      >
        {track.name}
      </div>
      <div
        className='sound-player-info__composition'
        css={[styles.textLine, styles.composition]}
      >
        {track.artistName} - {track.albumName}
      </div>
    </div>
  );
};

export type { SoundPlayerInfoProps };
export { SoundPlayerInfo };
