import { createContext } from 'react';
import type { Task } from './types';

export interface TasksContextValue {
    tasks: Task[];
    addTask: (task: Task) => void;
}

export const TasksContext = createContext<TasksContextValue | null>(null);
