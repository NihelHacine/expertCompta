import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {userEdit } from '../redux/userSlice';
import './fcss/UserProfile.css';
import Button from 'react-bootstrap/Button';



function UserProfile() {
    const user = useSelector((state) => state.user?.user);
    const dispatch = useDispatch();
    const [edituser, setedituser] = useState({
    name : user?.name,
    lastname : user?.lastname, 
    adress: user?.adress,
    phonenumber : user?.phonenumber,
    email : user?.email,
    password :user?.password,
    company:user?.company,
    tax_number:user?.tax_number,
    role : "user"
    })
    console.log(edituser)
  return (
    <div className='profile'>
      <form method="get" action="javascript: void(0);" id="login-form" className="login-form" autoComplete="off" role="main">
        <h1 className="a11y-hidden">Login Form</h1>
        <center><h3>Bonjour {user?.lastname} {user?.name}</h3></center>
        <div>
          <label className="label-email">
            <input type="text" className="text"  placeholder={user?.lastname}  onChange={(e)=>{setedituser({...edituser,lastname:e.target.value})}}/>
            <span className="required">Nom </span>
          </label>
          <label className="label-email">
            <input type="text" className="text"  placeholder={user?.name}   onChange={(e)=>{setedituser({...edituser,name:e.target.value})}}/>
            <span className="required">Prénomm </span>
          </label>
          <label className="label-email">
            <input type="text" className="text"  placeholder={user?.adress}   onChange={(e)=>{setedituser({...edituser,adress:e.target.value})}}/>
            <span className="required">Adresse </span>
          </label>
          <label className="label-email">
            <input type="text" className="text"  placeholder={user?.phonenumber}   onChange={(e)=>{setedituser({...edituser,phonenumber:e.target.value})}}/>
            <span className="required">Num-tel </span>
          </label>
          <label className="label-email">
            <input type="text" className="text"  placeholder={user?.company}  onChange={(e)=>{setedituser({...edituser,company:e.target.value})}}/>
            <span className="required">Company </span>
          </label>
          <label className="label-email">
            <input type="text" className="text"  placeholder={user?.tax_number}  onChange={(e)=>{setedituser({...edituser,tax_number:e.target.value})}}/>
            <span className="required">Matricule fiscale </span>
          </label>
          <Button variant="success" onClick={()=>{dispatch(userEdit({id:user?._id,edituser}));window.location.reload();}}>modifier</Button>
        </div>
  
        <figure aria-hidden="true">
          <div className="person-body" />
          <div className="neck skin" />
          <div className="head skin">
            <div className="eyes" />
            <div className="mouth" />
          </div>
          <div className="hair" />
          <div className="ears" />
          <div className="shirt-1" />
          <div className="shirt-2" />
        </figure>
        
      </form>
    </div>
  )
}

export default UserProfile

    // <div><button onClick={()=>{dispatch(logout()); navigate("/logInOut")}}>logout</button></div> */}