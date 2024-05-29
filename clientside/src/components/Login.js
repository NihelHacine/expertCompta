import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './fcss/Login.css'
import { userLogin } from '../redux/userSlice';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //state login 
  const [login, setlogin] = useState({
    email : "" ,
    password :"" , 
  })

  const user = useSelector((state) => state.user?.user);
  const isAuth = localStorage.getItem('token');


  return (
    <>
    {!isAuth?(
    <div className='logine'>
    <div className="container">
     <div className="screen">
       <div className="screen__content">
         <form className="login" onSubmit={(e)=> e.preventDefault()}>
           <div className="login__field">
             <i className="login__icon fas fa-user" />
             <input type="text" className="login__input" placeholder="Email" onChange={(e)=> setlogin({...login,email : e.target.value})}/>
           </div>
           <div className="login__field">
             <i className="login__icon fas fa-lock" />
             <input type="password" className="login__input" placeholder="Mot de passe" onChange={(e)=> setlogin({...login,password : e.target.value})}/>
           </div>
           <button className="button login__submit" onClick={() => {dispatch(userLogin(login)); 
            // if (isAuth&&login?.email === "admin@gmail.com") 
            //   {navigate("/dashboard");}
            // else if (isAuth&&login?.email !== "admin@gmail.com") 
            //   {navigate("/");}
             
            //  else{navigate('/login');};
             }}>
             <span className="button__text">Se connecter </span>
             <i className="button__icon fas fa-chevron-right" />
           </button>			
         </form>
       </div>
       <div className="screen__background">
         <span className="screen__background__shape screen__background__shape4" />
         <span className="screen__background__shape screen__background__shape3" />		
         <span className="screen__background__shape screen__background__shape2" />
         <span className="screen__background__shape screen__background__shape1" />
       </div>		
     </div>
   </div>
 </div>
    ):
    (
      login?.email === 'admin@gmail.com' ? (
        navigate('/dashboard')
      ) : (
        navigate('/')
      ))
    }

    </>
  )
}

export default Login