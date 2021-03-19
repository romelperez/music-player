import { CSSObject } from '@emotion/css';

import { theme } from '../../theme';

const { palette } = theme;

const styles: Record<string, CSSObject> = {
  root: {
    position: 'relative',
    fontSize: 11,
    lineHeight: 1
  },
  info: {
    marginBottom: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  data: {
    borderRadius: 2,
    transition: 'color 200ms ease-out, background-color 200ms ease-out'
  },
  dataLoading: {
    backgroundColor: palette.secondary.dark2,
    color: 'transparent'
  },
  tooltip: {
    display: 'none',
    position: 'absolute',
    left: 0,
    top: -4,
    padding: '2px 4px',
    color: palette.neutral.level1,
    backgroundColor: palette.secondary.main,

    '@media screen and (min-width: 600px)': {
      display: 'inline-block'
    }
  },
  zone: {
    borderRadius: 2,
    width: '100%',
    height: 5,
    backgroundColor: palette.secondary.dark2,
    cursor: 'pointer'
  },
  zoneDisabled: {
    cursor: 'default'
  },
  track: {
    width: '100%',
    height: '100%',
    backgroundColor: palette.secondary.main,
    transformOrigin: 'left',
    transform: 'scaleX(0)' // Initial state. It's dynamically updated.
  }
};

export { styles };
