import { TasksProvider } from '@entities/task';
import { TasksPage } from '@pages/tasks';

export const App = () => {
    return (
        <TasksProvider>
            <TasksPage />
        </TasksProvider>
    );
};
