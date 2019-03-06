import React, {Component} from 'react';
import { withNamespaces } from 'react-i18next';
import 'flag-icon-css/css/flag-icon.css';

import i18n from '../i18n'

class LanguageSwitcher extends Component {
    render() {
        const changeLanguage = (lng, e) => {
            e.preventDefault();
            i18n.changeLanguage(lng);
            window.location.reload();
        };

        return (
            <div>
                <button className="link-button" onClick={(e) => changeLanguage('fr', e)}><span className="flag-icon flag-icon-fr svg"/></button>
                <button className="link-button" onClick={(e) => changeLanguage('ko', e)}><span className="flag-icon flag-icon-kr svg"/></button>
                <button className="link-button" onClick={(e) => changeLanguage('en', e)}><span className="flag-icon flag-icon-us svg"/></button>
            </div>
        )
    }
}

export default withNamespaces('translations')(LanguageSwitcher);