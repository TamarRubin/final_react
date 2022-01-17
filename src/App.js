import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SignIn from './Components/signIn/SignIn';
import Header from './Components/Header';
import SignUp from './Components/signUp/signUp.component';
import FirstPage from './Components/FirstPage';
import Filters from './Components/Filters'
import AddNewAd from './Components/addNewAd';
import Manager from './Components/manager';
//import DropdownFilterCell from './Components/filters1';
//import dashboard from './Components/dashboard';
//import Preferences from './Components/Preferences';
function App() {


  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/signIn">
            <SignIn></SignIn>
          </Route>
          <Route path="/Manager">
            <Manager></Manager>
          </Route>
          <Route path="/signUp">
            <SignUp></SignUp>
          </Route>
          <Route path="/AddNewAd">
            <AddNewAd></AddNewAd>
          </Route>
          <Route>
          <Route path="/filters">
           <Filters/>
          </Route>
          </Route>
          <Route path="/">
            <FirstPage></FirstPage>
          </Route>
        </Switch>
      </Router>

       <FirstPage></FirstPage>
    </>

  );
}

export default App;