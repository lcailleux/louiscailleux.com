import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import About from '../pages/about'
import Projects from '../pages/projects'
import Contact from '../pages/contact'

class Routes extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={About}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/projects" component={Projects}/>
                        <Route exact path="/contact" component={Contact}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Routes;