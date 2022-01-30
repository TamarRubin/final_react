import React,{useState} from 'react';
import axios from  'axios'
import {  Button,Modal} from 'react-bootstrap';
function MyVerticallyCenteredModal(props) {

const [okAds,setOkAds] = useState();
const [userID,setIDuser] = useState();
const [bookID,setIDbook] = useState();
const [price,setPrice] = useState();
  axios.get("http://localhost:5000/getAllOkAds")
  .then((res)=>{
   // alert(res.data[0])
    debugger
      setOkAds(res.data);
      console.log("res from modal ",res)
      setIDuser(res.data[0].userID)
      setIDbook(res.data[0].bookID)
     // alert(res.data[0].bookID +": book id")
      setPrice(res.data[0].price)
      debugger
     // alert("hello " +res.data.id );     
  }); 
  debugger

    const [name,setName] = useState();
    const [writerName,setWriterName] = useState();
    const [publishName,setPublishName] = useState();
    const [category,setCategory] = useState();
    const [isbn,setIsbn] = useState();
    const [image,setImage] = useState();

axios.get(`http://localhost:5000/getBookById/:${bookID}`)
  .then((res)=>{
    setName(res.data.name)
      setWriterName(res.data.writerID)
      setPublishName(res.data.publishingID)
      setCategory(res.data.categoryID)
      setImage(res.data.picture)
      console.log("res from modal ",res)
         
  });
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          שם הספר: + {name} 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>שם הסופר - + {writerName}  </h4>
        <h4>מצב הספר + {name} </h4>
        <h4>קטגוריה -+ {category}  </h4>
        <h4>מחיר -+ {price}  </h4>
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