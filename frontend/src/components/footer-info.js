import React, {Component} from 'react';

import Footer from 'react-bulma-components/lib/components/footer';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Hero from 'react-bulma-components/lib/components/hero';

import i18n from '../i18n'
import {about, contact} from "../helpers/urls";
import SocialLinks from "./social-links";

class FooterInfo extends Component {
    constructor(props) {
        super(props);
        this.year = (new Date()).getFullYear();
    }

    render() {
        return (
            <Hero size="fullheight">
                <Hero.Footer>
                    <Footer>
                        <Container >
                            <Content>
                                <ul>
                                    <li><a href={about.url}>{i18n.t("About")}</a></li>
                                    <li><a href={contact.url}>{i18n.t(contact.name)}</a></li>
                                </ul>
                            </Content>
                            <Content style={{ textAlign: 'center'}}>
                                <SocialLinks/>
                                <p>Copyright © {this.year} Louis Cailleux. {i18n.t('All rights reserved.')}</p>
                            </Content>
                        </Container>
                    </Footer>
                </Hero.Footer>
            </Hero>
        )
    }
}

export default FooterInfo;