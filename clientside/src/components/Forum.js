import React from 'react'
import './fcss/Forum.css'
import Accordion from 'react-bootstrap/Accordion';
import AddQuestion from './AddQuestion';
import { useSelector } from 'react-redux';


function Forum() {
  const forums = useSelector((state)=>state.forum?.forumlist);
  console.log(forums)
  return (
    <div className='forumcontainer' >
       <div className='forum'>     
<Accordion defaultActiveKey={['0']} alwaysOpen>
{
  forums?.map((el)=>
(<Accordion.Item eventKey='0'>
        <Accordion.Header><b>{el?.applicant_email} : </b>{el?.question}</Accordion.Header>
        <Accordion.Body>
        {
          el?.response ===""?(<p>Aucune reponse disponible</p>):(<p>{el?.response}</p>)
        }
        </Accordion.Body>
  </Accordion.Item>)
  )
}
      
    </Accordion>
       </div>
    <AddQuestion />
    </div>
  )
}

export default Forum