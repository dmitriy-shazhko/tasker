import type { CSSProperties, FC } from 'react';
import styles from './Spinner.module.css';

interface Props {
    style?: CSSProperties;
}

export const Spinner: FC<Props> = ({ style }) => {
    return <div style={style} className={styles.loader}></div>;
};
