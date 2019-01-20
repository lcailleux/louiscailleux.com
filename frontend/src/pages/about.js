import React, {Component} from 'react';
import {about} from '.././helpers/urls';


class About extends Component {
  componentWillMount() {
    document.title = about.documentTitle;
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <main className="container-wrap inside-content">
      </main>
    );
  }
}

export default About;