import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './nav/navbar.component';
import HomeComponent from './home/home.component';
import LoginComponent from './login/login.component';
import ProductsComponent from './products/products.component';
class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Route exact path="/" component={HomeComponent} />
        <Route path="/login" component={LoginComponent} />
        <Route path="/products" component={ProductsComponent} />
      </div>
    );
  }
}

export default App;
