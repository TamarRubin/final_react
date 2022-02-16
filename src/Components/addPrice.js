import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

import { Link, withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function AddPrice (props) {
  
  const [price, setPrice] = useState()
  const history = useHistory()
  const UserId = JSON.parse(localStorage.getItem('user')).id
  const bookName = props.match.params.bookName
  const status = props.match.params.status
  const [bookID, setBookID] = useState()
  useEffect(() => {

    axios
      .get(`http://localhost:5000/getIdBookByNameNotOk/${bookName}`)
      .then(res => {
        console.log('res', res)
        debugger
        setBookID(res.data[0].id)
      })
  }, [])

  const handleEvent = () => {
    debugger
    axios
      .post('http://localhost:5000/Addad', {
        adsiduser: UserId,
        adsNamebook: bookID,
        adsprice: price,
        adstype: status
      })
      .then(res1 => {
        console.log('res from add ad', res1)
        if(res1.status === 200){
           alert(" המודעה נוספה בהצלחה")
           history.push("/")
        }
       
      
      })
  }

  return (
    <form>
      <h3>פרסום ספר</h3>

      <div className='form-group'>
        <label>מחיר</label>
        <input
          type='text'
          className='form-control'
          placeholder='מחיר'
          onChange={e => {
            setPrice(e.target.value)
          }}
        />
      </div>

      <button
        type='button'
        onClick={handleEvent}
        className='btn btn-dark btn-lg btn-block'
      >
        הוספת מודעה
      </button>
    </form>
  )
}
export default withRouter(AddPrice)
