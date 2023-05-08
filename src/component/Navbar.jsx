import { useContext, useState } from "react";
import logo from "../assets/logonavbar.png";
import Register from "./modal/Register";
import Login from "./modal/Login";
import profile from "../assets/Profilerounded.png";
import icprofile from "../assets/icon/icprofile.png";
import icmail from "../assets/icon/icmail.png";
import iclogout from "../assets/icon/iclogout.png";
import polygon from "../assets/icon/icplygon.png";
import icadd from "../assets/icon/icadd.png";
import doctor from "../assets/IconDoctor.png";
import { UserContext } from "./context/userContext";
import { Link, useNavigate } from "react-router-dom";

const IniLogin = (props) => {
  const [getLogin, setLogin] = useState(false);
  const [getRegis, setRegis] = useState(false);
  return (
    <>
      <Register showLgn={getLogin} setLgn={setLogin} showRgs={getRegis} setRegis={setRegis} />
      <Login showRgs={getRegis} setRegis={setRegis} showLgn={getLogin} setLgn={setLogin} />
    </>
  );
};

const Profile = () => {
  const [isLogout, setIsLogout] = useState(false);
  const [state, dispatch] = useContext(UserContext);
  let navigate = useNavigate();

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  if (isLogout) {
    return <IniLogin />;
  }

  return (
    <>
    {state.user.role == "patient" ? (
    <div className="dropdown position-relative ">
        <img type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" src={profile} style={{ width: "60px" }} />
        <ul class="dropdown-menu bg-white border-0 shadow">
          <img className="position-absolute " style={{ bottom: "120px", right: "17px", width: "20px" }} src={polygon} />
          <li>
            <div className=" d-flex  ms-2 mt-2">
              {/* <Link className="text-decoration-none" to={"/Listfilm"}> */}
              <img src={icprofile} style={{ width: "25px" }} />
              <a class="text-dark text-decoration-none ps-2" href="/Profile">
                Profile
              </a>
              {/* </Link> */}
            </div>
          </li>
          <li>
            <div className=" d-flex  ms-2 mt-2">
              {/* <Link className="text-decoration-none" to={"/Listfilm"}> */}
              <img src={icmail} style={{ width: "25px" }} />
              <a class="text-dark text-decoration-none ps-2" href="/MyConsultation">
                Consultation
              </a>
              {/* </Link> */}
            </div>
          </li>
          <div className=" w-100 mt-2" style={{ padding: "1px", backgroundColor: "#FF6185" }}></div>
          <li>
            <div className=" d-flex  ms-2 mt-2">
              <img onClick={logo} src={iclogout} style={{ width: "25px", cursor: "pointer" }} />
              <a onClick={logout} class="text-dark text-decoration-none ps-2" href="">
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
      ) : (
        <div className="dropdown position-relative ">
        <img type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" src={doctor} style={{ width: "60px" }} />
        <ul class="dropdown-menu bg-white border-0 shadow">
          <img className="position-absolute " style={{ bottom: "120px", right: "17px", width: "20px" }} src={polygon} />
          <li>
            <div className=" d-flex  ms-2 mt-2">
              {/* <Link className="text-decoration-none" to={"/Listfilm"}> */}
              <img src={icprofile} style={{ width: "25px" }} />
              <a class="text-dark text-decoration-none ps-2" href="/Profiles">
                Profile
              </a>
              {/* </Link> */}
            </div>
          </li>
          <li>
            <div className=" d-flex  ms-2 mt-2">
              {/* <Link className="text-decoration-none" to={"/Listfilm"}> */}
              <img src={icadd} style={{ width: "25px" }} />
              <a class="text-dark text-decoration-none ps-2" href="/Addarticle">
                Add Article
              </a>
              {/* </Link> */}
            </div>
          </li>
          <div className=" w-100 mt-2" style={{ padding: "1px", backgroundColor: "#FF6185" }}></div>
          <li>
            <div className=" d-flex  ms-2 mt-2">
              <img onClick={logo} src={iclogout} style={{ width: "25px", cursor: "pointer" }} />
              <a onClick={logout} class="text-dark text-decoration-none ps-2" href="">
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
      )}
      ;
    </>
  );
};

const Navbar = () => {
  const [state] = useContext(UserContext);
  return (
    <div className="shadow">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="text-decoration-none">
            <div className="logo">
              <img className="w-75" src={logo} alt="" />
            </div>
          </Link>
          <div className="button d-flex justify-content-center">{state.isLogin ? <Profile /> : <IniLogin />}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
