import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import FrontPage from "./pages/FrontPage/FrontPage";
import Header from "./shared/components/Header/Header";
import Footer from "./shared/components/Footer/Footer";
import Jerseys from "./pages/Jerseys/Jerseys";
import Players from "./pages/Players/Players";


const App = props => {
 return (
   <Router>
     <Header />
     <Switch>
       <Route path="/" exact>
         <FrontPage />
       </Route>
       <Route path="/jerseys" exact>
         <Jerseys />
       </Route>
       <Route path="/players" exact>
         <Players />
       </Route>
     </Switch>
     <Redirect to="/jerseys" />
     <Footer />
   </Router>
 );
};

export default App;
