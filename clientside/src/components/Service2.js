import React from 'react';
import './fcss/Service1.css';
import DemandAdd from './DemandAdd';

function Service2() {
  const service2 = "Comptabilité en ligne"
  return (
    <div className='service1'>
    <div className="container">
     <a className="card1" href="#">
       <h3>1</h3>
       <p className="small">On vous crée votre compte afin de suivre votre comptabilité en temps réel</p>
       <div className="go-corner" href="#">
         <div className="go-arrow">
           →
         </div>
       </div>
     </a>
     <a className="card2" href="#">
       <h3>2</h3>
       <p className="small">Transférez vos documents au cabinet via votre espace client web</p>
       <div className="go-corner" href="#">
         <div className="go-arrow">
           →
         </div>
       </div>
     </a>
     <a className="card1" href="#">
       <h3>3</h3>
       <p className="small">Votre comptable vous accompagne et vous assiste en ligne</p>
       <div className="go-corner" href="#">
         <div className="go-arrow">
           →
         </div>
       </div>
     </a>
     <a className="card2" href="#">
       <h3>4</h3>
       <p className="small">Recevez vos déclarations certifiées rapidement</p>
       <div className="go-corner" href="#">
         <div className="go-arrow">
           →
         </div>
       </div>
     </a>
     <a className="card1" href="#">
       <h3>5</h3>
       <p className="small">Consultez votre Comptabilité en ligne</p>
       <div className="go-corner" href="#">
         <div className="go-arrow">
           →
         </div>
       </div>
     </a>
     <a className="card2" href="#">
       <h3>6</h3>
       <p className="small">Consultez et/ou imprimez vos états financiers en ligne</p>
       <div className="go-corner" href="#">
         <div className="go-arrow">
           →
         </div>
       </div>
     </a>
   </div>
   <DemandAdd service={service2}/>
 </div>
  )
}

export default Service2