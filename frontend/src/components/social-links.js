import React, {Component} from "react";
import {github, linkedIn, stackOverflow} from '../helpers/social-urls';

class SocialLinks extends Component {
    render() {
        return (
            <div>
                <a href={github.url} target="_blank" rel="noopener noreferrer">
                    <img src={github.icon} height="32" width="32" alt={github.name}/>
                </a>
                <a href={linkedIn.url} target="_blank" rel="noopener noreferrer">
                    <img src={linkedIn.icon} height="32" width="32" alt={linkedIn.name}/>
                </a>
                <a href={stackOverflow.url} target="_blank" rel="noopener noreferrer">
                    <img src={stackOverflow.icon} height="32" width="32" alt={stackOverflow.name}/>
                </a>
            </div>
        );
    };
}

export default SocialLinks;