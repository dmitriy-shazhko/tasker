import { type CSSProperties, type FC, type Ref } from 'react';
import styles from './TaskCard.module.css';
import type { Task } from '@entities/task/model/types';
import { clsx } from '@shared/lib';

const PRIORITY_LABEL: Record<Task['priority'], string> = {
    low: 'Низкий',
    medium: 'Средний',
    high: 'Высокий',
};

interface Props {
    task: Task;
    ref?: Ref<HTMLLIElement>;
    style?: CSSProperties;
    'data-index'?: number;
}

export const TaskCard: FC<Props> = ({ task, 'data-index': dataIndex, style, ref }) => {
    return (
        <li
            ref={ref}
            data-index={dataIndex}
            style={style}
            className={clsx(styles.taskCard, styles[`taskCard_${task.priority}`])}
        >
            <div className={styles.taskCardHeader}>
                <h3 className={styles.taskCardTitle}>{task.title}</h3>
                <span className={styles.taskCardPriority}>{PRIORITY_LABEL[task.priority]}</span>
            </div>
            {task.description && <p className={styles.taskCardDescription}>{task.description}</p>}
        </li>
    );
};
