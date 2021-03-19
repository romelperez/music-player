/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { jsx } from '@emotion/react';
import { cx } from '@emotion/css';

import { DataTrack } from '../../constants';
import { styles } from './Tracks.styles';

interface TracksProps {
  tracks: DataTrack[]
  currentTrackId: DataTrack['id'] | null
  onSelect: (trackId: DataTrack['id']) => void
  className?: string
}

const Tracks: FC<TracksProps> = props => {
  const { tracks, currentTrackId, onSelect, className } = props;

  return (
    <div
      className={cx('tracks', className)}
      css={styles.root}
    >
      <ul
        className='tracks__list'
        css={styles.list}
      >
        {tracks.map(track =>
          <li
            className='tracks__item'
            css={styles.item}
            key={track.id}
          >
            <a
              href={`#/song/${track.id}`}
              css={[
                styles.itemLink,
                track.id === currentTrackId && styles.itemLinkActive
              ]}
              onClick={() => onSelect(track.id)}
            >
              <div
                css={styles.itemImage}
                style={{ backgroundImage: `url(${track.albumImageURL})` }}
              />
              <div css={styles.itemDetails}>
                <div css={styles.itemName}>
                  {track.name}
                </div>
                <div css={styles.itemAlbumName}>
                  {track.artistName}
                </div>
              </div>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export type { TracksProps };
export { Tracks };
