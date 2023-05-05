import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { UserContext } from "../context/userContext";
import { API,setAuthToken } from "../../config/api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useMutation } from "react-query";

function Login(props) {
  const [_, dispatch] = useContext(UserContext);
  const MySwal = withReactContent(Swal);
  const iniShow = () => props.setLgn(true);
  const iniClose = () => props.setLgn(false);

  const [getState, setState] = useState({
    email: "",
    password: "",
    role: "",
  });

  const { email, password } = getState;

  const handleOnChange = (e) => {
    setState({
      ...getState,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      const response = await API.post("/login", getState);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data.data,
        
      });

      setAuthToken(localStorage.token);
      
      iniClose();

      MySwal.fire({
        title: <strong>Yeay</strong>,
        text: "Anda Telah Login",
        icon: "success",
      });
    } catch (error) {
      iniShow()
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email atau Password Anda Salah",
      });
    }
  });

  return (
    <>
      <Button onClick={iniShow} type="button" className="logres btn btn-sm  fw-bold border" style={{ backgroundColor: "#FF6185", borderColor: "#FF6185" }}>
        Login
      </Button>

      <Modal show={props.showLgn} onHide={iniClose}>
        <Modal.Body className=" rounded d-flex flex-column align-center">
          <Modal.Title className=" ps-5">Login</Modal.Title>
          <Form className="pt-3 w-75" onSubmit={(e) => handleOnSubmit.mutate(e)}>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <label style={{ marginLeft: "52px" }}>Email</label>
              <Form.Control className="border border-light bg-secondary border-3 text-light ms-5" type="email" name="email" value={email} onChange={handleOnChange} placeholder="Email" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <label style={{ marginLeft: "52px" }}>Password</label>
              <Form.Control className="border border-light bg-secondary border-3 text-light ms-5" type="password" name="password" value={password} onChange={handleOnChange} placeholder="Password" autoFocus />
            </Form.Group>
            <Button type="submit" className="w-100 text-center ms-5 fw-bold border-0" style={{ backgroundColor: "#FF6185" }}>
              Login
            </Button>
          </Form>

          <div className="m-auto pe-3 pt-4 d-flex text-secondary">
            <p>Don't have an account ? Klik</p>

            <a
              onClick={() => {
                props.setRegis(true);
                iniClose();
              }}
              className="text-decoration-none text-secondary fw-bold ms-2"
              href=""
            >
              Here
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

// onClick={() =>  props.sadge(true) }

export default Login;
