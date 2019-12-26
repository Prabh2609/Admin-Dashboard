import React, { Component }  from 'react';
import classes from './App.module.css';
import Dashboard from './Containers/Dashboard/dashboard'
import Navbar from './Components/navbar/navbar';
import Login from './Containers/login/login'
import Footer from './Components/footer/footer'
import Product from './Containers/product/product'
import Account from './Containers/account/account'
import { getData } from './Utils/Backend';
import { Switch, Route, Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import {RouteEndPoints} from './Utils/RouteEndPoints';
import Addproduct from './Containers/addproduct/addproduct';



class App extends Component {

  componentDidMount(){
    getData()
  }
  render(){
  return (
    <div className={classes.mainBody}>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path={RouteEndPoints.Dashboard} component={Dashboard}/>
          <Route path={RouteEndPoints.Product} component={Product}/>
          <Route path={RouteEndPoints.Accounts} component={Account}/>
          <Route path={RouteEndPoints.AddNewProduct} component={Addproduct}/>
          <Route path={RouteEndPoints.Login} component={Login}/>
        </Switch>
         <Footer/>
      </BrowserRouter>
    </div>
  );
}}

export default App;