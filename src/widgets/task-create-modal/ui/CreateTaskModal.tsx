import { lazy, Suspense, type FC } from 'react';
import { CreateTaskForm } from '@features/task-create';
import { useTasks, type Task } from '@entities/task';

const Modal = lazy(() => import('@shared/ui/Modal').then((module) => ({ default: module.Modal })));

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const CreateTaskModal: FC<Props> = ({ isOpen, onClose }) => {
    const { addTask } = useTasks();

    if (!isOpen) return null;

    const handleSubmit = (task: Task) => {
        addTask(task);
        onClose();
    };

    return (
        <Suspense fallback={null}>
            <Modal isOpen={isOpen} onClose={onClose} title='Новая задача'>
                <CreateTaskForm onSubmit={handleSubmit} />
            </Modal>
        </Suspense>
    );
};
