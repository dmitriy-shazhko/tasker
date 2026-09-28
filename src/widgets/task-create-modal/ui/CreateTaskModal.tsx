import type { FC } from 'react';
import { Modal } from '@shared/ui';
import { CreateTaskForm } from '@features/task-create';
import { useTasks, type Task } from '@entities/task';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const CreateTaskModal: FC<Props> = ({ isOpen, onClose }) => {
    const { addTask } = useTasks();

    const handleSubmit = (task: Task) => {
        addTask(task);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title='Новая задача'>
            <CreateTaskForm onSubmit={handleSubmit} />
        </Modal>
    );
};
