import { Button, Col, Form, Row } from "react-bootstrap";

const Reservation = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="container m-5" style={{ width: "90vw" }}>
        <h1 style={{ color: "#FF6185" }}>Reservasi Consultation</h1>
        <Form className="container pt-3" onSubmit={(e) => handleSubmit.mutate(e)}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control  readOnly className="bg-secondary text-light"/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control  readOnly className="bg-secondary text-light"/>
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Born Date</Form.Label>
              <Form.Control type="date" name="bornDate" className="bg-secondary text-light" />
            </Form.Group>

            <Form.Group as={Col} md={2} controlId="formGridState">
              <Form.Label>Age</Form.Label>
              <Form.Control name="age"  className="bg-secondary text-light"/>
            </Form.Group>

            <Form.Group as={Col} md={2} controlId="formGridZip">
              <Form.Label>Height</Form.Label>
              <Form.Control name="height" className="bg-secondary text-light" />
            </Form.Group>

            <Form.Group as={Col} md={2} controlId="formGridZip">
              <Form.Label>Weight</Form.Label>
              <Form.Control name="weight" className="bg-secondary text-light" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Gender</Form.Label>

            <Form.Control type="text" readOnly className="bg-secondary text-light"/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" name="subject"  className="bg-secondary text-light"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Live Consultation Date</Form.Label>
            <Form.Control type="date" name="requestDate" className="bg-secondary text-light" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Description</Form.Label>
            <Form.Control name="description"  as="textarea" style={{ height: "100px" }} className="bg-secondary text-light"/>
          </Form.Group>

          <Button type="submit" className="d-flex px-5 m-auto" style={{ backgroundColor: "#FF6185", borderColor: "#FF6185" }}>
            Send
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Reservation