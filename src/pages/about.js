import React, {Component} from 'react';
import { Helmet } from "react-helmet";
import {about} from '../helpers/urls';
import {aboutStrings} from '../helpers/strings';

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
                    <meta name="description" content="Hi I am Louis, a developer passionate about AI. I continuously enjoy learning about new technologies." />
                </Helmet>
                <main className="hero">
                </main>
                <section className="section">
                    <h1 className="section__title">{aboutStrings.greetings}</h1>
                    <div className="section__content">
                        <p className="display-block" >{aboutStrings.about_first_paragraph}</p>
                        <p className="display-block" >{aboutStrings.about_second_paragraph}</p>
                        <p className="display-block" >{aboutStrings.about_third_paragraph}</p>
                        <p className="display-block" >{aboutStrings.about_fourth_paragraph}</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;