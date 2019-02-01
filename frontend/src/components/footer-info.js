import React, {Component} from 'react';

import Footer from 'react-bulma-components/lib/components/footer';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Hero from 'react-bulma-components/lib/components/hero';

import i18n from '../i18n'

class FooterInfo extends Component {
    render() {
        return (
            <Hero size="fullheight">
                <Hero.Footer>
                    <Footer>
                        <Container >
                            <Content style={{ textAlign: 'center'}}>
                                <p>
                                    {i18n.t("Copyright © 2019 Louis Cailleux. All rights reserved.")}
                                </p>
                            </Content>
                        </Container>
                    </Footer>
                </Hero.Footer>
            </Hero>
        )
    }
}

export default FooterInfo;