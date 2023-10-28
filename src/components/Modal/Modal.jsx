import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Button from 'react-bootstrap/Button';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-bootstrap/Modal';

function ModalProfile(user) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Mas informacion
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{user?.user.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Correo electronico:
            {' '}
            {user?.user.email}
          </p>
          <p>
            Sitio web:
            {' '}
            {user?.user.website}
          </p>
          <p>
            Nombre de la compañia:
            {' '}
            {user?.user.company?.name}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary">Me interesa</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalProfile;
