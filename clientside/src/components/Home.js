import React from 'react'
import './fcss/Home.css'
import Homebody from './Homebody'
import { Bounce,  Zoom } from "react-awesome-reveal";

function Home() {
  return (
    <>
    <div className='home'>
        <div className='hometext'>
         <Zoom triggerOnce><h2 className='text'>Votre compta à jour, en quelques minutes, où que vous soyez</h2></Zoom>
         <Bounce triggerOnce delay={1500}>
          <h5 className='text'>Avec ExpertCompta, vous bénéficiez d’un comptable en ligne</h5>
         <h6 className='text'>L'essentiel pour piloter votre entreprise en ligne, plus besoin de vous déplacer!</h6>
         </Bounce>
        </div>
        <div className='homeimg'>
        <img src='./compta.png' />
        </div>

    </div>
    <Homebody/>
    </>
  )
}

export default Home