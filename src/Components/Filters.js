import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form'
import axios from 'axios'

function Filters() {
  const [cities, setcities] = useState([]);
  const [books, setBooks] = useState([]);
  const [writers, setWriters] = useState([]);
  const [publishings, setPublishings] = useState([]);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    debugger
    axios.get("http://localhost:5000/getAllcities")
      .then(res => {
        console.log(res.data);
        setcities(res.data);
      })
      .catch((err) => console.log(err));

    axios.get("http://localhost:5000/getAllBooks")
      .then(res => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));

      axios.get("http://localhost:5000/getAllPublishings")
      .then(res => {
        console.log(res.data);
        setPublishings(res.data);
      })
      .catch((err) => console.log(err));

      axios.get("http://localhost:5000/getAllCategories")
      .then(res => {
        console.log(res.data);
        setCategories(res.data);
      })
      .catch((err) => console.log(err));

  }, []);
  return <div>
    <Form.Select aria-label="Default select example">
      <option>בחר עיר</option>
      {cities?.map(city => <option key={city?.name}>{city?.name}</option>)}
    </Form.Select>

    <Form.Select aria-label="Default select example">
      <option>בחר ספר</option>
      {books?.map(book => <option key={book?.name}>{book?.name}</option>)}
    </Form.Select>

 <Form.Select aria-label="Default select example">
      <option>בחר סופר</option>
      {writers?.map(writer => <option key={writer?.name}>{writer?.name}</option>)}
    </Form.Select>

    <Form.Select aria-label="Default select example">
      <option>בחר הוצאה</option>
      {publishings?.map(publishing => <option key={publishing?.name}>{publishing?.name}</option>)}
    </Form.Select>

    <Form.Select aria-label="Default select example">
      <option>בחר קטגוריה</option>
      {categories?.map(category => <option key={category?.name}>{category?.name}</option>)}
    </Form.Select>

{/* 
    <Form.Select aria-label="Default select example">
      <option>בחר אזור</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select> */}
    <input type="button" value="חיפוש" className="btn btn-dark btn-lg btn-block" /> */}

  </div>

}
export default Filters;


