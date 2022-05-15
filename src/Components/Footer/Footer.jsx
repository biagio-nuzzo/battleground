import React from "react";
import Style from "./Footer.module.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={Style.footerMainContainer}>
        <div className={Style.footerClass}>
          <span className={Style.leftFooter}>
            <span className={Style.leftFooterBackgroundStart}></span>
            <div className={Style.leftFooterBackgroundCenter}></div>
            <span className={Style.leftFooterBackgroundEnd}></span>
          </span>
          <span className={Style.centerFooterButtons}>
            <h6 className={Style.centerFooterTitle}>Resta Sintonizzato</h6>
            <span className={Style.footerRowButtons}>
              <div className={Style.footerButtons}>
                <a
                  href="https://www.facebook.com/Hearthstone.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0px" }}
                >
                  facebook
                  <div className={Style.facebookFooterIcon}></div>
                </a>
              </div>
              <div className={Style.footerButtons}>
                <a
                  href="https://twitter.com/hearthstone_it"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0px" }}
                >
                  twitter
                  <div className={Style.twitterFooterIcon}></div>
                </a>
              </div>
              <div className={Style.footerButtons}>
                <a
                  href="https://www.youtube.com/user/HearthstoneIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0px" }}
                >
                  youtube
                  <div className={Style.youtubeFooterIcon}></div>
                </a>
              </div>
              <div className={Style.footerButtons}>
                <a
                  href="https://www.instagram.com/playhearthstone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0px" }}
                >
                  instagram
                  <div className={Style.instagramFooterIcon}></div>
                </a>
              </div>
            </span>
          </span>
          <span className={Style.rightFooter} style={{transform: "rotateY(180deg"}}>
            <span className={Style.leftFooterBackgroundStart}></span>
            <div className={Style.leftFooterBackgroundCenter}></div>
            <span className={Style.leftFooterBackgroundEnd}></span>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
