import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import './signUp.css'
import axios from 'axios'

import { Link } from 'react-router-dom';
import { BrowserRouter, Redirect, useHistory } from 'react-router-dom';


function SignUp() {
    const [firstname,setFirstName] = useState();
    const [lastname,setLastName] = useState();
    const [phone,setPhone] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const handleEvent=()=>{
    alert("name:" +firstname + " "+lastname+",phone:"+phone+"  ,mail+"+email+"password "+password)
    axios.post("http://localhost:5000/AddUser",{name:firstname+" "+lastname,phone:phone,mail:email,password:password})
        .then(res=>console.log("res from sign up",res));
}
    //   return (
    //         <div>
    //            <Form>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" />
    //     <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text>
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //     <Form.Check type="checkbox" label="Check me out" />
    //   </Form.Group>
    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form> 
    //         </div>
    //     )

    return (
        <form>
            <h3>שלום, נעים להכיר</h3>

            <div className="form-group">
                <label>שם פרטי</label>
                <input type="text" className="form-control" placeholder="שם פרטי"
                 onChange={(e) => { setFirstName(e.target.value) }} />
            </div>

            <div className="form-group">
                <label>שם משפחה</label>
                <input type="text" className="form-control" placeholder="שם משפחה"
                 onChange={(e) => { setLastName(e.target.value) }} />
            </div>

            <div className="form-group">
                <label>טלפון</label>
                <input type="text" className="form-control" placeholder="טלפון"
                 onChange={(e) => { setPhone(e.target.value) }} />
            </div>

            <div className="form-group">
                <label>אימייל</label>
                <input type="email" className="form-control" placeholder=" Email"
                 onChange={(e) => { setEmail(e.target.value) }} />
            </div>

            <div className="form-group">
                <label>סיסמה</label>
                <input type="password" className="form-control" placeholder="סיסמה"
                 onChange={(e) => { setPassword(e.target.value) }} />
            </div>

            <button type="submit" onClick={handleEvent} className="btn btn-dark btn-lg btn-block">הרשמה</button>
            {/* <Button variant="link">התחברות</Button> */}
            <p className="forgot-password text-right">
                כבר רשום?
                {/* <Button variant="link" onClick={getSignIn}>התחברות</Button> */}
            </p>
            {/* <Button variant="link" onClick={getSignIn}>התחברות</Button> */}

            {/* <Button type="button" onClick={getSignIn}>
                כניסה    </Button> */}
        </form>
    );
}
export default SignUp;
