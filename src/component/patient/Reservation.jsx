import { useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { UserContext } from "../context/userContext";
import { API } from "../../config/api";
import { useMutation } from "react-query";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";


const Reservation = () => {
  const navigate = useNavigate()
  const MySwal = withReactContent(Swal)
  const [state] = useContext(UserContext);
  const [form, setForm] = useState({
    bornDate: "",
    age: 0,
    height: 0,
    weight: 0,

    subject: "",
    liveConsul: "",
    description: "",
  });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit =useMutation( async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.set("bornDate", form.bornDate);
      formData.set("age", form.age);
      formData.set("height", form.height);
      formData.set("weight", form.weight);
      formData.set("subject", form.subject);
      formData.set("liveConsul", form.liveConsul);
      formData.set("description", form.description);

      const response = await API.post('/consulting',formData)
      console.log("letsgoo bisa",response)
      MySwal.fire({
        title: <strong>Yeay</strong>,
        text: "Consultasi anda telah terkirim",
        icon: "success",
      });
      navigate("/MyConsultation")

    } catch (error) {
      console.log("sad kali",error)
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Consultasi anda gagal",
      });
    }
    
  })

  return (
    <div className="d-flex justify-content-center">
      <div className="container m-5" style={{ width: "90vw" }}>
        <h1 style={{ color: "#FF6185" }}>Reservasi Consultation</h1>
        <Form className="container pt-3" onSubmit={(e) => handleOnSubmit.mutate(e)}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control value={state.user.fullName} readOnly className="bg-secondary text-light" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control value={state.user.phone} readOnly className="bg-secondary text-light" />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Born Date</Form.Label>
              <Form.Control type="date" name="bornDate" onChange={handleOnChange} className="bg-secondary text-light" />
            </Form.Group>

            <Form.Group as={Col} md={2} controlId="formGridState">
              <Form.Label>Age</Form.Label>
              <Form.Control name="age" onChange={handleOnChange} className="bg-secondary text-light" />
            </Form.Group>

            <Form.Group as={Col} md={2} controlId="formGridZip">
              <Form.Label>Height</Form.Label>
              <Form.Control name="height" onChange={handleOnChange} className="bg-secondary text-light" />
            </Form.Group>

            <Form.Group as={Col} md={2} controlId="formGridZip">
              <Form.Label>Weight</Form.Label>
              <Form.Control name="weight" onChange={handleOnChange} className="bg-secondary text-light" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Gender</Form.Label>
            <Form.Control type="text" value={state.user.gender} readOnly className="bg-secondary text-light" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" name="subject" onChange={handleOnChange} className="bg-secondary text-light" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Live Consultation Date</Form.Label>
            <Form.Control type="date" name="liveConsul" onChange={handleOnChange} className="bg-secondary text-light" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Description</Form.Label>
            <Form.Control name="description" onChange={handleOnChange} as="textarea" style={{ height: "100px" }} className="bg-secondary text-light" />
          </Form.Group>

          <Button type="submit" className="d-flex px-5 m-auto" style={{ backgroundColor: "#FF6185", borderColor: "#FF6185" }}>
            Send
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Reservation;
