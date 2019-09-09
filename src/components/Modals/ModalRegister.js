import React, {useState,useEffect} from 'react'

import {Button, Modal, Form} from 'react-bootstrap';

const ModalRegister = (props) =>{

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);

  useEffect(() => {
    setShow(props.data.status)
    return ()=>{
      handleClose();
    }
},[props.data]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" defaultValue={props.data.FirstName} disabled/>
            </Form.Group>
            <Form.Group controlId="formBasicLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" defaultValue={props.data.LastName} disabled/>
            </Form.Group>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" defaultValue={props.data.Username} disabled/>
            </Form.Group>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalRegister;