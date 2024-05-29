import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function ReceiveFile() {
    const f= useParams();
    const allfiles = useSelector((state)=>state.file?.filelist);
    
    const clientfiles = allfiles?.filter((el) => el.demand_num == f._id && el.admin=="oui");
    const filenumber = clientfiles?.length || 0 ;
    const showfile = (pdf) => {

        window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer")
      }

  return (
    <div>
     <h5 style={{textAlign:'center',fontWeight:'bold'}}>Vos fichiers récues:</h5>   
  {filenumber>0? (
    <table className='userslist'>
    <thead>
    <th>Référence</th>
    <th>Nom du fichier</th>
    <th>Fichier</th>
    <th>Service</th>
    <th>Demande numéro:</th>
    <th></th>
    </thead>
    <tbody>
      {clientfiles && clientfiles?.reverse().filter(data=> data?.demand_num === f._id && data?.admin ==="oui").map(
        (data) => (
          <tr>
          <td>{data?._id}</td>
          <td>{data?.file_name}</td>
          <td>{data?.file}</td>
          <td>{data?.service}</td>
          <td>{data?.demand_num}</td>
          <td><Button variant="primary" onClick={()=>showfile(data?.file)}>aficher</Button></td>
        </tr>
        )
      )

      }
    </tbody>

  </table>
  ):(
    <p style={{textAlign:'center', color:'red'}}>Vous n'avez aucun fichier récu !!! </p>
  )
  }
 
    </div>
  )
}

export default ReceiveFile