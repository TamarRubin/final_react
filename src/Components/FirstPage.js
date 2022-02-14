import React from 'react';
import { setState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
// import Filters from './Filters';
import Ads from './Ads';
import SignUp from './signUp/signUp.component';
import SignIn from './signIn/SignIn';


import { Button } from 'react-bootstrap'
function FirstPage() {
  const greeting = 'Hello Function Component!';
  const signInLink = SignIn;
  return <div>
    <Ads />
  </div>;
}

export default FirstPage;