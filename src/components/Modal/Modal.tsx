import { Button } from "components/Button/Button";
import "./Modal.scss";

interface ModalProps {
  show: boolean;
  close: () => void;
  title: string;
  children: string;
}

export function Modal({ show, close, title, children }: ModalProps) {
  return (
    <>
      {show ? (
        <div className="modalContainer" onClick={() => close()}>
          <div
            className="user-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="modal-header">
              <h2 className="modal-header__title">{title}</h2>
              <Button variant="danger" onClick={() => close()}>
                Close
              </Button>
            </header>
            <main className="modal-content">{children}</main>
            <footer className="modal-footer">
              <Button variant="danger" onClick={() => close()}>
                Cancel
              </Button>

              <Button variant="primary">Submit</Button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
}
