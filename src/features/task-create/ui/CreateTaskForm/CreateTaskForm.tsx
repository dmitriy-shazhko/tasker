import { useState, type FC, type SubmitEvent } from 'react';
import type { Priority, Task } from '@entities/task';
import { Button, Field, Select } from '@shared/ui';
import { generateId } from '@shared/lib';
import {
    validateTaskForm,
    type CreateTaskFormErrors,
    type CreateTaskFormValues,
} from '../../model';
import styles from './CreateTaskForm.module.css';

interface PriorityOption {
    value: Priority;
    label: string;
}

const PRIORITY_OPTIONS: PriorityOption[] = [
    { value: 'low', label: 'Низкий' },
    { value: 'medium', label: 'Средний' },
    { value: 'high', label: 'Высокий' },
];

const INITIAL_VALUES: CreateTaskFormValues = {
    title: '',
    description: '',
    priority: 'medium',
};

interface Props {
    onSubmit: (task: Task) => void;
}

export const CreateTaskForm: FC<Props> = ({ onSubmit }) => {
    const [values, setValues] = useState<CreateTaskFormValues>(INITIAL_VALUES);
    const [errors, setErrors] = useState<CreateTaskFormErrors>({});

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const validationErrors = validateTaskForm(values);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const newTask: Task = {
            id: generateId(),
            title: values.title.trim(),
            description: values.description.trim() || undefined,
            priority: values.priority,
            createdAt: Date.now(),
        };

        onSubmit(newTask);
        setValues(INITIAL_VALUES);
        setErrors({});
    };

    return (
        <form onSubmit={handleSubmit} noValidate>
            <Field label='Название' error={errors.title}>
                <input
                    className={styles.fieldControl}
                    value={values.title}
                    onChange={(event) => setValues({ ...values, title: event.target.value })}
                />
            </Field>

            <Field label='Описание' error={errors.description}>
                <textarea
                    className={styles.fieldControl}
                    rows={3}
                    value={values.description}
                    onChange={(event) => setValues({ ...values, description: event.target.value })}
                />
            </Field>

            <Select
                label='Приоритет'
                value={values.priority}
                options={PRIORITY_OPTIONS}
                onChange={(value) => setValues({ ...values, priority: value as Priority })}
            />

            <div className={styles.createTaskFormActions}>
                <Button type='submit'>Создать</Button>
            </div>
        </form>
    );
};
