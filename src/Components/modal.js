import React,{useState} from 'react';
import axios from  'axios'
import {  Button,Modal} from 'react-bootstrap';
function MyVerticallyCenteredModal(props) {

const [idAd,setIDad] = useState();
const [userID,setIDuser] = useState();
const [bookID,setIDbook] = useState();
const [price,setPrice] = useState();
  // axios.get("http://localhost:5000/getFirstOkAd")
  // .then((res)=>{
  //     setIDad(res.data.idAd);
  //     console.log("res from sign in",res)
     
  //     debugger
  //    // alert("hello " +res.data.id );
      
      
  // }); 
  //debugger


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          שם הספר: 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>שם הסופר - </h4>
        <h4>מצב הספר</h4>
        <h4>קטגוריה - </h4>
        <p>
          תמונה
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>סגור</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Modal1() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
       הצגת מודעה
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
   </div>
  );
}
export default Modal1