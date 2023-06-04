import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../modals/CustomModal.css';

function CustomModal({type='info', title='', body='', footer='Close', show, closeModal}) {
  const [showModal, setShowModal] = useState(show);

  useEffect(() => {
    setShowModal(show);
  }, [show]);

  const handleCloseModal = () => {
    closeModal();
  };


  let iconClass = '';

  switch (type) {
    case 'error':
      iconClass = 'fas fa-exclamation-circle error-icon';
      iconClass += ' '+'error-color';
      break;
    case 'info':
      iconClass = 'fas fa-info-circle info-icon';
      iconClass += ' '+'info-color';
      break;
    case 'warning':
      iconClass = 'fas fa-exclamation-triangle warning-icon';
      iconClass += ' '+'warning-color';
      break;
    case 'success':
      iconClass = 'fas fa-check-circle success-icon';
      iconClass += ' '+'success-color';
      break;
    default:
      break;
  }

  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{title} <i className={iconClass}></i></Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
          {body}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            {footer}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CustomModal;