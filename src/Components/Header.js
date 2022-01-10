import React from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { BrowserRouter, Redirect, useHistory } from 'react-router-dom';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/signUp.component';
function Header() {
  const history = useHistory();

  function getSignIn() {
    history.push('signIn');
  }
  function getSignUp() {
    history.push('signUp');
  }
  return <div>
    {/* <SignIn />
    <SignUp /> */}
    {/* <Button onClick={() => setState({view: 1})}>התחברות</Button>{' '}
{this.state.view === 1 ? <SignIn/> : ''}  */}
    {/* {/* 3 כפתורים: 1 sign in , sign up , פרסום מודעה חדשה */}


    <Button type="button" onClick={getSignIn}>
      כניסה    </Button>


    <Button type="button" onClick={getSignUp}>
      הרשמה    </Button>


    <Button type="button" onClick={getSignUp}>
      +פרסום מודעה חדשה    </Button>

    {/* 
    <Link to="/SignIn">
      <button variant="dark">הרשמה
      </button>
    // </Link> */}
    {/* // <Button variant="dark">הרשמה</Button>{' '}
    // <Button variant="dark">התחברות</Button>{' '}
    // <Button variant="dark">+ פרסום מודעה חדשה</Button>{' '}    */}


  </div>
}
export default Header;
