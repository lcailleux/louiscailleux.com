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
                <Columns>
                    <Columns.Column>
                        <Profile/>
                    </Columns.Column>
                    <Columns.Column tablet={{size: 'two-thirds'}} desktop={{size: 'two-thirds'}} widescreen={{size: 'two-thirds'}} fullhd={{size: 'two-thirds'}}>
                        <Heading size={1}>{i18n.t(about.name)}</Heading>
                        <Block identifier="test_block_1" />
                    </Columns.Column>
                    <Columns.Column />
                </Columns>
            </main>
        );
    }
}

export default About;