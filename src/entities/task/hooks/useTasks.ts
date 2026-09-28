import { useContext } from 'react';
import { TasksContext, type TasksContextValue } from '../model/tasks-context';

export const useTasks = (): TasksContextValue => {
    const context = useContext(TasksContext);

    if (!context) {
        throw new Error('useTasks must be used within TasksProvider');
    }

    return context;
};
