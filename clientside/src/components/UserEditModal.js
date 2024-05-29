import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { userEdit } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

function UserEditModal({client}) {
    const dispatch=useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [edituser, setedituser] = useState({
      'name' : client?.name,
      'lastname' : client?.lastname,
      'adress' : client?.adress,
      'phonenumber' : client?.phonenumber,
      'company':client?.company,
      'tax_number':client?.tax_number,
      'email':client?.email

    })
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={'15px'} height={'15px'}><path fill="#ffffff" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier ce client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label htmlFor="inputPassword5">Name </Form.Label>
      <Form.Control
        type="text"
        aria-describedby="passwordHelpBlock"
        placeholder={client?.name}
        onChange={(e)=>setedituser({...edituser, name:e.target.value})}
      />
      <Form.Label htmlFor="inputPassword5">Lastname </Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder={client?.lastname}
        onChange={(e)=>setedituser({...edituser, lastname:e.target.value})}
      />
      <Form.Label htmlFor="inputPassword5">Adresse </Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder={client?.adress}
        onChange={(e)=>setedituser({...edituser, adress:e.target.value})}
      />
      <Form.Label htmlFor="inputPassword5">Company </Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder={client?.company}
        onChange={(e)=>setedituser({...edituser, company:e.target.value})}
      />
      <Form.Label htmlFor="inputPassword5">Matricule fiscale </Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder={client?.tax_number}
        onChange={(e)=>setedituser({...edituser, tax_number:e.target.value})}
      />
      <Form.Label htmlFor="inputPassword5">GSM </Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder={client?.phonenumber}
        onChange={(e)=>setedituser({...edituser, phonenumber:e.target.value})}
      />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" 
          onClick={() => {dispatch(userEdit({id:client?._id,edituser})); 
          handleClose();
          window.location.reload();
          }}>
            Valider
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UserEditModal