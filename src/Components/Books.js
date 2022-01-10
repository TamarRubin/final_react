import React, { useState } from 'react';
import Book from './Book'
import { Table } from "react-bootstrap"
function Books() {
  const [books, setBooks] = useState([{
    name: "lalala",
    publisher: "vjhvxj",
    img: "https://dalicanvas.co.il/wp-content/uploads/2020/02/%D7%A9%D7%A7%D7%99%D7%A2%D7%94-%D7%A7%D7%9C%D7%90%D7%A1%D7%99%D7%AA-1.jpg"
  }, {
    name: "lalala",
    publisher: "vjhvxj",
    img: "https://dalicanvas.co.il/wp-content/uploads/2020/02/%D7%A9%D7%A7%D7%99%D7%A2%D7%94-%D7%A7%D7%9C%D7%90%D7%A1%D7%99%D7%AA-1.jpg"
  }, {
    name: "lalala",
    publisher: "vjhvxj",
    img: "https://dalicanvas.co.il/wp-content/uploads/2020/02/%D7%A9%D7%A7%D7%99%D7%A2%D7%94-%D7%A7%D7%9C%D7%90%D7%A1%D7%99%D7%AA-1.jpg"
  }, {
    name: "lalala",
    publisher: "vjhvxj",
    img: "https://dalicanvas.co.il/wp-content/uploads/2020/02/%D7%A9%D7%A7%D7%99%D7%A2%D7%94-%D7%A7%D7%9C%D7%90%D7%A1%D7%99%D7%AA-1.jpg"
  }])
  return (
    <Table>
      <tbody>
        <tr>
          {books.map(book =>
            <td>
              <Book book={book}></Book>
            </td>
          )}
        </tr>


      </tbody>
    </Table>

  )
}

export default Books;