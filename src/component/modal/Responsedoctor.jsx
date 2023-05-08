import { Alert } from "bootstrap";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Table, Button } from "react-bootstrap";
import { useMutation, useQuery } from "react-query";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { API } from "../../config/api";
import bulat from '../../assets/vector/bulat1.png'
import bulat2 from '../../assets/vector/bulat2.png'

function Responsedoctor({asem},props) {

  const MySwal = withReactContent(Swal);
  const [show,setShow] = useState(false)
  const [form, setForm] = useState({
    responseText:"",
    consulLink:"",
  })

  const handleOnChange =(e)=>{
   setForm({
    ...form,
    [e.target.name]:e.target.value,
   })
  }
  
  console.log(asem.id)


  const handleOnSubmit = useMutation(async(e)=>{
    try{
      e.preventDefault()

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formData = new FormData()
      formData.set("responseText", form.responseText);
      formData.set("consulLink", form.consulLink);

      const response = await API.post("/response/"+asem.id,formData,config)
      const resp = await API.patch("/consultation/" + asem.id);
      console.log("letsgooo",response)
      console.log("gagal",resp)
    }catch(error){
      console.log("sad kali",error)
    }
  })

  return (
    <>
      <button onClick={()=>setShow(true)} type="button" className="logres btn btn-light btn-sm me-2  fw-bold" style={{ borderColor: "#FF6185", color: "#FF6185" }}>
        Response
      </button>

      <Modal show={show} onHide={()=>setShow(false)} size="lg">
        <Modal.Body>
          <Row className="gap-5">
            <Col md={7} className="ms-3">
              <h5 className="text-bold">{asem.subject}</h5>
              <p>{asem.description}</p>
            </Col>
            <Col md={4}>
              <div>
                <span className="text-bold">
                  <img src={bulat} style={{ width: "20px" }} /> Date of complaint
                </span>
                <br />
                <span className="text-gray">16 Mei 2021</span>
              </div>
              <div className="mt-3">
                <span className="text-bold">
                  <img src={bulat2}  style={{ width: "20px" }} /> Live Consultation Request
                </span>
                <br />
                <span className="text-gray">18 Mei 2021</span>
              </div>
            </Col>
          </Row>
          <Table responsive className="m-3">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Age</th>
                <th>Height</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody >
              <tr>
                <td>{asem.User.FullName}</td>
                <td>{asem.age}</td>
                <td>{asem.height}</td>
                <td>{asem.weight}</td>
              </tr>
            </tbody>
          </Table>
          <Form className="mt-3" onSubmit={(e) => handleOnSubmit.mutate(e)}>
            <Form.Group className="mb-3" controlId="formBasicGiveResponse">
              <Form.Label className="text-bold">Give Response</Form.Label>
              <Form.Control as="textarea" style={{ height: "100px" }} className="bg-input-form" name="responseText" onChange={handleOnChange} />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicLink">
                  <Form.Control type="text" className="bg-input-form" name="consulLink" placeholder="Ur Link Lmfao" onChange={handleOnChange}/>
                </Form.Group>
              </Col>
              <Col md={5}>
                <div className="d-flex justify-content-between ms-5" style={{ textDecoration: "none" }}>
                  <Button onClick={()=>setShow(false)} className="text-bold bg-danger" style={{ border: "none", color: "white", borderRadius: "10px", padding: "8px 30px" }}>
                    Cancel
                  </Button>
                  <Button type="submit" className="text-bold bg-success" style={{ border: "none", color: "white", borderRadius: "10px", padding: "8px 30px" }}>
                    Accept
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Responsedoctor;
