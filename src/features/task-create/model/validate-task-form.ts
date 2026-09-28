import type { Priority } from '@entities/task';

export interface CreateTaskFormValues {
    title: string;
    description: string;
    priority: Priority;
}

export type CreateTaskFormErrors = Partial<Record<keyof CreateTaskFormValues, string>>;

export const validateTaskForm = (values: CreateTaskFormValues): CreateTaskFormErrors => {
    const errors: CreateTaskFormErrors = {};

    if (!values.title.trim()) {
        errors.title = 'Название обязательно';
    }

    return errors;
};
