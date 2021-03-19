import React from 'react';
import { render } from '@testing-library/react';

import { SoundPlayer } from './SoundPlayer.component';

test('should render', () => {
  const track = {
    id: 'a',
    name: 'song',
    artistName: 'artist',
    albumName: 'album',
    albumImageURL: 'http://',
    audioURL: 'http://'
  };
  render(<SoundPlayer track={track} />);
});
