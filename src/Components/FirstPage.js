import React from 'react';
import { setState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
// import Filters from './Filters';
import Ads from './Ads';
import SignUp from './signUp/signUp.component';
import SignIn from './signIn/SignIn';
import Album from './ads1'
import Filters from './Filters';

function FirstPage() {
  useEffect(() => {
    
  }, []);
  const greeting = 'Hello Function Component!';
  const signInLink = SignIn;
  return <div>
    <center>
    <Filters/>
    </center>
    
    <Album />
  </div>;
}

export default FirstPage;