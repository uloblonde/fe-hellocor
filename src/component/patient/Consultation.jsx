import { Card, Col, Container, Row } from "react-bootstrap";
import test from "../../assets/Profilerounded.png";
import tests from "../../assets/IconDoctor.png";
import { useQuery } from "react-query";
import { API } from "../../config/api";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Consultation = () => {
  const [state] = useContext(UserContext);

  const id = state.user.id;

  console.log(id);

  const { data: consul } = useQuery("consultationCache", async () => {
    const response = await API.get(`/consultings/${id}`);
    console.log("babi", response.data.data);
    return response.data.data;
  });

  return (
    <Container className="mt-4">
      <h2 className="mb-3" style={{ color: "#FF6185" }}>
        Consultation
      </h2>
      {consul?.map((item,key) => (
        <Card key={key} className="shadow w-75 m-auto my-4">
          <Card.Body>
            <Row>
              <Col sm="auto" className="text-center">
                <img src={test} className="w-75 m-auto" />
              </Col>
              <Col>
                <h5>{item.subject}</h5>
                <span>{item.bornDate}</span>
                <p>Keluhan: {item.description}</p>
              </Col>
              <Col sm="auto">{item.liveConsul}</Col>
            </Row>
            
            <Row className="mx-5">
              <Col md={1}>
                <img className="nav-profile-image w-100 mt-1" alt="profile" src={tests} />
              </Col>
              <Col md={11}>
                <p className="text-gray">Hi hari ini adalah jadwal konsultasi kamu, silahkan klik link berikut untuk melakukan konsultasi secara langsung kepada saya :</p>
                <p className="text-gray">Dr. Muhammad Rizki </p>
              </Col>
            </Row>
            :
            <Row className="mx-5">
              <h4 className="text-center text-gray text-bold">Waiting For Reply</h4>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Consultation;
