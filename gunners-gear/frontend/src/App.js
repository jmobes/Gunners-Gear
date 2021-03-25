import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import FrontPage from "./pages/FrontPage/FrontPage";
import Header from "./shared/components/Header/Header";
import Footer from "./shared/components/Footer/Footer";
import Jerseys from "./pages/Jerseys/Jerseys";
import Players from "./pages/Players/Players";
import Shorts from "./pages/Shorts/Shorts";
import Jackets from "./pages/Jackets/Jackets";
import Accessories from "./pages/Accessories/Accessories";
import SoccerBalls from "./pages/SoccerBalls/SoccerBalls";
import Vintage from "./pages/Vintage/Vintage";
import ViewProduct from "./shared/components/ViewProduct/ViewProduct";

const App = () => {
  const [itemCount, setItemCount] = useState(0);
  const [showProduct, setShowProduct] = useState(false);
  const [itemDetails, setItemDetails] = useState();

  const addItemToCart = () => {
    setItemCount(itemCount + 1);
  };

  const viewProduct = () => {
    setShowProduct(true);
    alert("details button was clicked");
  };
  const getDetails = (details) => {
    setItemDetails(details);
  };

  return !showProduct ? (
    <Router>
      <Header count={itemCount} />
      <Switch>
        <Route path="/" exact>
          <FrontPage />
        </Route>
        <Route path="/jerseys" exact>
          <Jerseys
            addItem={addItemToCart}
            viewProduct={viewProduct}
            itemDetails={getDetails}
          />
        </Route>
        <Route path="/players" exact>
          <Players addItem={addItemToCart} />
        </Route>
        <Route path="/shorts" exact>
          <Shorts addItem={addItemToCart} />
        </Route>
        <Route path="/jackets" exact>
          <Jackets addItem={addItemToCart} />
        </Route>
        <Route path="/accessories" exact>
          {/* <Accessories addItem={addItemToCart} /> */}
          <Accessories />
        </Route>
        <Route path="/soccerballs" exact>
          <SoccerBalls addItem={addItemToCart} />
        </Route>
        <Route path="/vintage" exact>
          <Vintage addItem={addItemToCart} />
        </Route>
      </Switch>
      <Redirect to="/jerseys" />
      <Footer />
    </Router>
  ) : (
    <Router>
      <Header count={itemCount} />
      <ViewProduct />
      <Footer />
    </Router>
  );
};

export default App;
