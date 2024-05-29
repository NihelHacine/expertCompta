import React, {  useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './fcss/FileManag.css';
import Button from 'react-bootstrap/Button';
import SendFile from './SendFile';

function FileManag() {   
    const f= useParams();
    const allfiles = useSelector((state)=>state.file?.filelist);
    
    const clientfiles = allfiles?.filter((el) => el.demand_num == f._id);
    const filenumber = clientfiles?.length || 0 ;
    const showfile = (pdf) => {

      window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer")
    }
    

  return (
    <div className='documents'>
        <div>
        <h4>Documents de la demande numero: <b style={{color:"red"}}>{f?._id}</b></h4>
        {filenumber>0?(
          <div className='fichiers'>
        {clientfiles && clientfiles.filter((el)=>el?.admin==="").map((el) => (
        <Button variant="info" onClick={()=>showfile(el?.file)}>{el?.file_name}</Button>

      ))}
        </div>
        ):(<p style={{textAlign:'center'}}>aucun fichier reçu ! </p>)}
        </div>
        <div >
        <SendFile id={f._id}/>
          </div> 
        

    </div>
  )
}

export default FileManag