import React, {Component} from 'react';

import Heading from 'react-bulma-components/lib/components/heading';
import Columns from 'react-bulma-components/lib/components/columns';

import {about} from '.././helpers/urls';
import Block from '../components/block';
import i18n from '../i18n'
import Profile from '../components/profile';


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
                <Heading size={1}>{i18n.t(about.name)}</Heading>
                <Block identifier="test_block_1" />
            </main>
        );
    }
}

export default About;