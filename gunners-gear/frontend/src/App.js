import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import FrontPage from "../src/FrontPage/FrontPage";
import Header from "../src/shared/components/Header/Header";
import Footer from "../src/shared/components/Footer/Footer";


const App = props => {
 return (
   <Router>
     <Header />
     <FrontPage />
     <Footer />
   </Router>
 );
};

export default App;
