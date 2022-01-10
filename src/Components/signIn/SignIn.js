import React,{useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import{useHistory} from 'react-router-dom'
import axios from 'axios';
export default function SignIn() {
const [email,setEmail] = useState();
const [password,setPassword] = useState();
const [name,setName] = useState()
const history = useHistory();
const handleEvent=()=>{
  
 axios.post("http://localhost:5000/getUserByPassword",{email:email,password:password})
        .then((res)=>{
            setName(res.data.name);
            console.log("res from sign in",res)
            alert(name);
            if(res.status === 200){
                history.push('/filters')
            }
        }); 
        //debugger
      
    }
    return (
<div>
        <form>

            <h3>שלום, טוב לראותך{name}</h3>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="email"
                  onChange={(e) => { setEmail(e.target.value) }} />
                                        
            </div>

            <div className="form-group">
                <label>סיסמה</label>
                <input type="password" className="form-control" placeholder="סיסמה"
                onChange={(e) => { setPassword(e.target.value) }}  />
            </div>

            {/* <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div> */}
<input type="button" onClick={handleEvent} value="התחברות" className="btn btn-dark btn-lg btn-block"/>
            {/* <button onClick={handleEvent}  className="btn btn-dark btn-lg btn-block">התחברות</button> */}
            {/* <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p> */}
        </form>
        <div>
            <h1>name.body</h1>
        </div>
</div>
    );
}
