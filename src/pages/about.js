import React, {Component} from 'react';

import {about} from '.././helpers/urls';
import {aboutStrings} from '../helpers/strings';
import Block from '../components/block';

class About extends Component {
    componentWillMount() {
        document.title = about.documentTitle;
    }

    componentDidMount () {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <main className="hero">
                </main>
                <Block identifier={aboutStrings.block_description_identifier} />
            </div>
        );
    }
}

export default About;