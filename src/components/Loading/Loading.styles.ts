import { CSSObject } from '@emotion/css';
import { keyframes } from '@emotion/react';

import { theme } from '../../theme';

const { palette } = theme;
const loadingKeyframes = keyframes({
  '0%, 80%, 100%': {
    boxShadow: '0 0',
    height: '4em'
  },
  '40%': {
    boxShadow: '0 -2em',
    height: '5em'
  }
});
const barStyles = {
  background: palette.primary.main,
  animation: `${loadingKeyframes} 1s infinite ease-in-out`,
  width: '1em',
  height: '4em'
};

const styles: Record<string, CSSObject> = {
  root: {
    ...barStyles,
    position: 'relative',
    margin: '88px auto',
    color: palette.primary.main,
    textIndent: '-9999em',
    fontSize: '7px',
    transform: 'translateZ(0)',
    animationDelay: '-0.16s',

    '&::before, &::after': {
      ...barStyles,
      content: '""',
      position: 'absolute',
      top: 0
    },
    '&::before': {
      left: '-1.5em',
      animationDelay: '-0.32s'
    },
    '&::after': {
      left: '1.5em'
    }
  }
};

export { styles };
