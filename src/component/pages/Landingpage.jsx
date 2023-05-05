import iconvirus from "../../assets/IconVirus.png";
import icondokter from "../../assets/IconDoctor.png"
import rounded1 from "../../assets/Rounded1.png"
import rounded2 from "../../assets/Rounded2.png"
import rounded3 from "../../assets/Rounded3.png"
import rounded4 from "../../assets/Rounded4.png"
import Listarticle from "../Listarticle";

function Landingpage() {
  return (
    <>
      <div style={{ backgroundColor: "#FF6185", height: "300px" }}>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="position-relative w-75">
            <div className="position-absolute" style={{left:"2px" ,top:"20px"}}>
              <img src={iconvirus} alt="" />
            </div>
            <div className=" d-flex flex-column " style={{ marginLeft: "170px", marginTop: "80px" }}>
              <h3 className="text-light" style={{ fontSize: "25pt",fontWeight:"600" }}>
                Cegah Covid-19
              </h3>
              <h5 className="text-light" style={{ fontSize: "20pt" }}>
                dengan melakukan :
              </h5>
              <div className="position-relative mt-4">
                <a className="btn btn-light" style={{paddingTop:"25px" , paddingBottom:"25px",width:"250px"}} href="/Consultation">
                <div className="position-absolute" style={{top:"8px", left:"10px"}}>
                  <img src={icondokter} alt="" style={{width:"60%"}}/>
                </div>
                <div className="position-absolute fw-bold" style={{top:"13px", left:"65px"}}>
                  <label style={{color:"#FF6185",fontSize: "10pt" }}>Konsultasi Dengan Dokter</label>
                </div>
                </a>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center flex-wrap" style={{marginTop:"80px"}}>
            <div className="rounded d-flex flex-column w-25 align-items-center">
                <img src={rounded1} className="w-50" />
                <p className="text-center w-75 text-light mt-2" style={{fontWeight:"500"}}>Tidak mendatangi tepat ramai</p>
            </div>
            <div className="rounded d-flex flex-column w-25 align-items-center">
                <img src={rounded2} className="w-50" />
                <p className="text-center w-75 text-light mt-2" style={{fontWeight:"500"}}>Hindari untuk berjabat tangani</p>
            </div>
            <div className="rounded d-flex flex-column w-25 align-items-center">
                <img src={rounded3} className="w-50" />
                <p className="text-center w-100 text-light mt-2"style={{fontWeight:"500"}}>Hindari menyentuh mata secara langsung</p>
            </div>
            <div className="rounded d-flex flex-column w-25 align-items-center">
                <img src={rounded4} className="w-50" />
                <p className="text-center w-100 text-light mt-2"style={{fontWeight:"500"}}>Tetap dirumah sampai pandemi ini selesai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Listarticle/>
    </>
    
  );
}

export default Landingpage;
