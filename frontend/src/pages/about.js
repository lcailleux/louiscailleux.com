import React, {Component} from 'react';

import Heading from 'react-bulma-components/lib/components/heading';

import {about} from '.././helpers/urls';
import i18n from '../i18n'


class About extends Component {
  componentWillMount() {
    document.title = i18n.t(about.documentTitle);
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return (
        <main className="container-wrap inside-content">
          <Heading size={6}>{i18n.t(about.name)}</Heading>
        </main>
    );
  }
}

export default About;