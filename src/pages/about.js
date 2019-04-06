import React, {Component} from 'react';

import {Helmet} from "react-helmet";
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
                <Helmet>
                    <link rel="canonical" href="https://louiscailleux.com/" />
                    <meta name="description" content ="Hi I am Louis, a developer passionate about AI. I continuously enjoy learning about new technologies." />
                </Helmet>
                <main className="hero">
                </main>
                <Block identifier={aboutStrings.block_description_identifier} />
            </div>
        );
    }
}

export default About;