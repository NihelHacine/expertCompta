import React from 'react'
import './fcss/Reservation.css'
import Reserver from './Reserver'
import { useSelector } from 'react-redux'

function Reservation() {
    const appoints = useSelector((state)=>state.appoint?.appointlist);
    const currentDate = new Date();


  return (
    <div className='reserver'>
        <header className="header">
          <h1>Besoin d'un rendez vous ? Vous pouvez le faire avec un simple clique</h1>
          <p>Rendez vous disponibles</p>
        </header>
        <table>
     <tbody>
      <tr>
          <th>Jour</th>
          <th>Date</th>
          <th>Début</th>
          <th>Fin</th>
          <th></th>
          
      </tr>
      {appoints?.toReversed().filter(el => new Date(el?.date) > currentDate && el?.reserved === false).map((el)=>(
        <tr>
        <td>{el?.day}</td>
        <td>{new Date(el?.date).toLocaleDateString()}</td>
        <td>{el?.begin}</td>
        <td>{el?.end}</td>
        <td><Reserver appoint={el}/></td>
      </tr>    
        ))}     
      </tbody>
      </table>
    </div>
  )
}

export default Reservation