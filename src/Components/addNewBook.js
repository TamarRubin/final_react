import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
//import './signUp.css'
import axios from 'axios'

import { Link } from 'react-router-dom';
import { BrowserRouter, Redirect, useHistory } from 'react-router-dom'; 

  function AddNewBook(props){

     
      
    const [writerName,setWriterName] = useState();
    const [publishName,setPublishName] = useState();
    const [category,setCategory] = useState();
    const [isbn,setIsbn] = useState();
    const [image,setImage] = useState();
    const [price,setPrice] = useState();

    const history = useHistory();
     debugger
    axios.post("http://localhost:5000/AddBook",{isbn:isbn, name:props.name,publishing:publishName,writer:writerName,status:category,image:image,confirm:0})
        .then((res)=>{
             console.log("res from add book",res)
             history.push({pathname:'/addPrice',state: {name:props.location.state.name , state:0}})
               }
          );
     return(
<form>

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
</form>


    ) 
  }
export default AddNewBook
