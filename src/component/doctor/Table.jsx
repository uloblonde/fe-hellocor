import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { useQuery } from "react-query";
import { API } from "../../config/api";
import search from "../../assets/vector/search.png";
import Swal from "sweetalert2";
import Responsedoctor from "../modal/Responsedoctor";

export default function Table() {
  const [state] = useState(UserContext);
  const [response, setResponse] = useState(false);
  const [idconsul, setIdConsul] = useState(0);
  const [consultations, setConsultations] = useState([]);

  const { data: consul } = useQuery("ResponseChache", async () => {
    const response = await API.get("/consultings");
    console.log("Babi ", response.data.data);
    return response.data.data;
  });

  async function rejectCons(id) {
    try {
      const response = await API.patch("/consultation-reject/" + id);
      console.log("andai ku malaikat", response);

      Swal.fire({
        title: "Success!",
        text: "Consultation berhasil direject",
        icon: "success",
        confirmButtonText: "Kembali",
      });
      window.location.reload();
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Consultation gagal direject",
        icon: "Error",
        confirmButtonText: "Kembali",
      });
    }
  }

  return (
    <div className=" py-2">
      <style>ds</style>
      <div className="container">
        <h3 className="pt-5 text-center" style={{ color: "#FF6185" }}>
          Reservasi Data
        </h3>
        <div className="pt-4">
          <table class="table table-lighttable-hover rounded shadow w-75 m-auto">
            <thead>
              <tr className="" style={{ color: "#FF6185" }}>
                <th scope="col">No</th>
                <th scope="col">Users</th>
                <th scope="col">Subject</th>
                <th scope="col">Date Of Complain</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {consul?.length != 0 &&
                consul?.map((item, key) => (
                  <tr key={key}>
                    <th scope="row">{key + 1}</th>
                    <td>{item.User.FullName}</td>
                    <td>{item.subject}</td>
                    <td>{item.CreatedAt.split("T")[0]}</td>
                    <td>
                      {item.Status === "waiting" ? (
                        <td className="text-warning">Waiting Approve Consultation Live</td>
                      ) : item.Status === "success" ? (
                        <td className="text-success">Waiting Live Consultation</td>
                      ) : (
                        <td className="text-danger">Cancel</td>
                      )}
                    </td>
                    <td>
                      <div className="dropdown dropend">
                        <span className="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                          <img src={search} alt="search" style={{ width: "20px" }} />
                        </span>
                        <ul className="dropdown-menu">
                          {item.Status === "waiting" ? (
                            <>
                              <li className="my-1">
                                <div className="d-flex justify-content-center">
                                  <Responsedoctor showRes={response} setResp={setResponse} asem={item} />
                                </div>
                              </li>
                              <li className="my-1">
                                <div className="d-flex justify-content-center" style={{ textDecoration: "none" }}>
                                  <button onClick={() => rejectCons(item.id)} className="btn btn-danger">
                                    Reject
                                  </button>
                                </div>
                              </li>
                            </>
                          ) : (
                            <></>
                          )}
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
