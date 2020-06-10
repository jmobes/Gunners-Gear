import React from "react";

import "./FrontPage.css";
import Header from "../shared/components/navigation/Header";
import Footer from "../shared/components/navigation/Footer";

const FrontPage = props => {
  return (
    <React.Fragment>
      <div className="gallery">
        <div className="img-1-ctn">
          <div className="img-1"></div>
        </div>
        <div className="flex-ctn">
          <div className="flex-img img-2"></div>
          <div className="flex-img img-3"></div>
          <div className="flex-img img-4"></div>
        </div>
        <div className="img-5-ctn">
          <div className="img-5"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FrontPage;
