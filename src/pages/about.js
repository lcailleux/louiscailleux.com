import React, {Component} from 'react';

import Image from 'react-bulma-components/lib/components/image';

import {about} from '.././helpers/urls';
import {aboutStrings} from '../helpers/strings';
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
            <div>
                <article className="post">
                    <div className="about-image">
                        <Image src={AboutPicture}/>
                    </div>
                </article>
                <Block identifier={aboutStrings.block_description_identifier} />
            </div>
        );
    }
}

export default About;