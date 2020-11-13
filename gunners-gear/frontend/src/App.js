import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import FrontPage from "./pages/FrontPage/FrontPage";
import Header from "./shared/components/Header/Header";
import Footer from "./shared/components/Footer/Footer";
import Jerseys from "./pages/Jerseys/Jerseys";
import Players from "./pages/Players/Players";
import Shorts from "./pages/Shorts/Shorts";
import Jackets from "./pages/Jackets/Jackets";
import Accessories from "./pages/Accessories/Accessories";
import SoccerBalls from "./pages/SoccerBalls/SoccerBalls";
import Retro from "./pages/Vintage/Vintage";
import Vintage from "./pages/Vintage/Vintage";


const App = () => {
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
       <Route path="/shorts" exact>
         <Shorts />
       </Route>
       <Route path="/jackets" exact>
         <Jackets />
       </Route>
       <Route path="/accessories" exact>
         <Accessories />
       </Route>
       <Route path="/soccerballs" exact>
         <SoccerBalls />
       </Route>
       <Route path="/vintage" exact>
         <Vintage />
       </Route>
     </Switch>
     <Redirect to="/" />
     <Footer />
   </Router>
 );
};

export default App;
