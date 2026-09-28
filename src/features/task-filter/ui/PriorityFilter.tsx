import type { FC } from 'react';
import { Select } from '@shared/ui';
import type { PriorityFilterValue } from '../model/types';

interface Props {
    value: PriorityFilterValue;
    onChange: (value: PriorityFilterValue) => void;
}

interface FilterOptions {
    value: PriorityFilterValue;
    label: string;
}

const OPTIONS: FilterOptions[] = [
    { value: 'all', label: 'Все' },
    { value: 'low', label: 'Низкий' },
    { value: 'medium', label: 'Средний' },
    { value: 'high', label: 'Высокий' },
];

export const PriorityFilter: FC<Props> = ({ value, onChange }) => {
    const handleChange = (newValue: string) => {
        onChange(newValue as PriorityFilterValue);
    };

    return <Select label='Приоритет' value={value} options={OPTIONS} onChange={handleChange} />;
};
