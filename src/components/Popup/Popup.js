import React,{useState} from "react";
import { Link,Redirect } from "react-router-dom";
import "./Popup.scss";

// Popup Component to take a specific text,status and handle function
const PopUp = ({ text, goto,afterClosePath}) => {
  const [hiddin,setHidden]=useState(false);
  const [clicked,setClicked]=useState(false);

  const handleClickButton=(e)=>{
    e.preventDefault();
    setClicked(true);

  }
  return (
    <div className="popup" hidden={hiddin}>
      <div className="popup__inner">
        <h1 className="popup__text">{text}</h1>
        <div className="popup__div-button">
 
          <button className="btn btn-primary popup__button" onClick={handleClickButton}>Okay</button>
          {clicked?(
            <div>
            <Redirect to={goto} />
            </div>
          ):("")}
          <Link
            exact
            to={afterClosePath}
            className="btn btn-danger popup__button"
          >
            Close
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PopUp;
