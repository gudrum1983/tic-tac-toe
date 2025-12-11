import styles from './TemplateName.module.scss';
import type { ReactNode } from 'react';

type TemplateNameProps = {
  children?: ReactNode;
};

export function TemplateName({ children }: TemplateNameProps) {

  return (
    <div className={styles.TemplateName}>
      TemplateName Component
      {children}
    </div>
  );
}