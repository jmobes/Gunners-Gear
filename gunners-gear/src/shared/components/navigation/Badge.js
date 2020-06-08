import React from "react";

import "./Badge.css";
import badge from "./images/arsenal-badge-2.png";

const Badge = props => {
  return(
    <img src={badge} alt="Arsenal Badge" className="badge" />
  );
};

export default Badge;
