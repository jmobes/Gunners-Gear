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
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";

const App = () => {
  const [cart, setCart] = useState([]);
  const [showProduct, setShowProduct] = useState(false);
  const [itemDetails, setItemDetails] = useState();

  const addItemToCart = (newProduct) => {
    const productId = newProduct.item;
    const found = cart.some((product) => product.item === productId);
    if (found) {
      const copy = [...cart];
      const index = copy.findIndex((product) => product.item === productId);
      copy[index].quantity += newProduct.quantity;
      setCart(copy);
    } else {
      const newCart = [...cart, newProduct];
      setCart(newCart);
    }
  };

  const removeItemFromCart = (id) => {
    const newCart = cart.filter((product) => product.item !== id);
    setCart(newCart);
  };

  const updateQuantity = (id, quantity, flag) => {
    const copy = [...cart];
    const index = copy.findIndex((product) => product.item === id);
    if (flag && copy[index].quantity - 1 < 1) {
      copy[index].quantity = 1;
    } else {
      copy[index].quantity += quantity;
    }
    setCart(copy);
  };

  const viewProduct = (bool) => {
    setShowProduct(bool);
  };

  const getDetails = (details) => {
    setItemDetails(details);
  };

  const getCartCount = () => {
    let count = 0;
    if (cart.length) cart.map((item) => (count += item.quantity));
    return count;
  };

  let view;
  if (itemDetails) {
    view = (
      <Router>
        <Header count={getCartCount} />
        <Switch>
          <Route path="/" exact>
            <FrontPage />
          </Route>
          <Route path="/jerseys" exact>
            <Jerseys viewProduct={viewProduct} itemDetails={getDetails} />
          </Route>
          <Route path="/players" exact>
            <Players viewProduct={viewProduct} itemDetails={getDetails} />
          </Route>
          <Route path="/shorts" exact>
            <Shorts viewProduct={viewProduct} itemDetails={getDetails} />
          </Route>
          <Route path="/jackets" exact>
            <Jackets viewProduct={viewProduct} itemDetails={getDetails} />
          </Route>
          <Route path="/accessories" exact>
            <Accessories viewProduct={viewProduct} itemDetails={getDetails} />
          </Route>
          <Route path="/soccerballs" exact>
            <SoccerBalls viewProduct={viewProduct} itemDetails={getDetails} />
          </Route>
          <Route path="/vintage" exact>
            <Vintage viewProduct={viewProduct} itemDetails={getDetails} />
          </Route>
          <Route path={`/product/${itemDetails.id}`}>
            <ProductDetails
              details={itemDetails}
              addToCart={addItemToCart}
              viewProduct={viewProduct}
            />
          </Route>
          <Route path="/cart" exact>
            <Cart
              cart={cart}
              removeItem={removeItemFromCart}
              updateQuantity={updateQuantity}
            />
          </Route>
        </Switch>
        <Redirect to="/" />
        <Footer />
      </Router>
    );
  } else {
    view = (
      <Router>
        <Header count={getCartCount} viewProduct={viewProduct} />
        <Switch>
          <Route path="/" exact>
            <FrontPage />
          </Route>
          <Route path="/jerseys" exact>
            <Jerseys viewProduct={viewProduct} itemDetails={getDetails} />
          </Route>
          <Route path="/players" exact>
            <Players viewProduct={viewProduct} itemDetails={getDetails} />
          </Route>
          <Route path="/shorts" exact>
            <Shorts viewProduct={viewProduct} itemDetails={getDetails} />
          </Route>
          <Route path="/jackets" exact>
            <Jackets viewProduct={viewProduct} itemDetails={getDetails} />
          </Route>
          <Route path="/accessories" exact>
            <Accessories viewProduct={viewProduct} itemDetails={getDetails} />
          </Route>
          <Route path="/soccerballs" exact>
            <SoccerBalls viewProduct={viewProduct} itemDetails={getDetails} />
          </Route>
          <Route path="/vintage" exact>
            <Vintage viewProduct={viewProduct} itemDetails={getDetails} />
          </Route>
          <Route path="/cart" exact>
            <Cart
              cart={cart}
              removeItem={removeItemFromCart}
              updateQuantity={updateQuantity}
            />
          </Route>
        </Switch>
        <Redirect to="/cart" />
        <Footer />
      </Router>
    );
  }
  return view;
};

export default App;
