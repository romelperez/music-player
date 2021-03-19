import rgba from 'polished/lib/color/rgba';
import { CSSObject } from '@emotion/css';

import { theme } from '../../theme';

const { palette } = theme;

const styles: Record<string, CSSObject> = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10
  },
  option: {
    display: 'block',
    outline: 'none',
    border: 'none',
    margin: 0,
    padding: 20,
    fontSize: 20,
    lineHeight: 1,
    color: palette.primary.main,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'background-color 200ms ease-out',

    '&:focus, &:hover': {
      backgroundColor: rgba(palette.secondary.main, 0.1)
    },
    '&:disabled': {
      color: palette.primary.dark2,
      cursor: 'default'
    }
  }
};

export { styles };
