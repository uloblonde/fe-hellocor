import { Card, Col, Container, Row } from "react-bootstrap";

const Consultation = () => {
  return (
    <Container className="mt-4">
      <h2 style={{color:"#FF6185"}}> Consultation</h2>
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <img />
            </Col>
            <Col>
              <Row>
                <Col>
                  <h5></h5>
                  <span>10 April 2023</span>
                </Col>
                <Col>11 April 2023</Col>
                <p>Keluhan: </p>
              </Row>
            </Col>
          </Row>
          <hr />
          <Row className="mx-5">
            <Col md={1}>
              <img className="nav-profile-image" alt="profile" />
            </Col>
            <Col md={11}>
              <p className="text-gray">Hi hari ini adalah jadwal konsultasi kamu, silahkan klik link berikut untuk melakukan konsultasi secara langsung kepada saya :</p>
              <p className="text-gray">Dr. Muhammad Rizki </p>
            </Col>
          </Row>
          :
          <Row className="mx-5">
            <h4 className="text-center text-gray text-bold">Reject</h4>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Consultation;
