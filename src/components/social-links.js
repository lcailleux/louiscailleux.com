import React, {Component} from "react";
import {github, linkedIn, stackOverflow} from '../helpers/social-urls';

class SocialLinks extends Component {
    render() {
        return (
            <div className="social-links">
                <a href={github.url} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-3x" />
                </a>
                <a href={linkedIn.url} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in fa-3x" />
                </a>
                <a href={stackOverflow.url} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-stack-overflow fa-3x" />
                </a>
            </div>
        );
    };
}

export default SocialLinks;