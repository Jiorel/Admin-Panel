import { Button } from "components/Button/Button";
import { PropsWithChildren } from "react";
import "./Modal.scss";

interface ModalProps {
  show: boolean;
  title: string;
  onClose: () => any;
}

export function Modal({
  show,
  onClose,
  title,
  children,
}: PropsWithChildren<ModalProps>) {
  return show ? (
    <div className="modal__background" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <header className="modal__header">
          <h2 className="modal__header__title">{title}</h2>
        </header>
        <main className="modal__content">{children}</main>
        <footer className="modal__footer">
          <Button variant="danger" onClick={onClose}>
            Cancel
          </Button>
        </footer>
      </div>
    </div>
  ) : null;
}
