import iconvirus from "../../assets/IconVirus.png";
import icondokter from "../../assets/IconDoctor.png"
import rounded1 from "../../assets/Rounded1.png"
import rounded2 from "../../assets/Rounded2.png"
import rounded3 from "../../assets/Rounded3.png"
import rounded4 from "../../assets/Rounded4.png"
import Listarticle from "../Listarticle";
import './Landing.css';

function Landingpage() {
  return (
    <>
      <div style={{ backgroundColor: "#FF6185"}} className="mainpage">
      <div className="container">
        <div className="d-flex  justify-title">
          <div className="position-relative">
            <div className="position-absolute sizeimage" style={{left:"2px" ,top:"20px"}}>
              <img src={iconvirus} alt="" className="sizeimage"/>
            </div>
            <div className=" d-flex flex-column titleside">
              <h3 className="text-light texttitle" >
                Cegah Covid-19
              </h3>
              <h5 className="text-light texttile">
                dengan melakukan :
              </h5>
              <div className="position-relative mt-4">
                <a className="btn btn-light btnsize-title" href="/Consultation">
                <div className="position-absolute" style={{top:"8px", left:"10px"}}>
                  <img className="sizeimage" src={icondokter} alt="" style={{width:"60%"}}/>
                </div>
                <div className="position-absolute fw-bold " style={{top:"13px", left:"65px"}}>
                  <label className="textbtn-title">Konsultasi Dengan Dokter</label>
                </div>
                </a>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center flex-wrap warning-page" style={{marginTop:"80px"}}>
            <div className="rounded d-flex flex-column w-25 align-items-center">
                <img src={rounded1} className="w-50" />
                <p className="text-center w-75 text-light mt-2 text-warning" style={{fontWeight:"500"}}>Tidak mendatangi tepat ramai</p>
            </div>
            <div className="rounded d-flex flex-column w-25 align-items-center">
                <img src={rounded2} className="w-50" />
                <p className="text-center w-75 text-light mt-2 text-warning" style={{fontWeight:"500"}}>Hindari untuk berjabat tangani</p>
            </div>
            <div className="rounded d-flex flex-column w-25 align-items-center">
                <img src={rounded3} className="w-50" />
                <p className="text-center w-100 text-light mt-2 text-warning"style={{fontWeight:"500"}}>Hindari menyentuh mata secara langsung</p>
            </div>
            <div className="rounded d-flex flex-column w-25 align-items-center">
                <img src={rounded4} className="w-50" />
                <p className="text-center w-100 text-light mt-2 text-warning"style={{fontWeight:"500"}}>Tetap dirumah sampai pandemi ini selesai</p>
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
