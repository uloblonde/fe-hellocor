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

  const { data: consul } = useQuery("consultationCache", async () => {
    const response = await API.get(`/consultings/${id}`);
    console.log(response.data.data);
    return response.data.data;
  });

  const { data: responses } = useQuery("responseChace", async () => {
    const response = await API.get(`/responseall`);
    return response.data.data;
  });
  consul?.map((item) => {
    console.log(
      "tesss",
      responses?.filter((res) => res.ConsulId === item.id)
    );
  });

  return (
    <Container className="mt-4">
      <h2 className="mb-3" style={{ color: "#FF6185" }}>
        Consultation
      </h2>
      {consul?.map((item, key) => (
        <Card key={key} className="shadow w-75 m-auto my-4">
          <Card.Body>
            <Row>
              <Col sm="auto" className="text-center">
                <img src={test} className="w-75 m-auto" />
              </Col>
              <Col>
                <h5>{item.subject}</h5>
                <span>Umur : {item.age}</span>
                <p>Keluhan: {item.description}</p>
              </Col>
              <Col sm="auto">Tanggal Konsultasi : {item.liveConsul}</Col>
            </Row>
            <Row>
              <Col>
              <hr style={{ width: '100%', height: '1px', backgroundColor: 'black' }} />
              </Col>
            </Row>
            <Row className="mx-5">
              {responses && responses.filter((res) => res.ConsulId === item.id).length > 0 ? (
                responses
                  .filter((res) => res.ConsulId === item.id)
                  .map((itemresponse) => (
                    <>
                      <Col md={1}>
                        <img className="nav-profile-image w-100 mt-1" alt="profile" src={tests} />
                      </Col>
                      <Col md={11} key={itemresponse.ID}>
                        <p className="text-gray">
                          {itemresponse.responseText}
                          <a href={itemresponse.consulLink}>here</a>
                        </p>
                        <p className="text-gray">dr. {itemresponse.User.fullName}</p>
                      </Col>
                    </>
                  ))
              ) : (
                <div>
                  <h4 className="text-center">Waiting For Response</h4>
                </div>
              )}
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Consultation;
