import { useQuery } from "react-query";
import card from "../assets/card.png";
import { API } from "../config/api";
import {Col,Row,Card} from 'react-bootstrap'

export default function Listarticle() {
  let { data: article } = useQuery("filmChache", async () => {
    const response = await API.get("/CariArticle");
    console.log("data :", response.data);
    return response.data;
  });
  return (
    <div className="mt-4">
    <h2 style={{ color: "#FF6185", textAlign: "center" }}>Article Hari Ini</h2>
    <div className="container">
      <Row xs={5} md={10} className="g-4 mb-4">
        {article?.map((item, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={item.thumbnailArticle} />
              <Card.Body>
                <Card.Title  style={{ fontSize: "11pt", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3, overflow: "hidden", textOverflow: "ellipsis", textAlign: "center" }}>{item.title}</Card.Title>
                <Card.Text  style={{ fontSize: "9pt", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3, overflow: "hidden", textOverflow: "ellipsis", textAlign: "justify" }}>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </div>
  );
}
