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
                    <script defer src="https://use.fontawesome.com/releases/v5.7.1/js/all.js"
                            integrity="sha384-eVEQC9zshBn0rFj4+TU78eNA19HMNigMviK/PU/FFjLXqa/GKPgX58rvt5Z8PLs7"
                            crossOrigin="anonymous"/>
                </Helmet>
                <Columns multiline={false}>
                    <Columns.Column>
                        <Profile/>
                    </Columns.Column>
                    <Columns.Column tablet={{size: null}} desktop={{size: 'two-thirds'}} widescreen={{size: 'two-thirds'}} fullhd={{size: 'two-thirds'}}>
                        <NavigationBar />
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