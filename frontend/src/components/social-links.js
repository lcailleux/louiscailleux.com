import React, {Component} from "react";
import {github, linkedIn} from '../helpers/social-urls';

class SocialLinks extends Component {
  render() {
    return (
      <ul className="list-unstyled inline-list">
        <li key={0}>
          <a href={github.url} target="_blank" rel="noopener noreferrer">
            <img src={github.icon} height="32" width="32" alt={github.name}/>
          </a>
        </li>
        <li key={1}>
          <a href={linkedIn.url} target="_blank" rel="noopener noreferrer">
            <img src={linkedIn.icon} height="32" width="32" alt={linkedIn.name}/>
          </a>
        </li>
      </ul>
    );
  };
}

export default SocialLinks;