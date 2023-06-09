import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import Landingpage from "./component/pages/Landingpage";
import Listarticle from "./component/Listarticle";
import { Route, Routes, useNavigate } from "react-router-dom";
import { UserContext } from "./component/context/userContext";
import { API, setAuthToken } from "./config/api";
import { PrivateRouteDoctor, PrivateRouteLogin, PrivateRoutePatient } from "./privateroute/PrivateRoute";
import Profile from "./component/patient/Profile";

import Reservation from "./component/patient/Reservation";
import Consultation from "./component/patient/Consultation";
import Addarticle from "./component/doctor/Addarticle";
import Table from "./component/doctor/Table";
import Mainpage from "./component/pages/Mainpage";
import Detailarticle from "./component/patient/Detailarticle";

function App() {
  const [isLogin, setLogin] = useState(false);
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      console.log("check user success : ", response);
      let payload = response.data.data;
      payload.token = localStorage.token;
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
      console.log(response);
      setIsLoading(false);
    } catch (error) {
      console.log("check user failed : ", error);
      dispatch({
        type: "AUTH_ERROR",
      });
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      checkUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Redirect Auth but just when isLoading is false
    if (!isLoading) {
      if (state.isLogin === false) {
        navigate("/");
      }
    }
  }, [isLoading]);
  return isLoading ? null : (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Mainpage />} />
        <Route element={<PrivateRouteLogin />}>
          <Route element={<PrivateRoutePatient />}>
            <Route exact path="/Article/:id" element={<Detailarticle />} />
            <Route exact path="/Profile" element={<Profile />} />
            <Route exact path="/Consultation" element={<Reservation />} />
            <Route exact path="/MyConsultation" element={<Consultation />} />
          </Route>
          <Route element={<PrivateRouteDoctor />}>
            <Route exact path="/Profiles" element={<Profile />} />
            <Route exact path="/Addarticle" element={<Addarticle />} />
            <Route exact path="/Table" element={<Table />} />
          </Route>
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;

{
  /* <Route exact path="/Adminformepi" element={<Landingpage />} /> */
}
