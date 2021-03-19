import { CSSObject } from '@emotion/css';

import { theme } from './theme';

const { palette } = theme;

const styles: CSSObject = {
  '*, *::before, *::after': {
    boxSizing: 'border-box'
  },
  'html, body': {
    overflow: 'hidden',
    fontFamily: "'Open Sans', sans-serif",
    color: palette.primary.light1,
    backgroundColor: palette.neutral.level1
  }
};

export { styles };
