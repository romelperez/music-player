import rgba from 'polished/lib/color/rgba';
import { CSSObject } from '@emotion/css';
import { keyframes } from '@emotion/react';

import { theme } from '../../../theme';

const { palette } = theme;
const albumImageAnimationName = keyframes({
  from: {
    transform: 'rotateZ(0deg)'
  },
  to: {
    transform: 'rotateZ(360deg)'
  }
});

const styles: Record<string, CSSObject> = {
  root: {
    position: 'relative',
    overflow: 'hidden',
    width: 100,
    height: 100
  },
  image: {
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: palette.primary.dark2,
    borderRadius: '50%',
    width: '100%',
    height: '100%',
    backgroundColor: palette.neutral.level3,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  imageActive: {
    animation: `${albumImageAnimationName} 3s linear 0s infinite forwards`
  },
  text: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: rgba(palette.secondary.main, 0.5)
  },
  textContent: {
    padding: '2px 4px',
    fontSize: 12,
    backgroundColor: palette.neutral.level1,
    color: palette.secondary.main
  },
  center: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    borderStyle: 'solid',
    borderColor: palette.primary.dark1,
    borderWidth: 2,
    borderRadius: '50%',
    width: 16,
    height: 16,
    backgroundColor: palette.primary.dark2
  }
};

export { styles };
