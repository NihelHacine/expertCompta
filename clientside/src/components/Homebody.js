import React, { useEffect } from 'react'
import './fcss/Homebody.css'
import { Fade } from "react-awesome-reveal";
import $ from 'jquery'
import { Link } from 'react-router-dom';

function Homebody() {
      useEffect(() => {
      
        return () => {
          $(".hover").mouseleave(
            function() {
              $(this).removeClass("hover");
            }
          );
        }
      }, [])
      
  return (
    <div className='homebody'>
        <header className="header">
          <h1>Nos services</h1>
          <p>Nos services en ligne vous permettent de gagner plus de temps</p>
        </header>
        <Fade triggerOnce cascade direction='up'>
        <div className='services'>
        <figure className="snip1527">
          <div className="image1"><img src="./c1.png" height={'100%'} maxHeight={'100%'} /></div>
          <figcaption>
            <h3>Comptabilité en ligne</h3>
            <p>
            Grâce à notre comptabilité digitale, vous disposez d’un espace client pour consulter immédiatement et à tout moment votre comptabilité.            </p>
          </figcaption>
          <Link to="service2"><a href="#" /></Link>
        </figure>
        <figure className="snip1527 hover">
          <div className="image1"><img src="./c2.png" alt="pr-sample24" /></div>
          <figcaption>
            <h3>Gestion de paie</h3>
            <p>
            Notre objectif : vous simplifier la paie et la gestion sociale. Nous serons les garants de votre sécurité dans un domaine de plus en plus complexe de la gestion du personnel.            </p>
          </figcaption>
          <Link to="service3"><a href="#" /></Link>
        </figure>
        <figure className="snip1527">
          <div className="image1"><img src="./c3.png" alt="pr-sample25" /></div>
          <figcaption>
            <h3>Création des entreprises</h3>
            <p>
            Créer votre entreprise avec un cabinet comptable c’est l’assurance de prendre les bonnes décisions. Avec ExpertCompta vous bénéficiez d’offres attractives adaptées à vos besoins.            </p>
          </figcaption>
          <Link to="service1"><a href="service1" /></Link>
        </figure>
        </div>
        </Fade>
 <div className="container">
        <marquee><p className="container-title">Chez ExpertCompta, plus besoin de se déplacer.</p></marquee>
        <div className="gradient-cards">
          <Fade>
          <div className="card">
            <div className="container-card bg-green-box">
              <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} viewBox="0 0 640 512"><path fill="#74C0FC" d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm32 64H320c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zM64 368c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm320 0c0-8.8 7.2-16 16-16H560c8.8 0 16 7.2 16 16s-7.2 16-16 16H400c-8.8 0-16-7.2-16-16zM80 288a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"/></svg>
              <p className="card-title">Processus digitalisé</p>
              <p className="card-description">Un portail dédié pour centraliser la gestion de vos demandes tout en restant notifié en temps réel.</p>
            </div>
          </div>
          </Fade>
          <Fade>
          <div className="card">
            <div className="container-card bg-white-box">
            <svg xmlns="http://www.w3.org/2000/svg"  width={80} height={80} viewBox="0 0 640 512"><path fill="#FFD43B" d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"/></svg>
              <p className="card-title">Une équipe super active</p>
              <p className="card-description">ExpertCompta vous accompagne au quotidien. Assistance Administrative, Comptabilité, et Coursier Pro.</p>
            </div>
          </div>
          </Fade>
          <Fade>
          <div className="card">
            <div className="container-card bg-yellow-box">
            <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} viewBox="0 0 512 512"><path fill="#FFD43B" d="M128 64c0-35.3 28.7-64 64-64H352V128c0 17.7 14.3 32 32 32H512V448c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V336H302.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H128V64zm0 224v48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H128zM512 128H384V0L512 128z"/></svg>
              <p className="card-title">Facilité de de déploiement</p>
              <p className="card-description">Envoyez tous vos documents comptables et justificatifs à travers votre espace client sur le Web.</p>
            </div>
          </div>
          </Fade>
          <Fade>
          <div className="card">
            <div className="container-card bg-blue-box">
            <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} viewBox="0 0 512 512"><path fill="#74C0FC" d="M48 256C48 141.1 141.1 48 256 48c63.1 0 119.6 28.1 157.8 72.5c8.6 10.1 23.8 11.2 33.8 2.6s11.2-23.8 2.6-33.8C403.3 34.6 333.7 0 256 0C114.6 0 0 114.6 0 256v40c0 13.3 10.7 24 24 24s24-10.7 24-24V256zm458.5-52.9c-2.7-13-15.5-21.3-28.4-18.5s-21.3 15.5-18.5 28.4c2.9 13.9 4.5 28.3 4.5 43.1v40c0 13.3 10.7 24 24 24s24-10.7 24-24V256c0-18.1-1.9-35.8-5.5-52.9zM256 80c-19 0-37.4 3-54.5 8.6c-15.2 5-18.7 23.7-8.3 35.9c7.1 8.3 18.8 10.8 29.4 7.9c10.6-2.9 21.8-4.4 33.4-4.4c70.7 0 128 57.3 128 128v24.9c0 25.2-1.5 50.3-4.4 75.3c-1.7 14.6 9.4 27.8 24.2 27.8c11.8 0 21.9-8.6 23.3-20.3c3.3-27.4 5-55 5-82.7V256c0-97.2-78.8-176-176-176zM150.7 148.7c-9.1-10.6-25.3-11.4-33.9-.4C93.7 178 80 215.4 80 256v24.9c0 24.2-2.6 48.4-7.8 71.9C68.8 368.4 80.1 384 96.1 384c10.5 0 19.9-7 22.2-17.3c6.4-28.1 9.7-56.8 9.7-85.8V256c0-27.2 8.5-52.4 22.9-73.1c7.2-10.4 8-24.6-.2-34.2zM256 160c-53 0-96 43-96 96v24.9c0 35.9-4.6 71.5-13.8 106.1c-3.8 14.3 6.7 29 21.5 29c9.5 0 17.9-6.2 20.4-15.4c10.5-39 15.9-79.2 15.9-119.7V256c0-28.7 23.3-52 52-52s52 23.3 52 52v24.9c0 36.3-3.5 72.4-10.4 107.9c-2.7 13.9 7.7 27.2 21.8 27.2c10.2 0 19-7 21-17c7.7-38.8 11.6-78.3 11.6-118.1V256c0-53-43-96-96-96zm24 96c0-13.3-10.7-24-24-24s-24 10.7-24 24v24.9c0 59.9-11 119.3-32.5 175.2l-5.9 15.3c-4.8 12.4 1.4 26.3 13.8 31s26.3-1.4 31-13.8l5.9-15.3C267.9 411.9 280 346.7 280 280.9V256z"/></svg>
              <p className="card-title">Service personnalisé</p>
              <p className="card-description">ExpertCompta c'est aussi un assistant à votre écoute pour un service personnalisé!

</p>
            </div>
          </div>
          </Fade>
        </div>

      </div>
    </div>
  )
}

export default Homebody