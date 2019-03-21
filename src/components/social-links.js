import React, {Component} from "react";
import {github, linkedIn, stackOverflow} from '../helpers/social-urls';

class SocialLinks extends Component {
    render() {
        return (
            <div className="footer__social">
                <a href={github.url} target="_blank" rel="noopener noreferrer" className="footer__social__link">
                    <span><i className="fab fa-github fa-w-16"/></span>
                </a>
                <a href={linkedIn.url} target="_blank" rel="noopener noreferrer" className="footer__social__link">
                    <i className="fab fa-linkedin-in fa-w-16" />
                </a>
                <a href={stackOverflow.url} target="_blank" rel="noopener noreferrer" className="footer__social__link">
                    <i className="fab fa-stack-overflow fa-w-16" />
                </a>
            </div>
        );
    };
}

export default SocialLinks;