import React from 'react'
import './fcss/Service1.css'
import DemandAdd from './DemandAdd';

function Service3() {
  const service3 = "Gestion de paie"
  return (
    <div className='service1'>
    <div className="container">
     <a className="card1" href="#">
       <h3>1<br/>Paramétrez vos salariés </h3>
       <p className="small">Ajoutez les documents de vos salariés sur notre site web</p>
       <div className="go-corner" href="#">
         <div className="go-arrow">
           →
         </div>
       </div>
     </a>
     <a className="card2" href="#">
       <h3>2<br/>Récupérez en ligne vos bulletins de paie rapidement depuis votre espace client web</h3>
       <p className="small">Retrouvez dans votre espace client les bulletins de paie et les déclarations sociales</p>
       <div className="go-corner" href="#">
         <div className="go-arrow">
           →
         </div>
       </div>
     </a>
   </div>
<DemandAdd service={service3}/>
 </div>
  )
}

export default Service3