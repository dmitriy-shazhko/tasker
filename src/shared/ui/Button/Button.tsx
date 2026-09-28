import type { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.css';
import { clsx } from '@shared/lib';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

export const Button: FC<Props> = ({ variant = 'primary', className, ...rest }) => {
    const classes = clsx(styles.button, styles[`button--${variant}`], className);

    return <button className={classes} {...rest} />;
};
