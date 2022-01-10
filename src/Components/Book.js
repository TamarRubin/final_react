import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Book({ book }) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.name}</Card.Title>
        <Card.Text>
          {book.publisher}.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Book;