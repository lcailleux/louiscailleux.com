import React, { Component } from 'react';
import {Helmet} from "react-helmet";

import Routes from './configuration/routes';

import NavigationBar from './components/navigation-bar';

class App extends Component {
  render() {
    return (
        <div id="main">
           <Helmet>
              <meta name="description" content="Louis Cailleux's portfolio"/>
              <meta name="keyword" content="programming, python, django, react"/>
           </Helmet>
           <NavigationBar />
           <Routes/>
       </div>
    );
  }
}

export default App;