import React, { useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignIn from './Components/signIn/SignIn'
import Header from './Components/Header'
import SignUp from './Components/signUp/signUp.component'
import FirstPage from './Components/FirstPage'
import Filters from './Components/Filters'
import AddNewAd from './Components/addNewAd'
import Manager from './Components/manager'
import AddNewBook from './Components/addNewBook'
import AddPrice from './Components/addPrice'
import SignInSide from './Components/signIn/LoginSide'
import SignUpSide from './Components/signUp/signUp2'
import VerticalLinearStepper from './Components/stepper'
//import DropdownFilterCell from './Components/filters1';
//import dashboard from './Components/dashboard';
//import Preferences from './Components/Preferences';
function App () {
 
  return (
    <>
      <Router>
        <Header />
        
        <Switch>
        <Route path='/signIn'>
        <SignInSide></SignInSide>
          </Route>
          <Route path='/Manager'>
            <Manager></Manager>
          </Route>
          <Route path='/signUp'>
            <SignUpSide></SignUpSide>
          </Route>
          <Route path='/AddNewAd'>
            <VerticalLinearStepper></VerticalLinearStepper>
          </Route>
          <Route path='/AddNewBook/:name'>
            <AddNewBook></AddNewBook>
          </Route>
          
          <Route path='/addPrice/:bookName/:status'>
            <AddPrice />
          </Route>
          <Route path="/filters">
           <Filters/>
          </Route>
          <Route exact path='/'>
            <FirstPage></FirstPage>
          </Route>
        </Switch>
      </Router>
      

    </>
  )
}

export default App
