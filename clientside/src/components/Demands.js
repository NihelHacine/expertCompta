import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './fcss/Userslist.css'
import { useDispatch, useSelector } from 'react-redux';
import { deletedemand, editdemand } from '../redux/demandSlice';
import { Link } from 'react-router-dom';


function Demands() {
    const demands = useSelector((state)=>state.demand?.demandlist); 
    const user = useSelector((state)=>state.user?.user);
    const isAuth = localStorage.getItem('token');
    const dispatch = useDispatch();

  return (
    <>
     {isAuth&&user?.role==="admin"?(
<div className='userscontainer'>
<header className="bg-white shadow">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Liste des demandes</h1>
    </div>
  </header>
 <div className='userslist'>
<h3>Demandes reçues</h3>
<table>
<tbody>
 <tr>
     <th>Email</th>
     <th>Société</th>
     <th>Matricule fiscale</th>
     <th>service demandé</th>
     <th></th>
     <th></th>
 </tr>
 {demands?.filter(el=>el?.status==="en cours").map((el)=>(
     <tr>
     <td>{el?.applicant_email}</td>
     <td style={{color:'red',fontWeight:'bold'}}>{el?.company}</td>
     <td>{el?.tax_number}</td>
     <td >{el?.service}</td>
     <td><Button variant="danger" onClick={()=>{dispatch(deletedemand(el?._id));window.location.reload();}}>Refuser</Button></td>
     <td><Button variant="success" onClick={()=>{dispatch(editdemand({id:el?._id}));window.location.reload();}}>Accepter</Button></td>
     </tr>
 ))}
 
</tbody>
</table>
</div>
<div className='userslist'>
<h3>Demandes aceptées</h3>
<table>
<tbody>
 <tr>
     <th>Email</th>
     <th>Société</th>
     <th>Matricule fiscale</th>
     <th>service demandé</th>
     <th>Demande numéro:</th>
     <th>Documents</th>
     
 </tr>
 {demands?.filter(el=>el?.status==="acceptée").map((el)=>(
     <tr>
     <td>{el?.applicant_email}</td>
     <td style={{color:'red',fontWeight:'bold'}}>{el?.company}</td>
     <td>{el?.tax_number}</td>
     <td style={{color:'green',fontWeight:'bold'}}>{el?.service}</td>
     <td>{el?._id}</td>
     <td><Link to={`files/${el?._id}`}>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={20} height={20}>
    <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/>
    </svg> 
    </Link></td>
     </tr>
 ))}
 
</tbody>
</table>
</div>
</div> ):
(
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            
          </div>
        </div>
      </main>
    )}
   
    </>
  )
}

export default Demands;