import preloader from "../../../assets/images/preloader.gif";
import React from "react";
let Preloader = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <img src={preloader} />
    </div>
  );
};

export default Preloader;
