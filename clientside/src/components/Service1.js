import React from 'react';
import './fcss/Service1.css'
import DemandAdd from './DemandAdd'
import { useSelector } from 'react-redux';


function Service1() {
  const service1 = "Création d'entreprise"

  return (
    <div className='service1'>
       <div className="container">
        <a className="card1" href="#">
          <h3>1</h3>
          <p className="small">Choix de la structure juridique : Expert Compta s’occupe de tout et vous conseille !</p>
          <div className="go-corner" href="#">
            <div className="go-arrow">
              →
            </div>
          </div>
        </a>
        <a className="card2" href="#">
          <h3>2</h3>
          <p className="small">La comptabilité en ligne, simple et humaine avec votre comptable dédié et votre espace en ligne.</p>
          <div className="go-corner" href="#">
            <div className="go-arrow">
              →
            </div>
          </div>
        </a>
        <a className="card1" href="#">
          <h3>3</h3>
          <p className="small">La gestion du volet social de votre entreprise, simple et rapide : notre équipe vous accompagne dans toutes les démarches sociales pour votre startup.</p>
          <div className="go-corner" href="#">
            <div className="go-arrow">
              →
            </div>
          </div>
        </a>
      </div>
      <DemandAdd service={service1}  />

    </div>
  )
}

export default Service1