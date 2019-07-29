import React, { Component } from 'react';

import Routes from './configuration/routes';
import FooterInfo from './components/footer-info';
import NavigationBar from './components/navigation-bar';

class App extends Component {
    componentDidMount() {
        import('./scss/app.scss')
    }

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