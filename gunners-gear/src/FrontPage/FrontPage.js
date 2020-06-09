import React from "react";

import "./FrontPage.css";
import Header from "../shared/components/navigation/Header";

const FrontPage = props => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="gallery">
          <div className="img-1"></div>
          <div className="img-2"></div>
          <div className="img-3"></div>
          <div className="img-4"></div>
          <div className="img-5"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FrontPage;
