import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
//import './signUp.css'
import axios from 'axios'

import { Link } from 'react-router-dom';
import { BrowserRouter, Redirect, useHistory } from 'react-router-dom';


function AddNewAd() {
    const [bookName,setBookName] = useState();
    const [bookId,setBookId] = useState();

    const [writerName,setWriterName] = useState();
    const [publishName,setPublishName] = useState();
    const [category,setCategory] = useState();
    const [isbn,setIsbn] = useState();
    const [image,setImage] = useState();
    const [price,setPrice] = useState();
    const handleEvent=()=>{
    //alert("name:" +bookName + " "+lastname+",phone:"+phone+"  ,mail+"+email+"password "+password)
    //axios.post("http://localhost:5000/AddUser",{name:firstname+" "+lastname,phone:phone,mail:email,password:password})
    //    .then(res=>console.log("res from sign up",res));

    axios.get("http://localhost:5000/getIdBookByName:{bookName}")
        .then(res=>setBookId(res.data.id))
    if (bookId != ""){
        axios.post("http://localhost:5000/AddAd",{adsiduser: JSON.stringfy(localStorage.getItem('user')).id,
        adsidbook: bookId, adsprice:price,  adstype: 1})
    }else{
        //pass to the manager
    }
}

    return (
        <form>
            <h3>פרסום ספר</h3>

            <div className="form-group">
                <label>שם הספר</label>
                <input type="text" className="form-control" placeholder="שם הספר"
                 onChange={(e) => { setBookName(e.target.value) }} />
            </div>

            <div className="form-group">
                <label>שם הסופר</label>
                <input type="text" className="form-control" placeholder="שם הסופר"
                 onChange={(e) => { setWriterName(e.target.value) }} />
            </div>


            <div className="form-group">
                <label>הוצאה</label>
                <input type="text" className="form-control" placeholder="הוצאה"
                 onChange={(e) => { setPublishName(e.target.value) }} />
            </div>

            <div className="form-group">
                <label>קטגוריה</label>
                <input type="password" className="form-control" placeholder="קטגוריה"
                 onChange={(e) => { setCategory(e.target.value) }} />
            </div>

            <div className="form-group">
                <label>isbn</label>
                <input type="text" className="form-control" placeholder="isbn"
                 onChange={(e) => { setIsbn(e.target.value) }} />
            </div>
            <div className="form-group">
                <label>תמונה</label>
                <input type="text" className="form-control" placeholder="תמונה"
                 onChange={(e) => { setImage(e.target.value) }} />
            </div>

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
export default AddNewAd;
