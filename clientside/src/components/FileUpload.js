import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './fcss/FileUpload.css'
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

function FileUpload() {
  useEffect(() => {
    getfiles();
  }, [])
  
//récupérer la demande avec son id
  const n = useParams();
  console.log(n)
  const demands= useSelector((state)=>state.demand.demandlist);
  const demand = demands?.filter((el)=> el?._id === n._id)[0];

  
  const [title,setTitle]=useState("");
  const [file,setFile]=useState("");
  const [allImages, setallImages] = useState(null);

//redux
  const getfiles = async () =>{
    const result = await axios.get("http://localhost:5000/files/allfiles");
    setallImages(result.data.data);
  }
  const service = demand?.service;
  const demand_num = demand?._id;

//fonction submitImage
  const submitImage = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title",title);
    formData.append("file",file);
    formData.append("service",service)
    formData.append("demand_num",demand_num)
    console.log(title,file,service,demand_num);
    //redux
    const result = await axios.post("http://localhost:5000/files/upload-files",formData,
      {
        headers:{"Content-Type": "multipart/form-data"},
      }
    );
    Swal.fire({
      title: "Bien fait!",
      text: "Votre fichier a été téléchargé et envoyé au administrateur!",
      icon: "success"
    });
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
//showfile function
const showfile = (pdf) => {

  window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer")
}



  return (
  <div className='fileupload'>
    <div className="container">
    <div className="card">
      <h3>Télécharger un fichier</h3>
      <form className="drop_box" onSubmit={submitImage}>
        <header>
        <h4>Nom fichier</h4>
        <input type="text" className="filename" placeholder="Tapez ici le nom de fichier" onChange={(e)=>setTitle(e.target.value)} />
        </header>
        <p>en PDF svp !!! </p>
        <input className='file' type="file"  accept=".pdf" id="fileID"  onChange={(e)=>setFile(e.target.files[0])} />
        <button className="btn">Valider</button>
      </form>
    </div>
  </div>
  <h5 style={{textAlign:'center'}}>Vos fichiers envoyés précédemment:</h5>
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
      {allImages == null?"": allImages?.reverse().filter(data=> data?.demand_num === n._id && data?.admin ==="").map(
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
  </div>
  )
}

export default FileUpload