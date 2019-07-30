import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Page404 from '../pages/404';
import About from '../pages/about';
import Projects from '../pages/projects';
import Contact from '../pages/contact';

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={About}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route component={Page404} />
                </div>
            </Router>
        );
    }
}

export default Routes;