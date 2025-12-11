import styles from './Typography.module.scss';
import type { ReactNode, ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

const defaultElement: TypographyTag = 'div';

type TypographyOwnProps<E extends TypographyTag = typeof defaultElement> = {
  children: ReactNode;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  variant?: 'primary' | 'secondary' | 'accent' | 'error' | 'warning';
  extraClass?: string;
  as?: E;
};

type TypographyProps<E extends TypographyTag = typeof defaultElement> =
  TypographyOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof TypographyOwnProps<E>>;


export function Typography<E extends TypographyTag = typeof defaultElement>({
                                                                              children,
                                                                              as,
                                                                              size = 'm',
                                                                              variant = 'primary',
                                                                              extraClass,
                                                                              ...otherProps
                                                                            }: TypographyProps<E>) {
  const TagName = as ?? defaultElement;

  return (
    <TagName
      className={clsx(
        styles.Typography,
        styles[`Typography_size_${size}`],
        styles[`Typography_color_${variant}`],
        extraClass
      )}
      {...otherProps}>
      {children}
    </TagName>
  );
}
