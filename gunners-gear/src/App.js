import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import FrontPage from "../src/FrontPage/FrontPage";
import Header from "../src/shared/components/navigation/Header";
import Footer from "../src/shared/components/navigation/Footer";
import Jersey from "../src/NavLinks/Jersey";
import Players from "../src/NavLinks/Players";

const App = props => {
 return (
   <Router>
     <div className="app">
       <Header />
       <Route path="/" component={FrontPage} exact />
       <Route path="/players" component={Players} />
       <Route path="/jerseys" component={Jersey} />
       <Footer />
     </div>
   </Router>
 );
};

export default App;
