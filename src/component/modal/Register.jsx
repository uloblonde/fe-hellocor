import { Alert } from "bootstrap";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useMutation } from "react-query";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { API } from "../../config/api";

function Register(props) {
  const MySwal = withReactContent(Swal);
  const thisShow = () => props.setRegis(true);
  const thisClose = () => props.setRegis(false);

  const [message, setMessage] = useState(null);
  const [regiss, setRegiss] = useState({
    email: "",
    password: "",
    fullname: "",
    gender: "",
    role: "",
    phone: "",
    address: "",
  });

  const { email, password, fullname, gender, role, phone, address } = regiss;

  const handleOnSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const response = await API.post("/register", regiss);
      console.log("register success : ", response);

      setRegiss({
        email: "",
        password: "",
        fullname: "",
        gender: "",
        role: "",
        phone: "",
        address: "",
      });

      thisClose();
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed to register!
        </Alert>
      );
      setMessage(alert);
      console.log("register failed : ", error);
    }
  });
  const handleChange = (e) => {
    setRegiss({
      ...regiss,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <button onClick={thisShow} type="button" className="logres btn btn-light btn-sm me-2  fw-bold" style={{ borderColor: "#FF6185", color: "#FF6185" }}>
        Register
      </button>

      <Modal show={props.showRgs} onHide={thisClose}>
        <Modal.Body className=" rounded d-flex flex-column align-center">
          <Modal.Title className=" ps-5">Register</Modal.Title>

          <form className="pt-3 w-75" onSubmit={(e) => handleOnSubmit.mutate(e)}>
            <Form.Group className=" " controlId="emailId">
              <Form.Label className="ms-5 mb-0">Email address</Form.Label>
              <input name="email" id="email" value={email} onChange={handleChange} className="border border-light bg-secondary border-3 text-light ms-5 w-100 rounded p-2" type="email" placeholder="Email" autoFocus />
            </Form.Group>
            <Form.Group className="" controlId="passId">
              <Form.Label className="ms-5 mb-0">Password</Form.Label>
              <input name="password" id="password" value={password} onChange={handleChange} className="border border-light bg-secondary border-3 text-light ms-5 w-100 rounded p-2" type="password" placeholder="Password" autoFocus />
            </Form.Group>
            <Form.Group className="" controlId="fullnameId">
              <Form.Label className="ms-5 mb-0">Fullname</Form.Label>
              <input name="fullname" id="fullname" value={fullname} onChange={handleChange} className="border border-light bg-secondary border-3 text-light ms-5 w-100 rounded p-2" type="text" placeholder="Full Name" autoFocus />
            </Form.Group>
            <Form.Group className="" controlId="genderId">
              <Form.Label className="ms-5 mb-0">Gender</Form.Label>
              <input name="gender" id="gender" value={gender} onChange={handleChange} className="border border-light bg-secondary border-3 text-light ms-5 w-100 rounded p-2" type="text" placeholder="Gender" autoFocus />
            </Form.Group>
            <Form.Group className="" controlId="role">
              <Form.Label className="ms-5 my-1">Role</Form.Label>
              <Form.Select className="my-1 ms-5 bg-secondary text-light" type="text" name="role" value={role} onChange={handleChange}>
                <option value={"default"}>Select here...</option>
                <option value={"patient"}>Patient</option>
                <option value={"doctor"}>Doctor</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="" controlId="phoneId">
              <Form.Label className="ms-5 mb-0">Phone</Form.Label>
              <input name="phone" id="phone" value={phone} onChange={handleChange} className="border border-light bg-secondary border-3 text-light ms-5 w-100 rounded p-2" type="text" placeholder="Phone" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addressId">
              <Form.Label className="ms-5 mb-0">Address</Form.Label>
              <input name="address" id="address" value={address} onChange={handleChange} className="border border-light bg-secondary border-3 text-light ms-5 w-100 rounded p-2" type="text" placeholder="Address" autoFocus />
            </Form.Group>

            <button
              onClick={() => {
                if (email && password && fullname && gender && phone && address) {
                  thisClose();
                  MySwal.fire({
                    icon: "success",
                    title: "Yeay",
                    text: "Anda Telah Terdaftar Uhuyyy",
                  });
                } else {
                  thisShow();
                  MySwal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Pedanftaran gagal check kembali formnya",
                  });
                }
              }}
              type="submit"
              className="w-100 btn text-center text-light ms-5 fw-bold border-0 p-2"
              style={{ backgroundColor: "#FF6185" }}
            >
              Register
            </button>
          </form>
          <div className="m-auto pe-3 pt-4 d-flex text-secondary">
            <p>Already have an account ? Klik</p>

            <a
              onClick={() => {
                props.setLgn(true);
                thisClose();
              }}
              className="text-decoration-none text-secondary fw-bold pe-auto"
              style={{cursor:"pointer"}}
            >
              Here
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Register;
