import styles from './TemplateName.module.scss';

export type TemplateNameProps = {
  children?: React.ReactNode;
};

export function TemplateName({ children }: TemplateNameProps) {

  return (
    <div className={styles.TemplateName}>
      TemplateName Component
      {children}
    </div>
  );
}