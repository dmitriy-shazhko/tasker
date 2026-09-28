import type { FC } from 'react';
import styles from './TaskCart.module.css';
import type { Task } from '@entities/task/model/types';
import { clsx } from '@shared/lib';

const PRIORITY_LABEL: Record<Task['priority'], string> = {
    low: 'Низкий',
    medium: 'Средний',
    high: 'Высокий',
};

interface Props {
    task: Task;
}

export const TaskCard: FC<Props> = ({ task }) => {
    return (
        <li className={clsx(styles.taskCard, styles[`taskCard_${task.priority}`])}>
            <div className={styles.taskCardHeader}>
                <h3 className={styles.taskCardTitle}>{task.title}</h3>
                <span className={styles.taskCardPriority}>{PRIORITY_LABEL[task.priority]}</span>
            </div>
            {task.description && <p className={styles.taskCardDescription}>{task.description}</p>}
        </li>
    );
};
