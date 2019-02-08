import React, {Component} from 'react';

import Footer from 'react-bulma-components/lib/components/footer';
import Content from 'react-bulma-components/lib/components/content';
import Hero from 'react-bulma-components/lib/components/hero';

import SocialLinks from "./social-links";
import {defaultStrings, footerStrings} from "../helpers/strings";

class FooterInfo extends Component {
    constructor(props) {
        super(props);
        this.year = (new Date()).getFullYear();
    }

    render() {
        return (
            <Hero>
                <Hero.Footer>
                    <Footer>
                        <Content style={{ textAlign: 'center'}}>
                            <SocialLinks/>
                            <p>Copyright © {this.year} {defaultStrings.full_name}. {footerStrings.all_right_reserved}</p>
                        </Content>
                    </Footer>
                </Hero.Footer>
            </Hero>
        )
    }
}

export default FooterInfo;