import icprofile from '../../assets/vector/Profile.png'
import icmail from '../../assets/vector/mail.png'
import ictlp from '../../assets/vector/Tlp.png'
import iclocation from '../../assets/vector/Location.png'
import icgender from '../../assets/vector/Gender.png'
import iccontact from '../../assets/vector/Contact.png'
import iniprofile from '../../assets/Profile.png'

const Profile = () => {
  
    return (
    <div className="mw-100" style={{ height: "600px"}}>
      <div style={{ height: "300px", width: "100%", paddingTop: "50px" }}>
        <div className="shadow rounded m-auto" style={{ width: "600px", height: "400px"}}>
          <div className="me-4 ms-4">
            <div className="d-flex justify-content-between pt-3">
              <div>
                <h1 className="text-dark fs-4">Personal Info</h1>
                <div className="d-flex mt-3" style={{ height: "40px"}}>
                  <img src={icprofile} style={{ width: "30px", height: "30px", marginTop: "7px"}} />
                  <div className="ms-3">
                    <h7 className="text-dark fs-6">asw</h7>
                    <p className="text-secondary" style={{fontSize:"9pt"}}>Full name</p>
                  </div>
                </div>
                <div className="d-flex mt-3" style={{ height: "40px"}}>
                  <img src={icgender} style={{ width: "30px", height: "30px", marginTop: "7px"}} />
                  <div className="ms-3">
                    <h7 className="text-dark">asw</h7>
                    <p className="text-secondary" style={{fontSize:"9pt"}}>Gender</p>
                  </div>
                </div>
                <div className="d-flex mt-3" style={{ height: "40px"}}>
                  <img src={iclocation} style={{ width: "30px", height: "30px", marginTop: "7px"}} />
                  <div className="ms-3">
                    <h7 className="text-dark">asw</h7>
                    <p className="text-secondary" style={{fontSize:"9pt"}}>Address</p>
                  </div>
                </div>
                <div className="d-flex mt-3" style={{ height: "40px"}}>
                  <img src={icmail} style={{ width: "30px", height: "30px", marginTop: "7px"}} />
                  <div className="ms-3">
                    <h7 className="text-dark">asw@asw</h7>
                    <p className="text-secondary" style={{fontSize:"9pt"}}>Email</p>
                  </div>
                </div>
                <div className="d-flex mt-3" style={{ height: "40px"}}>
                  <img src={ictlp} style={{ width: "30px", height: "30px", marginTop: "7px"}} />
                  <div className="ms-3">
                    <h7 className="text-dark">asw</h7>
                    <p className="text-secondary" style={{fontSize:"9pt"}}>Mobile Phone</p>
                  </div>
                </div>
                <div className="d-flex mt-3" style={{ height: "40px"}}>
                  <img src={iccontact} style={{ width: "30px", height: "30px", marginTop: "7px"}} />
                  <div className="ms-3">
                    <h7 className="text-dark">Active</h7>
                    <p className="text-secondary" style={{fontSize:"9pt"}}>Status</p>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <img className="rounded mt-4 w-75" src={iniprofile} />
                <button className="btn mt-4 fw-bold text-light p-2 w-75 " style={{ background: "#FF6185" }}>
                  Change Photo Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
