import Modal1 from './modal';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
// const openModal=()=>{
//   return <Modal></Modal>
// }
function Book({ book }) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.name}</Card.Title>
        <Card.Text>
          {book.publisher}.
        </Card.Text>
        <Modal1></Modal1>
      </Card.Body>
    </Card>
  );
}

export default Book;