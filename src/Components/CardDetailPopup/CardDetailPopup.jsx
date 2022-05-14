import React from "react";
import Style from "./CardDetailPopup.module.css";

const CardDetailPopup = (props) => {
  const details = props.details;
  return (
    <React.Fragment>
      <div
        className={Style.popUpContainer}
        style={{ display: props.visibility }}
      >
        
          <p>{details.name}</p>
      </div>
    </React.Fragment>
  );
};

export default CardDetailPopup;
