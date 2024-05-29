import React from 'react'
import './fcss/Userslist.css'
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from './Dashboard'
import UserEditModal from './UserEditModal'
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import { removeuser } from '../redux/userSlice';



function UsersList() {
    const dispatch=useDispatch()
    const users = useSelector((state)=>state.users?.users);
    const Users = users?.filter((el) => el?.email !== 'admin@gmail.com');
    const user = useSelector((state)=>state.user?.user);
    const isAuth = localStorage.getItem('token');

    const alert = (a) => Swal.fire({
      title: "Voulez vous supprimer ce client ?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Spprimer",
      denyButtonText: `cancel`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(removeuser(a));
        Swal.fire("Utilisateur supprimé");
        setTimeout(function(){ window. location. reload(); }, 2000);

      }
    });
    
  return (
  <>
    {isAuth&&user?.role==="admin"?(
<div className='userscontainer'>
<header className="bg-white shadow">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Liste des clients</h1>
    </div>
  </header>
 <div className='userslist'>
<table>
<tbody>
 <tr>
     <th>Nom</th>
     <th>Prénom</th>
     <th>Email</th>
     <th>Société</th>
     <th></th>
     <th></th>
 </tr>
 {Users?.map((el)=>(
     <tr>
     <td>{el?.name}</td>
     <td>{el?.lastname}</td>
     <td>{el?.email}</td>
     <td style={{color:'red',fontWeight:'bold'}}>{el?.company}</td>
     <td><UserEditModal client={el}/></td>
     <td><Button variant="danger" onClick={()=>alert(el?._id)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={'15px'} height={'15px'}><path fill="#ffffff" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></Button>{' '}
</td>
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
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    )}
   
    </>
  )
}

export default UsersList