import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import FrontPage from "../src/pages/FrontPage/FrontPage";
import Header from "../src/shared/components/Header/Header";
import Footer from "../src/shared/components/Footer/Footer";


const App = props => {
 return (
   <Router>
     <Header />
     <Switch>
       <Route path="/" exact>
         <FrontPage />
       </Route>
     </Switch>
     <Redirect to="/" />
     <Footer />
   </Router>
 );
};

export default App;
