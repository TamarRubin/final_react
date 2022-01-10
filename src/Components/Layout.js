import React from 'react';
import Header from './Header';
import Filters from './Filters';
import Books from './Books';
import SignUp from './signUp/signUp.component';
import SignIn from './signIn/SignIn';
function Layout() {
  const greeting = 'Hello Function Component!';
  return <div>
    <SignIn />
    {/* < SignUp/>
  <Header/>
  <Filters/>
  <Books/> */}
  </div>;
}
export default Layout;
