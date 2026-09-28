import { describe, expect, it } from 'vitest';
import { validateTaskForm } from './validate-task-form';

describe('validateTaskForm', () => {
    it('returns a title error when the title is empty', () => {
        const errors = validateTaskForm({ title: '', description: '', priority: 'medium' });

        expect(errors.title).toBeTruthy();
    });

    it('returns a title error when the title contains only whitespace', () => {
        const errors = validateTaskForm({ title: '   \t\n ', description: '', priority: 'medium' });

        expect(errors.title).toBeTruthy();
    });

    it('returns no errors when the title contains non-whitespace characters', () => {
        const errors = validateTaskForm({ title: '  Buy milk  ', description: '', priority: 'medium' });

        expect(errors).toEqual({});
    });
});
