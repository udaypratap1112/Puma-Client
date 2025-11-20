import Button from "../Button/Button";
import "./lowerbanner.css";
import banner2 from '../../assets/banner2.avif'
import banner3 from '../../assets/banner3.avif'


const LowerBannner = () => {
  return (
    <div className="container-fluid lower_banner d-grid gap-4">
      <div className="upper position-relative">
              <img src={banner2} alt="" />
              <div className="info">
                  <h1 className="text-center" >FOR ALL THE <br /> SNEAKERHEADS</h1>
                  <p>YOUR ONE-STOP SNEAKER-SHOP</p>
                  <div className="buttons d-flex gap-4"><Button  bg="black" color='white'>SHOP NOW</Button><Button  bg="black" color='white'>EXPLORE MORE</Button></div>
              </div>
      </div>

      <div className="lower position-relative text-white">
              <img src={banner3} alt="" />
              <div className="info">
                  <h1 className="text-center" >TRAVEL IN STYLE</h1>
                  <p>GEAR UP FOR YOUR NEXT ADVENTURE</p>
                  <div className="buttons d-flex gap-4 "><Button  bg="white" color='black'>SHOP NOW</Button></div>
              </div>
      </div>
    </div>
  );
};

export default LowerBannner;
