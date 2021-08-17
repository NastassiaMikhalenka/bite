import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect}  from 'react-router-dom'
// import style from './App.css'
import Products from "./Components/Products/Products";
import NavBar from "./Components/Navbar/NavBar";
import Cart from "./Components/Cart/Cart";
import PreviewProduct from "./Components/PreviewProduct/PreviewProduct";
import {connect} from 'react-redux'
import HomePage from "./Components/MainPage/HomePage";
import ScrollToTop from './Utilits/Scroll'

function App({currentItem}) {
  return (
    <Router>
      <NavBar/>
      <ScrollToTop/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shopping" component={Products}/>
        <Route exact path="/cart" component={Cart}/>
        {!currentItem ? (
            <Redirect to="/" />
        ) : (
          <Route exact path="/product/:id" component={PreviewProduct}/>
        )}
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
      currentItem: state.shop.currentItem,
      comments: state.shop.comments
  }
}

export default connect(mapStateToProps)(App);
