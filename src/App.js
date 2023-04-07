import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import './App.css';
import './Assets/Styles/Main.css';
import Addplans from './Pages/Addplans';
import Adduser from './Pages/Adduser';
import Affilate from './Pages/Affiliate';
import Homepage from './Pages/homepage';
import Parents from './Pages/Parents';
import Subscription from './Pages/Subscription';
import Supportmessage from './Pages/Supportmessage';
import Transacationhistory from './Pages/Transactionhistory';
import Withdrawlrequest from './Pages/Withdrawlrequest';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={ <Homepage/>}/>
    <Route path='/Parents' element={<Parents/>}/>
    <Route path='/Affiliate' element={<Affilate/>}/>
    <Route path='/Adduser' element={<Adduser/>}/>
    <Route path='/Subscription' element={<Subscription/>}/>
    <Route path='/Addplans' element={<Addplans/>}/>
    <Route path='/Transactionhistory' element={<Transacationhistory/>}/>
    <Route path='/Withdrawlrequest' element={<Withdrawlrequest/>}/>
    <Route path='/Supportmessage' element={<Supportmessage/>}/>

   </Routes>
  </BrowserRouter>
   
 
 
  
   </>
  );
}

export default App;
