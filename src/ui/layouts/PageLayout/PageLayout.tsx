import styles from './PageLayout.module.scss';
import type { ReactNode } from 'react';
import clsx from 'clsx';

type PageLayoutProps = {
  header: ReactNode,
  footer: ReactNode,
  children: ReactNode,
  extraClasses?: string
};

export function PageLayout({ header, footer, children, extraClasses }: PageLayoutProps) {
  return (
    <div className={clsx([styles.PageLayout, extraClasses && extraClasses])}>
      <header className={styles.PageLayout_Header}>{header}</header>
      <main className={styles.PageLayout_Main}>{children}</main>
      <footer className={styles.PageLayout_Footer}>{footer}</footer>
    </div>
  );
}