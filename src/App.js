import React, { Component } from 'react';

import Routes from './configuration/routes';
import FooterInfo from './components/footer-info';
import NavigationBar from './components/navigation-bar';

import './scss/app.scss';
import AdsBanner from "./components/ads-banner";

class App extends Component {
    render() {
        return (
            <div id="main">
                <NavigationBar />
                <Routes />
                <AdsBanner />
                <FooterInfo />
            </div>
        );
    }
}

export default App;