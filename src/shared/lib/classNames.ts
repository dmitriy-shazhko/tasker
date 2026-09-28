type OptionalClassName = Record<string, boolean>;

export const clsx = (...classes: (string | OptionalClassName | undefined)[]) => {
    let classString = '';

    classes.forEach((c) => {
        if (typeof c === 'string') classString += ` ${c}`;
        if (typeof c === 'object') {
            Object.entries(c)
                .filter(([, v]) => v)
                .forEach(([k]) => {
                    classString += ` ${k}`;
                });
        }
    });

    return classString.trim();
};
