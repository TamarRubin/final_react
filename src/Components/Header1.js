import React from 'react'
import './Header.css'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { BrowserRouter, Redirect, useHistory } from 'react-router-dom'
import SignIn from './signIn/SignIn'
import SignUp from './signUp/signUp.component'
const loggedInUser = localStorage.getItem('user')
function Header () {
  const history = useHistory()

  function getSignIn () {
    history.push('signIn')
  }
  function getSignUp () {
    history.push('signUp')
  }
  function getAddNewAd () {
 
    if("user" in localStorage){
    history.push('AddNewAd')
   } else{
    alert("משתמש לא רשום אינו יכול להוסיף מודעה")
    history.push('signIn')
   }
  }
  function getFilters () {
    history.push('Filters')
  }
  return (
    <div>
      <div class='parent'>
        <div class='div1'> </div>
        <div class='div2'><img src='/images/logo.png'/> </div>
        <div class='div3'> </div>
        <div class='div4'>
          <Button type='button' onClick={getSignIn} className='button'>
            כניסה{' '}
          </Button>{' '}
        </div>
        <div class='div5'>
          <Button type='button' onClick={getSignUp}>
            הרשמה{' '}
          </Button>
        </div>
        <div class='div6'>
          <Button type='button' onClick={getAddNewAd}>
            +פרסום מודעה חדשה{' '}
          </Button>
        </div>
        <div class='div7'>
          <Button type='button' onClick={getFilters}>
            חיפוש ספר{' '}
          </Button>{' '}
        </div>
        <div class='div7'>
          <Button type='button' onClick={getFilters}>
            מענין לדעת{' '}
          </Button>{' '}
        </div>
      </div>
    </div>
  )
}
export default Header
