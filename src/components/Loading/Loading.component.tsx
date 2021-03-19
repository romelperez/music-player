/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { jsx } from '@emotion/react';
import { cx } from '@emotion/css';

import { styles } from './Loading.styles';

interface LoadingProps {
  className?: string
}

const Loading: FC<LoadingProps> = props => {
  const { className } = props;

  return (
    <div
      className={cx('loading', className)}
      css={styles.root}
    />
  );
};

export type { LoadingProps };
export { Loading };
