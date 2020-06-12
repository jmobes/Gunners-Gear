import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import FrontPage from "../src/FrontPage/FrontPage";
import Header from "../src/shared/components/navigation/Header";
import Footer from "../src/shared/components/navigation/Footer";
import Players from "../src/NavLinks/Players";
import Jersey from "../src/NavLinks/Jersey";
import Sweats from "../src/NavLinks/Sweats";
import Shorts from "../src/NavLinks/Shorts";
import Jackets from "../src/NavLinks/Jackets";
import Accessories from "../src/NavLinks/Accessories";

const App = props => {
 return (
   <Router>
     <Header />
     <Switch>
       <Route path="/" exact>
         <FrontPage />
       </Route>
       <Route path="/players">
         <Players />
       </Route>
       <Route path="/jerseys">
         <Jersey />
       </Route>
       <Route path="/sweats">
         <Sweats />
       </Route>
       <Route path="/shorts">
         <Shorts />
       </Route>
       <Route path="/jackets">
         <Jackets />
       </Route>
       <Route path="/accessories">
         <Accessories />
       </Route>
       <Redirect to="/" />
     </Switch>
     <Footer />
   </Router>
 );
};

export default App;
