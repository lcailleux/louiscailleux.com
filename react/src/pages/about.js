import React, {Component} from 'react';

import Heading from 'react-bulma-components/lib/components/heading';
import Image from 'react-bulma-components/lib/components/image';

import {about} from '.././helpers/urls';
import {aboutStrings} from '.././helpers/strings';
import Block from '../components/block';
import AboutPicture from '../images/about-picture.jpg'

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
                <Heading size={1}>{about.name}</Heading>
                <div className="about-image">
                    <Image src={AboutPicture}/>
                </div>
                <div className="about-description">
                    <Block identifier={aboutStrings.block_description_identifier} />
                </div>
            </main>
        );
    }
}

export default About;