/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { jsx } from '@emotion/react';
import { cx } from '@emotion/css';

import { styles } from './SoundPlayerAlbum.styles';

interface SoundPlayerAlbumProps {
  isLoading: boolean
  isPlaying: boolean
  isError: boolean
  imageURL: string
  className?: string
}

const SoundPlayerAlbum: FC<SoundPlayerAlbumProps> = props => {
  const {
    isLoading,
    isPlaying,
    isError,
    imageURL,
    className
  } = props;

  return (
    <div
      className={cx('sound-player-album', className)}
      css={styles.root}
    >
      <div
        className='sound-player-album__image'
        css={[styles.image, isPlaying && styles.imageActive]}
        style={{
          backgroundImage: `url(${imageURL})`
        }}
      >
        <div
          className='sound-player-album__center'
          css={styles.center}
        />
        {isLoading && (
          <div
            className='sound-player-album__text'
            css={styles.text}
          >
            <div
              className='sound-player-album__text-content'
              css={styles.textContent}
            >
              {isError ? 'Not Found' : 'Buffering...'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export type { SoundPlayerAlbumProps };
export { SoundPlayerAlbum };
