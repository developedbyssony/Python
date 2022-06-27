import "./css/App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from "./components/navbar";
import Category from "./components/category";
import Footer from "./components/footer";
import Login from "./components/pages/login";
import Cart from "./components/pages/cart";
import SignUp from "./components/pages/signup";
import productRestaurant from "./components/pages/productRestaurant";
import Activity from "./components/pages/activity";
import Restaurant from "./components/pages/restaurant";
import Navigation from "./components/pages/navigation";
import Layout from "./components/layout";

export default function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Route exact path="/">
          <Layout children={<Login/>}/>
        </Route>
        <Route path="/login">
          <Layout children={<Login/>}/>
        </Route>
        <Route path="/signup">
          <Layout children={<SignUp/>}/>
        </Route>
        <Route path="/activity">
          <Layout children={<Activity/>}/>
        </Route>
        <Route path="/navigation">
          <Layout children={<Navigation/>}/>
        </Route>
        <Route path="/restaurant">
          <Layout children={<Activity/>}/>
        </Route>
        <Route path="/cart">
          <Layout children={<Cart />}/>
        </Route>
      </BrowserRouter>
    </div>
);
}