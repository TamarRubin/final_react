import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SignIn from './Components/signIn/SignIn';
import Header from './Components/Header';
import SignUp from './Components/signUp/signUp.component';
import FirstPage from './Components/FirstPage';
import Filters from './Components/Filters'
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
          <Route path="/signUp">
            <SignUp></SignUp>
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
      {/* <FirstPage></FirstPage> */}
    </>

  );
}

export default App;