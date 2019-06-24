import React, { Component } from 'react';

import Routes from './configuration/routes';
import FooterInfo from './components/footer-info';
import NavigationBar from './components/navigation-bar';

import './scss/app.scss';

class App extends Component {
    render() {
        return (
            <div id="main">
                <NavigationBar />
                <Routes />
                <FooterInfo />
            </div>
        );
    }
}

export default App;