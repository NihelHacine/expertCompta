import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editappoint } from '../redux/appointSlice';
import Swal from 'sweetalert2'


function Reserver({appoint}) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editappointment, seteditappointment] = useState({
    day:appoint?.day,
    date:appoint?.date,
    begin:appoint?.begin,
    end:appoint?.end,
    applicant:"",
    applicant_email:"",
    app_phone:"",
    reserved: true,
   })
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Réserver
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Réserver ce rendez vous </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label htmlFor="inputPassword5">Votre nom et prénom </Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock" 
        onChange={(e)=>seteditappointment({...editappointment, applicant:e.target.value})}
        required
      />
      <Form.Label htmlFor="inputPassword5">Votre email</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock" 
        onChange={(e)=>seteditappointment({...editappointment, applicant_email:e.target.value})}
        required
      />
      <Form.Label htmlFor="inputPassword5">Votre numéro</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock" 
        onChange={(e)=>seteditappointment({...editappointment, app_phone:e.target.value})}
        required
      />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {dispatch(editappoint({id:appoint?._id,editappointment})); 
          handleClose();
          Swal.fire("Votre réservation est validée! Merci d'être à l'heure");
          setTimeout(function(){ window. location. reload(); }, 2000)
          
          }}>
            Valider
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Reserver