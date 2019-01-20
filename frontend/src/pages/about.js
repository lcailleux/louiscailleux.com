import React, {Component} from 'react';

import Heading from 'react-bulma-components/lib/components/heading';

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
       <Heading size={8}>{about.name}</Heading>
      </main>
    );
  }
}

export default About;