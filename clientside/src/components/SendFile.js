import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import axios from "axios";
import Swal from 'sweetalert2';


function SendFile(id) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [title,setTitle]=useState("");
    const [file,setFile]=useState("");
    const admin = "oui";
    const service_num = id.id;

    const demandes = useSelector((state)=>state.demand?.demandlist);
    const demand = demandes?.filter((el) => el?._id === id.id);
    console.log("demandeeee",demand)
    const service = demand[0]?.service;


    const submitImage = async(e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("title",title);
      formData.append("file",file);
      formData.append("service",service)
      formData.append("demand_num",service_num)
      formData.append("admin",admin)
      console.log(title,file,service,service_num,admin);
      //redux
      const result = await axios.post("http://localhost:5000/files/upload-files",formData,
        {
          headers:{"Content-Type": "multipart/form-data"},
        }
      );
      Swal.fire({
        title: "Bien fait!",
        text: "Votre fichier a été téléchargé et envoyé au client!",
        icon: "success"
      });
     
    }
    
    console.log(title,file,service,service_num,admin);

  return (
     <>
      <Button variant="primary" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Télécharger un fichier</Modal.Title>
        </Modal.Header>
        <form onSubmit={submitImage}>
        <Modal.Body>
        <Form>
          
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nom fichier</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e)=>setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>votre fichier</Form.Label>
              <Form.Control
                type="file"
                accept='.pdf'
                autoFocus
                onChange={(e)=>setFile(e.target.files[0])}
              />
            </Form.Group>
            
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={()=>
           {
            handleClose();
          }
           }
          >
            Save Changes
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default SendFile