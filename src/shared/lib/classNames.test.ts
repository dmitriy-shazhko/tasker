import { describe, expect, it } from 'vitest';
import { clsx } from './classNames';

describe('clsx', () => {
    it('joins string class names and trims the result', () => {
        expect(clsx('button', 'primary')).toBe('button primary');
    });

    it('includes keys with true values and skips keys with false values', () => {
        expect(clsx({ active: true, disabled: false })).toBe('active');
    });

    it('combines strings, conditional classes, and undefined values', () => {
        expect(clsx('button', undefined, { active: true, disabled: false }, 'large'))
            .toBe('button active large');
    });

    it('returns an empty string when no classes are provided', () => {
        expect(clsx()).toBe('');
    });
});
