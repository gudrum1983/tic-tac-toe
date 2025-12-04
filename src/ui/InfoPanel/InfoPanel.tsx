import styles from './InfoPanel.module.scss';

export type InfoPanelProps = {
  children?: React.ReactNode;
};

export function InfoPanel({ children }: InfoPanelProps) {

  return (
    <div className={styles.InfoPanel}>
      InfoPanel Component
      {children}
    </div>
  );
}