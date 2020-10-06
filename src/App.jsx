import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { withRouter } from 'react-router';
import {UserDetails} from './pages/UserDetails.jsx'
import {WhoWatch} from './pages/WhoWatch.jsx'

class _App extends Component {
  render() {

    return (

      <div className="App">
        <Switch>
        <Route component= {UserDetails} path ='/user/:userId'/>
        <Route component={WhoWatch} path='/user'/>
        <Route component= {Home} path ='/'/>
        </Switch>
      </div>
    );
  };

};


export default withRouter(_App);
