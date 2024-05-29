import React from 'react'
import './fcss/Apropos.css'
import { Fade } from 'react-awesome-reveal'
import Team from './Team'

function Apropos() {

  return (
<div className='apropos'>
  <video autoPlay loop width={'100%'} height={'auto'}>
    <source src='./couv.mp4' type='video/mp4' />
  </video>
<div className='proptext'>
  <Fade cascade triggerOnce>
        <h2 className="fancy">Notre société</h2>
        <p>
           Notre société a été crée en 1998 sous le nom de "Bureau d'Expertise Comptable",
           par Mr. Gharbi Sami. 
        </p>   
        <h2 className="fancy">Notre mission</h2>
        <p>
          Notre société a pour mission de réviser et assister la comptabilité de plusieurs entreprises
          afin d'attester la régularité et la sincérité de ses comptes annuels.
        </p>
        <h2 className="fancy" >Notre activité</h2>
        <p>
         Notre société est habillée d'accomplir la tenue de comptabilité. Cette activité consiste à tenir les comptabilités, l'établissement des déclarations fiscales 
         et sociales et l'élaboration des états financiers.
         <br/> Les autres activités de notre société concernent essentiellement la réalisation de certains services à a demande des clients tels que les commissariats au apports, les démarches constitutives 
         de société, les études financières, la consultation juridique et fiscale, les demandes de crédits bancaires et les études de rentabilité de projets.
        </p>
        </Fade>
</div>
<Team/>
</div>
  )
}

export default Apropos