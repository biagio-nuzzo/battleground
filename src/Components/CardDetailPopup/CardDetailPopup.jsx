import React, { useState } from "react";
import Style from "./CardDetailPopup.module.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const CardDetailPopup = (props) => {
  const details = props.details;
  const [tripleVisibility, setTripleVisibility] = useState("none");

  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  return (
    <React.Fragment>
      <div
        className={Style.popUpContainer}
        style={{ display: props.visibility }}
      >
        <div className={Style.popupHeader}>
          <FontAwesomeIcon
            icon={faClose}
            style={{ color: "#d6ab1d", fontSize: 40, cursor: "pointer" }}
            onClick={() => {
              const tmp_data = {
                visibility: "none",
                details: null,
              };
              props.popupVisibility(tmp_data);
            }}
          />
        </div>

        <Row className="mx-auto" style={{ width: "80%" }}>
          <Col md={6} sm={12} className={Style.colOneStylePopup}>
            <img
              alt="details-popup-img"
              src={details.image}
              className={Style.imgPopupStyle}
            />
          </Col>
          <Col md={6} sm={12} className={Style.colTwoStylePopup}>
            <div
              className={Style.goldImageTmpDiv}
              style={{ display: tripleVisibility }}
            >
              <img alt="triple-gold" src={details.battlegrounds.imageGold} />
            </div>
            <div className={Style.detailsContainer}>
              <h4 className={Style.cardTitle}>{details.name}</h4>
              {details.flavorText !== "" && (
                <p className={Style.flavorText}>"{details.flavorText}"</p>
              )}
              <p className={Style.cardText}>{removeTags(details.text)}</p>
              <ul className={Style.featuresList}>
                <li>
                  <b className={Style.ulLabelStyle}>Tipo: </b>
                  <span>
                    <span className={Style.ulValueStyle}>
                      {details.cardTypeId === 3 && "Eroe"}
                    </span>
                    <span className={Style.ulValueStyle}>
                      {details.cardTypeId === 4 && "Servitore"}
                    </span>
                    <span className={Style.ulValueStyle}>
                      {details.cardTypeId === 5 && "Segreto/Magia"}
                    </span>
                    <span className={Style.ulValueStyle}>
                      {details.cardTypeId === 10 && "Potere"}
                    </span>
                  </span>
                </li>
                <li>
                  <b className={Style.ulLabelStyle}>Set: </b>
                  <span>
                    <span className={Style.ulValueStyle}>Battlegrounds</span>
                  </span>
                </li>
                <li>
                  <b className={Style.ulLabelStyle}>Artist: </b>
                  <span>
                    <span className={Style.ulValueStyle}>
                      {details.artistName ? details.artistName : "Unknown"}
                    </span>
                  </span>
                </li>
              </ul>
              <div className={Style.goldCardContainer}>
                <img
                  alt="triple-label"
                  src="https://d2q63o9r0h0ohi.cloudfront.net/images/battlegrounds/icon_triplecard-6b6d673246a78813433d78212966894aabae0ddd9f481ff5c998f22819781cbc56b1e2a4f11a738c6598c717d7af4794ad138be700d01827dff6f544a00839c1.png"
                />
                <div>
                  <span className={Style.spanTriple}>
                    Tripla:
                    <span
                      onMouseOver={() => {
                        setTripleVisibility("block");
                      }}
                      onMouseLeave={() => {
                        setTripleVisibility("none");
                      }}
                      onClick={() => {
                        if (tripleVisibility === "none") {
                          setTripleVisibility("block");
                        } else {
                          setTripleVisibility("none");
                        }
                      }}
                    >
                      {details.name}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default CardDetailPopup;
