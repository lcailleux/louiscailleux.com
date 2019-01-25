import React, {Component} from 'react';
import { withNamespaces } from 'react-i18next';

import i18n from '../i18n'

class LanguageSwitcher extends Component {
  render() {
    const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng);
      window.location.reload();
    };

    return (
        <div>
            <button onClick={() => changeLanguage('en')}>en</button>
            <button onClick={() => changeLanguage('fr')}>fr</button>
        </div>
    )
  }
}

export default withNamespaces('translations')(LanguageSwitcher);