import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { editappoint } from '../redux/appointSlice';

function EditAppoint({appoint1}) {
    const dispatch=useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [editappointment, seteditappoint] = useState({
        day:appoint1?.day,
    date:appoint1?.date,
    begin:appoint1?.begin,
    end:appoint1?.end,
    applicant:"",
    applicant_email:"",
    app_phone:"",
    reserved: false,
  
      })
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={'15px'} height={'15px'}><path fill="#ffffff" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier ce rendez vous </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label htmlFor="inputPassword5">Jour </Form.Label>
      <Form.Control
        type="text"
        aria-describedby="passwordHelpBlock"
        placeholder={appoint1?.day}
        onChange={(e)=>seteditappoint({...editappointment, day:e.target.value})}
      />
      <Form.Label htmlFor="inputPassword5">Date </Form.Label>
      <Form.Control
        type="date"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder={appoint1?.date}
        onChange={(e)=>seteditappoint({...editappointment, date:e.target.value})}
      />
      <Form.Label htmlFor="inputPassword5">Début </Form.Label>
      <Form.Control
        type="time"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder={appoint1?.begin}
        onChange={(e)=>seteditappoint({...editappointment, begin:e.target.value})}
      />
      <Form.Label htmlFor="inputPassword5">Fin </Form.Label>
      <Form.Control
        type="time"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder={appoint1?.end}
        onChange={(e)=>seteditappoint({...editappointment, end:e.target.value})}
      />
      <Form.Label htmlFor="inputPassword5">Statut</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder={appoint1?.status}
        onChange={(e)=>seteditappoint({...editappointment, status:e.target.value})}
      />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" 
          onClick={() => {dispatch(editappoint({id:appoint1?._id,editappointment})); 
          handleClose();
          window.location.reload();
          }}>
            Valider
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditAppoint