import { useMemo, useRef, type FC } from 'react';
import { TaskCard, useTasks, type Task } from '@entities/task';
import type { PriorityFilterValue } from '@features/task-filter';
import styles from './TaskList.module.css';
import { useVirtualizer } from '@tanstack/react-virtual';

interface Props {
    filter: PriorityFilterValue;
}

export const TaskList: FC<Props> = ({ filter }) => {
    const { tasks } = useTasks();
    const parentRef = useRef<HTMLUListElement>(null);

    const filteredTasks = useMemo<Task[]>(() => {
        if (filter === 'all') {
            return tasks;
        }

        return tasks.filter((task) => task.priority === filter);
    }, [tasks, filter]);

    const rowVirtualizer = useVirtualizer({
        count: filteredTasks.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 80,
        overscan: 5,
        gap: 12,
        getItemKey: (index) => filteredTasks[index].id,
        measureElement: (element) => element.getBoundingClientRect().height,
    });

    if (filteredTasks.length === 0) {
        return <p className={styles.taskListEmpty}>Задач не найдено</p>;
    }

    return (
        <ul className={styles.taskList} ref={parentRef}>
            {rowVirtualizer.getVirtualItems().map((item) => {
                const task = filteredTasks[item.index];

                return (
                    <TaskCard
                        key={task.id}
                        task={task}
                        ref={rowVirtualizer.measureElement}
                        data-index={item.index}
                        style={{
                            transform: `translateY(${item.start}px)`,
                        }}
                    />
                );
            })}
        </ul>
    );
};
