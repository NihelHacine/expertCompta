import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { addforum } from '../redux/forumSlice';

function AddQuestion() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const user = useSelector((state) => state.user?.user);
  console.log(user)
  const dispatch = useDispatch();
  const [forum,setforum] = useState({
    applicant_email: "",
    question:"",
    response:""
  })
console.log(forum)
  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{margin:'20px'}}>
        Ajouter votre question
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Proposer votre question!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label htmlFor="inputPassword5">Tapez votre question</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>setforum({...forum, question:e.target.value})}
      />
      <Form.Label htmlFor="inputPassword5">confirmer votre email</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder={user?.email}
        onChange={(e)=>setforum({...forum, applicant_email:e.target.value})}
      />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            dispatch(addforum(forum));
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

export default AddQuestion