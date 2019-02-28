import React, {Component} from 'react';

import Heading from 'react-bulma-components/lib/components/heading';
import Image from 'react-bulma-components/lib/components/image';

import {about} from '.././helpers/urls';
import Block from '../components/block';
import AboutPicture from '../images/about-picture.JPG'

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
                <Image src={AboutPicture} size={100}/>
                <Block identifier="test_block_1" />
            </main>
        );
    }
}

export default About;