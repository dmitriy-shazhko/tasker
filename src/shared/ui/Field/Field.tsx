import type { FC, PropsWithChildren } from 'react';
import styles from './Field.module.css';

interface Props extends PropsWithChildren {
    label: string;
    error?: string;
}

export const Field: FC<Props> = ({ label, error, children }) => {
    return (
        <label className={styles.field}>
            <span>{label}</span>
            {children}
            {error && <span className={styles.fieldError}>{error}</span>}
        </label>
    );
};
