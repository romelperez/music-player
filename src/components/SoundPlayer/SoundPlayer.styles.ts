import { CSSObject } from '@emotion/css';
import { keyframes } from '@emotion/react';

import { theme } from '../../theme';

const { palette } = theme;
const onAppearKeyframes = keyframes({
  from: {
    transform: 'translateY(100%)'
  },
  to: {
    transform: 'translateY(0%)'
  }
});

const styles: Record<string, CSSObject> = {
  root: {
    position: 'relative',
    animation: `${onAppearKeyframes} 200ms ease-out 0ms 1 alternate`
  },
  header: {
    position: 'absolute',
    left: 25,
    right: 25,
    top: 0,
    borderRadius: 2,
    padding: '10px 20px 10px 110px',
    backgroundColor: palette.neutral.level2,
    transition: 'transform 200ms ease-out',

    '@media screen and (min-width: 600px)': {
      paddingLeft: 150
    }
  },
  headerVisible: {
    transform: 'translateY(-100%)'
  },
  footer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: palette.neutral.level3
  },
  album: {
    position: 'absolute',
    left: 50,
    top: 0,
    width: 70,
    height: 70,
    opacity: 0,
    transition: 'transform 200ms ease-out, opacity 200ms ease-out',

    '@media screen and (min-width: 600px)': {
      transform: 'translateY(-40px)',
      width: 100,
      height: 100,
      opacity: 1
    }
  },
  albumActive: {
    opacity: 1,
    transform: 'translateY(-83px)',

    '@media screen and (min-width: 600px)': {
      transform: 'translateY(-60px)'
    }
  }
};

export { styles };
