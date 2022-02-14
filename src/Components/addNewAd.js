import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
//import './signUp.css'
import axios from 'axios'

import { Link } from 'react-router-dom'
import {
  BrowserRouter,
  Redirect,
  useHistory,
  useParams
} from 'react-router-dom'
import AddNewBook from './addNewBook'

function AddNewAd () {
  const [bookName, setBookName] = useState()
  const [bookId, setBookId] = useState()

  // const [writerName,setWriterName] = useState();
  // const [publishName,setPublishName] = useState();
  // const [category,setCategory] = useState();
  // const [isbn,setIsbn] = useState();
  // const [image,setImage] = useState();
  // const [price,setPrice] = useState();
  const history = useHistory()

  const handleEvent = () => {
    console.log('book', bookName)
    axios.get(`http://localhost:5000/getIdBookByName/${bookName}`).then(res => {
      console.log('res', res)

      if (res.data.length != 0) {
        alert("הספר קיים במערכת")
        history.push(`/addPrice/${bookName}/${1}`)
      } else {
        history.push(`/AddNewBook/${bookName}`)
       
      }
    })
  }

  return (
    <form>
      <h3>פרסום ספר</h3>

      <div className='form-group'>
        <label>שם הספר</label>
        <input
          type='text'
          className='form-control'
          placeholder='שם הספר'
          onChange={e => {
            setBookName(e.target.value)
          }}
        />
      </div>

      <button
        type='button'
        onClick={handleEvent}
        className='btn btn-dark btn-lg btn-block'
      >
        חיפוש ספר
      </button>
    </form>
  )
}
export default AddNewAd
