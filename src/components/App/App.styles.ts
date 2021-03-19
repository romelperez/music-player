import { CSSObject } from '@emotion/css';

const styles: Record<string, CSSObject> = {
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column'
  },
  wrapper: {
    margin: '0 auto',
    width: '100%',
    padding: 20,
    maxWidth: 900
  },
  header: {
    '& h1': {
      margin: 0
    }
  },
  main: {
    flex: 1,
    overflowY: 'auto',
    paddingBottom: 180 // The space the SoundPlayer takes.
  },
  soundPlayer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
};

export { styles };
