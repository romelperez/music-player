import rgba from 'polished/lib/color/rgba';
import { CSSObject } from '@emotion/css';
import { keyframes } from '@emotion/react';

import { theme } from '../../theme';

const { palette } = theme;
const appearKeyframes = keyframes({
  from: { opacity: 0, transform: 'translateX(20px)' },
  to: { opacity: 1, transform: 'translateX(0)' }
});

const styles: Record<string, CSSObject> = {
  root: {
    display: 'block',
    animation: `${appearKeyframes} 200ms 0ms ease-out 1 alternate`
  },
  list: {
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none'
  },
  item: {
    display: 'block',
    margin: '0 0 20px'
  },
  itemLink: {
    outline: 'none',
    border: 'none',
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    textDecoration: 'none',
    transition: 'background-color 200ms ease-out',

    '&:focus, &:hover': {
      outline: 'none',
      backgroundColor: rgba(palette.secondary.main, 0.1)
    }
  },
  itemLinkActive: {
    backgroundColor: rgba(palette.primary.main, 0.1)
  },
  itemImage: {
    width: 60,
    height: 60,
    backgroundColor: palette.neutral.level3,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  itemDetails: {
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    lineHeight: 1.5
  },
  itemName: {
    fontSize: 18,
    color: palette.primary.main
  },
  itemAlbumName: {
    fontSize: 14,
    color: palette.primary.dark1
  }
};

export { styles };
