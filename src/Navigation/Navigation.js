import React from 'react'
import {BrowserRouter as Router, Switch, Route, useRouteMatch} from "react-router-dom";
import Home from "../Components/Home/Home";
import Admin from '../Components/Admin/admin';
import Login from "../Components/Login/Login";
import SignUp from '../Components/Login/SignUp';
import NotFound from '../Components/NotFound/NotFound';
import Upload from '../Components/Admin/UploadAndProductComponent/Upload';


export default function Navigation() {

    
    return (
  <Router>
    
    <Switch>
      
      <Route path="/admin" component={Admin}/>

      <Route path="/login" component={Login}/>
      
      <Route path="/signup" component={SignUp}/>

      <Route path="/" component={Home} exact/>

      <Route component={NotFound}/>
      
    </Switch>

    
  </Router>
    )
};