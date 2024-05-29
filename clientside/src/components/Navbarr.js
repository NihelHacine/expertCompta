import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";

function Navbarr() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);
  const isAuth = localStorage.getItem("token");
  const demands =  useSelector((state) => state.demand?.demandlist);
  const demand = demands?.filter((el)=> el?.applicant_email === user?.email);
  const nombre = demand?.length || 0; // Nombre de demandes avec cet e-mail


  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" style={{textDecoration:"none"}}> <Navbar.Brand href="#home"><img src='./clogo.png' width={'180px'} height={'80px'} style={{marginTop:'14%'}} /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link to="/" style={{textDecoration:"none"}}><Nav.Link href="#features">Accueil</Nav.Link></Link>
          <Link to="apropos"style={{textDecoration:"none"}}><Nav.Link href="#pricing">Qui sommes nous </Nav.Link></Link>
            <NavDropdown title="Nos services" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="service1">Création d'entreprise</NavDropdown.Item>
              <NavDropdown.Item href="service2">
                Comptabilité en ligne
              </NavDropdown.Item>
              <NavDropdown.Item href="service3">Gestion de paie</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Link to="forum" style={{textDecoration:"none"}}><Nav.Link href="#features">Forum</Nav.Link></Link>
          <Link to="contact" style={{textDecoration:"none"}}><Nav.Link href="#deets" >Contactez nous</Nav.Link></Link>
          {isAuth&&nombre!=0?(
            <Link to="/mydemands" style={{textDecoration:"none"}}><Nav.Link href="#deets">Mes demandes<sup style={{color:'red'}}><b>({nombre})</b></sup></Nav.Link></Link>
             ):null}
          {isAuth?(          
            <Link to="userProfile" style={{textDecoration:"none"}}><Button variant="warning"> {user?.name} {user?.lastname}</Button></Link>            
):          <Link to="subscribe" style={{textDecoration:"none"}}><Button variant="warning"> Devenir notre client</Button></Link>            
          }
          {
            isAuth?(
            <button onClick={()=>{
              dispatch(logout()); 
              navigate("/")}}> 
            <Nav.Link >
            <svg xmlns="http://www.w3.org/2000/svg"  width={20} height={20} viewBox="0 0 512 512"><path fill="#000001" d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
            </Nav.Link>
            </button>)
            :(<Link to='/login' style={{textDecoration:"none"}}> 
            <Nav.Link href="#deets">
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 448 512"><path fill="black"  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            </Nav.Link>
            </Link>)
          }
            <Link to="/chat" style={{textDecoration:"none"}}> 
            <Nav.Link href="#deets">
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 512 512"><path fill="blue" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>           
             </Nav.Link>
             </Link>
             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbarr