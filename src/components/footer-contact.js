import React, {Component} from 'react';

class FooterContact extends Component {
    render() {
        return (
            <div className="footer__contact">
                <p className="footer__contact__item">
                    <span><i className="far fa-envelope" /></span>
                    <a href="mailto:louiscailleux@gmail.com" className="footer__contact__link">
                        louiscailleux@gmail.com
                    </a>
                </p>
                <p className="footer__contact__item">
                    <span><i className="fas fa-phone" /></span>
                    <a href="tel:(+33)%207%2083%2064%2090%2048" className="footer__contact__link">
                        (+33) 7 83 64 90 48
                    </a>
                </p>
                <p className="footer__contact__item">
                    <span><i className="fas fa-map-marker-alt" /></span>
                    France
                </p>
            </div>
        )
    }
}

export default FooterContact;