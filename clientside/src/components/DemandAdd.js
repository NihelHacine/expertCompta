import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { adddemand } from '../redux/demandSlice';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';



function DemandAdd({service}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const isAuth = localStorage.getItem("token");
    const navigate = useNavigate();

    const alert = () => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Vous devez vous connecter pour confirmer votre demande!!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    };


    const user = useSelector((state) => state.user?.user);
    console.log(user);
    const [demand, setdemand] = useState({
        applicant_email: "",
        service: service,
        company: "",
        tax_number: "",
        status:"en cours"
       })

  console.log(demand)
  return (
    <>
    <Button variant="primary" 
     onClick={() => {
      if (isAuth) {
        handleShow();
      } else {
          alert();
      }
  }}
    style={{float:'right'}}>
      Demander ce service
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmer votre demand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Label htmlFor="inputPassword5">Votre email </Form.Label>
      <Form.Control
        type="text"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>setdemand({...demand, applicant_email:e.target.value})}
      />
            <Form.Label htmlFor="inputPassword5">Service demandé </Form.Label>
      <Form.Control
        type="text"
        aria-describedby="passwordHelpBlock"
        placeholder={demand?.service}
        onChange={(e)=>setdemand({...demand, service:e.target.value})}
      />
      <Form.Label htmlFor="inputPassword5">Votre société </Form.Label>
      <Form.Control
        type="text"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>setdemand({...demand, company:e.target.value})}
      />
      <Form.Label htmlFor="inputPassword5">Matricule fiscale </Form.Label>
      <Form.Control
        type="text"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>setdemand({...demand, tax_number:e.target.value})}

      />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button 
    variant="primary" 
    onClick={() => {
            dispatch(adddemand(demand));
            handleClose();
    }}
>
          Confirmer
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default DemandAdd