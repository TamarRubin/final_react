import React,{useState,useEffect} from 'react';
import axios from  'axios'
import {  Button,Modal} from 'react-bootstrap';
function MyVerticallyCenteredModal(props) {

const [color, setColor] = React.useState(null);

useEffect(() => {
 setColor('white')
}, []);
const showDitails = (event) => {
  if("user" in localStorage){
    setColor('black')
    axios
    .post('http://localhost:5000/addIntrested', {
      userID:JSON.parse(localStorage.getItem('user')).id,
      categoryID: props.ad.category_id,
    })
    .then(res1 => {
      console.log('add intrested', res1)
    })
  }else{
    alert("משתמש לא רשום אינו יכול לצפות בפרטי מוכר")
  }
  
}
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          שם הספר:  {props.ad.book_name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <tr>
          <td>
             <h4>שם הסופר : {props.ad.writer_name}  </h4>
        
        <h4>קטגוריה : {props.ad.category_name}  </h4>
        <h4>הוצאה לאור : {props.ad.publish}  </h4>
        <h4>מחיר : {props.ad.price}  </h4>
          </td>
        </tr>
        
       {/*  <p>
          תמונה
        </p> */}
      </Modal.Body>
      <Modal.Footer>
        <h5 style={{color}}>{props.ad?.user_name}</h5>
        <h5 style={{color}}>{props.ad?.user_phone}</h5>
        <h5 style={{color}}>{props.ad?.user_mail}</h5>
        <Button onClick={showDitails}>פרטי מוכר</Button>
        <Button onClick={props.onHide}>סגור</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Modal1({ad}) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
       הצגת מודעה
      </Button>

      <MyVerticallyCenteredModal
      ad ={ad}
      
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
   </div>
  );
}
export default Modal1