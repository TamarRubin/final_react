import Modal1 from './modal'
import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import axios from 'axios'

function Ad ({ ad }) {
  const [book, setBook] = useState({ name: '' })
  useEffect(() => {
    //alert(id)
    console.log('ad : ', ad)
    axios.get(`http://localhost:5000/getBookById/${ad.bookID}`).then(res => {
      debugger
      console.log(res.data[0])
      console.log(res.data[0].name)
      setBook(res.data[0])
    })
  }, [])

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={'img'} />
      <Card.Body>
        <Card.Title>{book?.name}</Card.Title>
        <Card.Text>{'sss'}.</Card.Text>
        {/* <Modal1 ad={ad} book={book}></Modal1> */}
      </Card.Body>
    </Card>
  )
}

export default Ad
