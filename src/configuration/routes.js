import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import withTracker from './with-tracker';
import About from '../pages/about';
import Projects from '../pages/projects';
import Contact from '../pages/contact';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={withTracker(About)}/>
                    <Route exact path="/about" component={withTracker(About)}/>
                    <Route exact path="/projects" component={withTracker(Projects)}/>
                    <Route exact path="/contact" component={withTracker(Contact)}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;