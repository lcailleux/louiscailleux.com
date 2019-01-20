import React, { Component } from 'react';
import {Helmet} from "react-helmet";

import Routes from './configuration/routes';

import FooterInfo from './components/footer-info';
import NavigationBar from './components/navigation-bar';

import './styles/app.scss';

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
           <FooterInfo />
       </div>
    );
  }
}

export default App;