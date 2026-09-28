import type { ChangeEvent, FC } from 'react';
import styles from './Select.module.css';

interface Option {
    value: string;
    label: string;
}

interface Props {
    value: string;
    options: Option[];
    onChange: (value: string) => void;
    label?: string;
}

export const Select: FC<Props> = ({ value, options, onChange, label }) => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
    };

    return (
        <label className={styles.select}>
            {label && <span>{label}</span>}
            <select className={styles.selectControl} value={value} onChange={handleChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label>
    );
};
