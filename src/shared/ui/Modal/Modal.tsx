import { useEffect, type FC, type MouseEvent, type PropsWithChildren } from 'react';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';

interface Props extends PropsWithChildren {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
}

export const Modal: FC<Props> = ({ isOpen, onClose, title, children }) => {
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    useEffect(() => {
        if (!isOpen) return;

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div className={styles.modal} role='dialog' aria-modal='true'>
                <div className={styles.modalHeader}>
                    {title && <h2 className={styles.modalTitle}>{title}</h2>}
                    <button
                        type='button'
                        className={styles.modalClose}
                        onClick={onClose}
                        aria-label='Закрыть'
                    >
                        ×
                    </button>
                </div>
                <div className={styles.modalBody}>{children}</div>
            </div>
        </div>,
        document.body,
    );
};
