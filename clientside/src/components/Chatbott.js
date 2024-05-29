import React from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components';

import './fcss/Chatbott.css'

function Chatbott() {
  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  const steps=[
    {
      id: '0',
      message: "Bonjour! C'est quoi votre prénom?",
      trigger: '1',
    },
    {
      id: '1',
      user: true,
      trigger: '2',
    },
    {
      id: '2',
      message: '{previousValue}, Comment on peut vous aider !',
      trigger:'3'
    },
    {
      id:'3',
      options:[
      { value: 1, label: 'Notre adresse', trigger: '4' },
      { value: 2, label: 'Nos horaires', trigger: '5' },
      { value: 3, label: 'Nos services', trigger: '6' },
    ]
    },
    {
      id:'4',
      message:'Notre local est situé à cité Ettahrir',
      end:true,
    },
    {
      id:'5',
      message:"Nous sommes ouvert de 9h jusqu'à 18h ",
      end:true
    },
    {
      id:'6',
      message:'Nos services en ligne sont : la comptabilité en ligne, la création des entreprises et la gestion de paie.',
      end:true,
    }
  ]
  return (
    <div className='chat'>
        <div className='text'>
          <h2>Vous avez une simple question ?</h2>
          <p>Parlez immédiatement avec notre Chatbot </p>
        </div>
        <ThemeProvider theme={theme}><ChatBot steps={steps}/></ThemeProvider>
        
    </div>
  )
}

export default Chatbott