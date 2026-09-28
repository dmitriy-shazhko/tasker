import { lazy, Suspense, type FC } from 'react';
import { useTasks, type Task } from '@entities/task';
import { Spinner } from '@shared/ui';
import { Modal } from '@shared/ui';

const CreateTaskForm = lazy(() =>
    import('@features/task-create/ui/CreateTaskForm/CreateTaskForm').then((module) => ({
        default: module.CreateTaskForm,
    })),
);

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
        <Modal isOpen={isOpen} onClose={onClose} title='Новая задача'>
            <Suspense fallback={<Spinner style={{ margin: '0 auto' }} />}>
                <CreateTaskForm onSubmit={handleSubmit} />
            </Suspense>
        </Modal>
    );
};
