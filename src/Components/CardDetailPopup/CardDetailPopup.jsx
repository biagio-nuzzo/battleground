import React from "react";
import Style from "./CardDetailPopup.module.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const CardDetailPopup = (props) => {
  const details = props.details;
  return (
    <React.Fragment>
      <div
        className={Style.popUpContainer}
        style={{ display: props.visibility }}
      >
        <div className={Style.popupHeader}>
          <FontAwesomeIcon
            icon={faClose}
            style={{color: "#fcd144", fontSize: 40, cursor: "pointer"}}
            onClick={() => {
              const tmp_data = {
                visibility: "none",
                details: null,
              };
              props.popupVisibility(tmp_data);
            }}
          />
        </div>

        <Row className="mx-auto" style={{ width: "60%" }}>
          <Col md={6} sm={12} className={Style.colOneStylePopup}>
            <img src={details.image} className={Style.imgPopupStyle} />
          </Col>
          <Col md={6} sm={12} className={Style.colTwoStylePopup}>
            <div className={Style.detailsContainer}>
              <p>{details.name}</p>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default CardDetailPopup;
