import React from 'react'
import { useSelector } from 'react-redux'
import './fcss/MyDemands.css'
import { Link } from 'react-router-dom';


function MyDemands() {
    const demands = useSelector((state)=>state.demand.demandlist);
    const user = useSelector((state) => state.user?.user);
    const demand = demands?.filter((el)=> el?.applicant_email === user?.email);

  return (
    <div className='demands'>
    
        {demand?.map((el)=>
        (<table className='demandtab'>
          <tr>
                <td style={{fontWeight:'bold'}}>Référence de la demande</td>
                <td>{el?._id}</td>
          </tr>
          <tr>
                <td style={{fontWeight:'bold'}}>Service  </td>
                <td>{el?.service}</td>
          </tr>
          <tr>
                <td style={{fontWeight:'bold'}}>Statut de la demande</td>
                <td>{el?.status}</td>
            </tr>
            {el?.status !== 'en cours' ? (
                    <tr>
                        <td colSpan={2}>
                            <Link to={`/fileupload/${el?._id}`} style={{ float: 'right', marginLeft: '1%',color:'blue' }}>Envoyer des documents</Link>
                            <Link to={`/receivefile/${el?._id}`}style={{ float: 'right', color:'red'}}>Documents reçus</Link>
                        </td>
                    </tr>
             ):(null)
            }
            
        </table> )
        )}

    
    </div>
  )
}

export default MyDemands