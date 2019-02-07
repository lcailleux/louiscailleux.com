import React, {Component} from 'react';

import Footer from 'react-bulma-components/lib/components/footer';
import Content from 'react-bulma-components/lib/components/content';
import Hero from 'react-bulma-components/lib/components/hero';

import i18n from '../i18n'
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
                        <Content style={{ textAlign: 'center'}}>
                            <SocialLinks/>
                            <p>Copyright © {this.year} Louis Cailleux. {i18n.t('All rights reserved.')}</p>
                        </Content>
                    </Footer>
                </Hero.Footer>
            </Hero>
        )
    }
}

export default FooterInfo;