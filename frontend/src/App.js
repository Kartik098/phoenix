import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signup from './Pages/signup';
import Home from './Pages/Home';
import './home.css'
import Login from './Pages/login';
import IntakeModal from './components/Modals/IntakeModal';


const App = () => {
  const [token, setToken] = useState('');
  const userLogin = (tok)=>{
    setToken(tok);
      console.log(token)
  }

  return (
    <>
    <Router>
    <img className='logo' src="/images/gshlogo.jpg" alt='logo is not available'/>
   <Routes>

    <Route path="/signup" exact element={<Signup />}  />
    <Route path="/login" exact element={<Login userLogin={userLogin} />}  />
    <Route path="/api/add-new-site/" exact element={<IntakeModal requestType="post" />}  />
    <Route path="/" exact element={<Home />}  />
    
   </Routes>
      
    
  </Router></>
  )
};


export default App;
