import './App.css';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import Home from './components/Home';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Apropos from './components/Apropos';
import Login from './components/Login';
import Subscribe from './components/Subscribe';
import Forum from './components/Forum';
import Chatbott from './components/Chatbott';
import Service1 from './components/Service1';
import Service2 from './components/Service2';
import Service3 from './components/Service3';
import UserProfile from './components/UserProfile';
import PrivateRoute from './routes/PrivateRoute'
import {useDispatch, useSelector } from 'react-redux';
import UsersList from './components/UsersList';
import { useEffect, useState } from 'react';
import { getusers } from './redux/usersSlice';
import { userCurrent } from './redux/userSlice';
import Appointment from './components/Appointment';
import { getappoint } from './redux/appointSlice';
import DashContent from './components/DashContent';
import { getdemand } from './redux/demandSlice';
import Demands from './components/Demands';
import MyDemands from './components/MyDemands';
import FileUpload from './components/FileUpload';
import FileManag from './components/FileManag';
import { getfile } from './redux/fileSlice';
import ReceiveFile from './components/ReceiveFile';
import { getforum } from './redux/forumSlice';



function App() {
  const dispatch = useDispatch();
  const [ping, setping] = useState(false);
  useEffect(() => {
    dispatch(getusers());
    dispatch(userCurrent());
    dispatch(getappoint());
    dispatch(getdemand());
    dispatch(getfile());
    dispatch(getforum());
  }, [ping])
  const isAuth = localStorage.getItem("token");
  const user = useSelector((state)=>state.user?.user);

  return (
 <>
{(!isAuth || (isAuth && user?.role === "user")) ? (
  <Navbarr />
) : (
  (isAuth && user?.role === "admin") ? <Dashboard /> : null
)}
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="apropos" element={ <Apropos/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="subscribe" element={ <Subscribe/> } />
        <Route path="forum" element={ <PrivateRoute><Forum/></PrivateRoute> } />
        <Route path="chat" element={ <Chatbott/>}/>
        <Route path="service1" element={ <Service1/>}/>
        <Route path="service2" element={ <Service2/>}/>
        <Route path="service3" element={ <Service3/>}/>
        <Route path="dashboard" element={ <PrivateRoute><DashContent/></PrivateRoute>}/>
        <Route path="dashboard/userslist" element={ <PrivateRoute><UsersList/></PrivateRoute>}/>
        <Route path="dashboard/appointment" element={ <PrivateRoute><Appointment/></PrivateRoute>}/>
        <Route path="dashboard/demands" element={ <PrivateRoute><Demands/></PrivateRoute>}/>
        <Route path="dashboard/demands/files/:_id" element={<PrivateRoute><FileManag/></PrivateRoute>}/>
        <Route path="userProfile" element={<PrivateRoute><UserProfile/></PrivateRoute>}/>
        <Route path="mydemands" element={<PrivateRoute><MyDemands/></PrivateRoute>}/>
        <Route path="fileupload/:_id" element={<PrivateRoute><FileUpload/></PrivateRoute>}/>
        <Route path="receivefile/:_id" element={<PrivateRoute><ReceiveFile/></PrivateRoute>}/>
      </Routes>
      <Footer/>
 </>
  );
}

export default App;
