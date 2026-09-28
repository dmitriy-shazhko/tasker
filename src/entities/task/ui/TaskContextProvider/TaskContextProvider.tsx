import type { Task } from '@entities/task';
import { mockTasks } from '@entities/task/model/mock-tasks';
import { TasksContext, type TasksContextValue } from '@entities/task/model/tasks-context';
import { useCallback, useMemo, useState, type FC, type PropsWithChildren } from 'react';

export const TasksProvider: FC<PropsWithChildren> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>(mockTasks);

    const addTask = useCallback((task: Task) => {
        setTasks((ts) => [...ts, task]);
    }, []);

    const value = useMemo<TasksContextValue>(() => ({ tasks, addTask }), [tasks, addTask]);

    return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
};
