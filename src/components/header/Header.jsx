
import "./header.css";
import pumaHeader from '../../assets/pumaHeader.avif'



import Button from "../Button/Button";

import { Link } from "react-router-dom";


export const Header = () => {
  return (<>
    <div className="headerWrapper">
     {/* <Nav /> */}
      <div className="banner container-fluid position-relative">
        <img src={pumaHeader} alt="" />
        <div className="banner_text">
          <h1>END OF SEASON SALE</h1>
          <h3>DEALS,STEALS AND ALL THE FEELS</h3>
          <p>+ EXTRA 5% OFF ON ONLINE PAYMENTS</p>
          <div className="ban_buttons d-flex gap-3">
          <Link to='/search?q=men'> <Button color={"black"} bg="rgb(240,240,240)" >FOR HIM</Button></Link>
          <Link to='/search?q=women'> <Button color={"black"} bg="rgb(240,240,240)">FOR HER</Button></Link>
            
            {/* <Button color={"black"} bg="rgb(240,240,240)">FOR KIDS</Button> */}
          </div>
        </div>
      </div>
      
    </div>
    
    </>
  );
};
