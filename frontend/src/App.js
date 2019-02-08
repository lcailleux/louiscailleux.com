import React, { Component } from 'react';
import {Helmet} from "react-helmet";

import Routes from './configuration/routes';

import Profile from './components/profile';
import FooterInfo from './components/footer-info';
import NavigationBar from './components/navigation-bar';
import Columns from 'react-bulma-components/lib/components/columns';

import './scss/app.scss';

class App extends Component {
    render() {
        return (
            <div id="main">
                <Helmet>
                    <meta name="description" content="Louis Cailleux's portfolio"/>
                    <meta name="keyword" content="programming, python, django, react"/>
                </Helmet>
                <NavigationBar />
                <Columns>
                    <Columns.Column>
                        <Profile/>
                    </Columns.Column>
                    <Columns.Column tablet={{size: 'two-thirds'}} desktop={{size: 'two-thirds'}} widescreen={{size: 'two-thirds'}} fullhd={{size: 'two-thirds'}}>
                        <Routes/>
                        <FooterInfo />
                    </Columns.Column>
                    <Columns.Column />
                </Columns>
            </div>
        );
    }
}

export default App;