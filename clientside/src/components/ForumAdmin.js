import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {deleteforum} from '../redux/forumSlice'
import Swal from 'sweetalert2'
import AddResponse from './AddResponse';
import EditForum from './EditForum';


function ForumAdmin() {
    const questions = useSelector((state)=>state.forum?.forumlist);
    const dispatch = useDispatch();
  return (
    <div>
       <header className="bg-white shadow">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Forum</h1>
    </div>
  </header>
 <div className='userslist'>
<table>
<tbody>
 <tr>
     <th>Ref</th>
     <th>Applicant </th>
     <th>Question</th>
     <th>Réponse</th>
     <th></th>
     <th></th>
 </tr>
 {questions?.map((el)=>(
    <tr>
       <td>{el?._id}</td>
       <td>{el?.applicant_email}</td>
       <td>{el?.question}</td>
       <td style={{color:'red'}}>{el?.response===""?"pas encore répondu":el?.response}</td>
       <td>
        {el?.response===""?(
            <AddResponse el={el}/>
        ):<EditForum el={el}/>}
        </td>
       <td><button type='submit' onClick={()=>{
        dispatch(deleteforum(el?._id));
        Swal.fire({
            title: "C'est fait!",
            text: "Article supprimé!",
            icon: "success"
          });
        setTimeout(function(){ window. location. reload(); }, 3000);
       }}><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button></td> 
    </tr>
 ))}
 
 
</tbody>
</table>
</div>
    </div>
  )
}

export default ForumAdmin