import { useQuery } from "react-query";
import card from "../assets/card.png";
import { API } from "../config/api";

export default function Listarticle() {
  let { data: article } = useQuery("filmChache", async () => {
    const response = await API.get("/CariArticle");
    console.log("data :", response.data);
    return response.data;
  });
  return (
    <div className="mt-4">
      <h2 style={{ color: "#FF6185", textAlign: "center" }}>Article Hari Ini</h2>
      <div className="d-flex flex-wrap align-items-center justify-content-evenly">
        {article?.map((item) => (

          <div className="card m-4 shadow" style={{ maxWidth: "14rem", maxHeight: "25rem" }}>
            <img src={item.thumbnailArticle} className="card-img-top" alt="..." style={{objectFit: "cover", maxWidth: "100%", maxHeight: "100%"}}/>
            <div className="card-body">
              <h5 className="card-title text-center">{item.title}</h5>
              <p className="card-text" style={{ fontSize: "9pt", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3, overflow: "hidden", textOverflow: "ellipsis", textAlign: "justify" }}>
                {item.description}
              </p>
              <div className="text-center">
                <a href="#" className="btn text-light" style={{ backgroundColor: "#FF6185" }}>
                  Lihat Lainya
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
