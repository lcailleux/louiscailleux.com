import React, {Component} from 'react';
import { withNamespaces } from 'react-i18next';

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
                <button className="link-button" onClick={(e) => changeLanguage('en', e)}></button>
                <button className="link-button" onClick={(e) => changeLanguage('fr', e)}>FR</button>
                <button className="link-button" onClick={(e) => changeLanguage('ko', e)}>KO</button>
            </div>
        )
    }
}

export default withNamespaces('translations')(LanguageSwitcher);