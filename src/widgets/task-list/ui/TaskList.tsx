import { useMemo, type FC } from 'react';
import { TaskCard, useTasks, type Task } from '@entities/task';
import type { PriorityFilterValue } from '@features/task-filter';
import styles from './TaskList.module.css';

interface Props {
    filter: PriorityFilterValue;
}

export const TaskList: FC<Props> = ({ filter }) => {
    const { tasks } = useTasks();

    const filteredTasks = useMemo<Task[]>(() => {
        if (filter === 'all') {
            return tasks;
        }

        return tasks.filter((task) => task.priority === filter);
    }, [tasks, filter]);

    if (filteredTasks.length === 0) {
        return <p className={styles.taskListEmpty}>Задач не найдено</p>;
    }

    return (
        <ul className={styles.taskList}>
            {filteredTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </ul>
    );
};
