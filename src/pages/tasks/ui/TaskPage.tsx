import { useState } from 'react';
import { Button } from '@shared/ui';
import { PriorityFilter, type PriorityFilterValue } from '@features/task-filter';
import { TaskList } from '@widgets/task-list';
import { CreateTaskModal } from '@widgets/task-create-modal';
import styles from './TaskPage.module.css';

export const TasksPage = () => {
    const [filter, setFilter] = useState<PriorityFilterValue>('all');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onCreateTask = () => {
        setIsModalOpen(true);
    };

    const onCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <main className={styles.tasksPage}>
            <header className={styles.tasksPageHeader}>
                <h1>Задачи</h1>
                <Button onClick={onCreateTask}>Создать задачу</Button>
            </header>

            <div className={styles.tasksPageFilter}>
                <PriorityFilter value={filter} onChange={setFilter} />
            </div>

            <TaskList filter={filter} />

            <CreateTaskModal isOpen={isModalOpen} onClose={onCloseModal} />
        </main>
    );
};
