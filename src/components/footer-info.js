import React, {Component} from 'react';

import Footer from 'react-bulma-components/lib/components/footer';
import Content from 'react-bulma-components/lib/components/content';
import Hero from 'react-bulma-components/lib/components/hero';

import Ad from '../components/ad';
import SocialLinks from "./social-links";

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
                        <Content>
                            <SocialLinks/>
                            <Ad/>
                            {/*<p>Copyright © {this.year} {defaultStrings.full_name}. {footerStrings.all_right_reserved}</p>*/}
                        </Content>
                    </Footer>
                </Hero.Footer>
            </Hero>
        )
    }
}

export default FooterInfo;