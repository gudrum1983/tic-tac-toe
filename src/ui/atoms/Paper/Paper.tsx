import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Paper.module.scss';
import type { TokenRadius, TokenSize } from '@types';

type PaperProps = {
  noPadding?: boolean;
  noRadius?: boolean;
  padding?: TokenSize;
  radius?: TokenRadius;
  children?: ReactNode;
  fullHeight?: boolean;
  fullWidth?: boolean;
};

export function Paper({
                        children,
                        noPadding = false,
                        noRadius = false,
                        padding = 'md',
                        radius = 'md',
                        fullWidth = false,
                        fullHeight = false,
                      }: PaperProps) {

  return (
    <div className={clsx(
      styles.Paper,
      noPadding ? styles.Paper_pad_none : styles[`Paper_padding_${padding}`],
      noRadius ? styles.Paper_rad_none : styles[`Paper_radius_${radius}`],
      fullHeight && styles.Paper_fullHeight,
      fullWidth && styles.Paper_fullWidth,
    )}>
      {children}
    </div>
  );
}