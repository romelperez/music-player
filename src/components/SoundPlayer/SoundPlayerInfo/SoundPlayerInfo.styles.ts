import { CSSObject } from '@emotion/css';

import { theme } from '../../../theme';

const { palette } = theme;

const styles: Record<string, CSSObject> = {
  root: {
    lineHeight: 1
  },
  textLine: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  name: {
    marginBottom: 10,
    fontSize: 18,
    color: palette.primary.light2
  },
  composition: {
    marginBottom: 15,
    fontSize: 14,
    color: palette.primary.main
  }
};

export { styles };
