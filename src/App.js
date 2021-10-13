import React from "react";
import {
  BrowserRouter ,
  Switch,
  Route,
} from "react-router-dom"; 
import './App.css';
import Home from './Pages/Home';
import 'antd/dist/antd.css';
import ManagementHome from "./Pages/ManagementHome";
import UserChart from "./Components/UserChart";
import PersonelHome from "./Pages/PersonelHome";
import Adminpanel from "./Pages/Adminpanel";
import MailControls from "./Components/MailControl";
import MailError from "./Components/MailError";



function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/managementhome'>
          <ManagementHome></ManagementHome>
        </Route>
        <Route path='/management'>
          <UserChart></UserChart>
        </Route>
        <Route path='/personel'>
         <PersonelHome></PersonelHome>
        </Route>
        <Route path='/admin'>
         <Adminpanel></Adminpanel>
        </Route>
        <Route path='/control'>
         <MailControls></MailControls>
        </Route>
        <Route path='/mailerror'>
         <MailError></MailError>
        </Route>
        

      </Switch>
    
    
    </BrowserRouter>



   
    </>
  );
}

export default App;
