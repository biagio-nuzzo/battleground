import React from "react";
import Style from "./Loader.module.css";
import LoaderGif from "../../assets/images/loader.gif";

const Loader = (props) => {
  return (
    <React.Fragment>
      <div
        className={Style.loaderContainer}
        style={{
          opacity: props.loader == "block" ? 100 : 0,
          visibility: props.loader,
          zIndex: props.loader == "block" ? 100 : -1,
        }}
      >
        <img src={LoaderGif} />
      </div>
    </React.Fragment>
  );
};

export default Loader;
