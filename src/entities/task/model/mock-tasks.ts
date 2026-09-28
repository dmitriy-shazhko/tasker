import type { Task } from './types';

export const mockTasks: Task[] = [
    {
        id: '1',
        title: 'Настроить окружение проекта',
        description: 'Инициализировать Vite, TypeScript и структуру FSD',
        priority: 'high',
        createdAt: Date.now() - 1000 * 60 * 60 * 24 * 3,
    },
    {
        id: '2',
        title: 'Сверстать страницу задач',
        description: 'Список задач и фильтр по приоритету',
        priority: 'medium',
        createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
        id: '3',
        title: 'Добавить модалку создания задачи',
        priority: 'high',
        createdAt: Date.now() - 1000 * 60 * 60 * 24,
    },
    {
        id: '4',
        title: 'Написать README',
        description: 'Описать структуру и запуск проекта',
        priority: 'low',
        createdAt: Date.now() - 1000 * 60 * 60 * 5,
    },
    {
        id: '5',
        title: 'Проверить типы и линтер',
        priority: 'medium',
        createdAt: Date.now() - 1000 * 60 * 30,
    },
];
