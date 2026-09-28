import { afterEach, describe, expect, it, vi } from 'vitest';
import { generateId } from './generate-id';

describe('generateId', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('combines the current timestamp with a random base-36 suffix', () => {
        vi.spyOn(Date, 'now').mockReturnValue(123456);
        vi.spyOn(Math, 'random').mockReturnValue(0.5);

        expect(generateId()).toBe('123456-i');
    });
});
