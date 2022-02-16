import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
//import './signUp.css'
import axios from 'axios'

import { Link } from 'react-router-dom';
import { BrowserRouter, Redirect, useHistory , useParams} from 'react-router-dom';
import AddNewBook from './addNewBook';

export function AddPrice() {
    
    const [bookId,setBookId] = useState();

  
    const [price,setPrice] = useState();
    const history = useHistory();
    const UserId = localStorage.user.id
    const bookName = this.params.name
    const status = this.params.status
    const handleEvent=()=>{
    //alert("name:" +bookName + " "+lastname+",phone:"+phone+"  ,mail+"+email+"password "+password)
    axios.post("http://localhost:5000/Addad",{adsiduser:UserId,adsNamebook:bookName,adsprice:price,adstype:status})
       .then(res=>console.log("res from sign up",res));
    debugger

}

    return (
        <form>
            <h3>פרסום ספר</h3>

            <div className="form-group">
                <label>מחיר</label>
                <input type="text" className="form-control" placeholder="מחיר"
                 onChange={(e) => { setPrice(e.target.value) }} />
            </div>

        
           


            <button type="submit" onClick={handleEvent} className="btn btn-dark btn-lg btn-block">הוספת מודעה</button>
            {/* <Button variant="link">התחברות</Button> */}
           
        </form>
    );
}

