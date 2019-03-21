import React, {Component} from 'react';

import Ad from '../components/ad';
import SocialLinks from "./social-links";
import FooterContact from "./footer-contact";
import FooterCopyright from "./footer-copyright";

class FooterInfo extends Component {
    constructor(props) {
        super(props);
        this.year = (new Date()).getFullYear();
    }

    render() {
        return (
            <footer className="footer">
                <Ad/>
                <SocialLinks/>
                <FooterContact/>
                <FooterCopyright/>
            </footer>
        )
    }
}

export default FooterInfo;