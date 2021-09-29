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
        
      </Switch>
    
    
    </BrowserRouter>



   
    </>
  );
}

export default App;
