import React from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { BrowserRouter, Redirect, useHistory } from 'react-router-dom';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/signUp.component';
const loggedInUser = localStorage.getItem("user");
function Header() {
  const history = useHistory();

  function getSignIn() {
    history.push('signIn');
  }
  function getSignUp() {
    history.push('signUp');
  }
  function getAddNewAd() {
    history.push('AddNewAd');
  }
  function getFilters() {
    history.push('Filters');
  }
  return <div>
    
    <Button type="button" onClick={getSignIn} className='button'>
      כניסה    </Button>


    <Button type="button" onClick={getSignUp}>
      הרשמה    </Button>


    <Button type="button" onClick={getAddNewAd}>
      +פרסום מודעה חדשה    </Button>

      <Button type="button" onClick={getFilters}>
       חיפוש ספר    </Button>


  </div>
}
export default Header;
