import React from "react";

import "./Badge.css";
import badge from "./images/arsenal-badge-2.png";

const Badge = props => {
  return(
    <div className="badge-ctn">
      <img src={badge} alt="Arsenal Badge" className="badge" />
    </div>
  );
};

export default Badge;
