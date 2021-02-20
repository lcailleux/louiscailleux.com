import React, {Component} from 'react';
import {about, projects, contact} from '.././helpers/urls';
import {defaultStrings} from '.././helpers/strings';
import LanguageSwitcher from './language-switcher'
import {ModeSwitcher} from "./mode-switcher";

class NavigationBar extends Component {
    state = { active : false };

    handleClick = () => {
        let { active } = this.state;
        this.setState({ active: !active });
    };

    render() {
        return (
            <header className="header">
                <div className="header__title">
                    <a href={about.url} className="header__title__link">{defaultStrings.full_name}</a>
                </div>
                <nav className="menu">
                    <ul className="menu__items" aria-label="menu">
                        <li className="menu__items__item" aria-label="About">
                            <a className="menu__items__item__link" href={about.url}>{about.name}</a>
                        </li>
                        <li className="menu__items__item" aria-label="Projects">
                            <a className="menu__items__item__link" href={projects.url}>{projects.name}</a>
                        </li>
                        {/*<li className="menu__items__item" aria-label="Contact">
                            <a className="menu__items__item__link" href={contact.url}>{contact.name}</a>
                        </li>*/}
                        <ModeSwitcher/>
                        <LanguageSwitcher/>
                    </ul>
                </nav>
                <nav className="hamburger-menu" aria-label="mobile-menu">
                    <div className="toggle">
                        <input type="checkbox" className="hamburger__toggle" id="hamburgerToggle"
                               name="hamburger toggle" aria-label="Hamburguer menu"/>
                        <label className="hamburger__toggle__icon" htmlFor="hamburgerToggle">
                            <i className="fas fa-bars"/>
                        </label>
                        <ul className="hamburger__items" aria-label="mobile-menu">
                            <li className="hamburger__items__item" aria-label="About">
                                <a className="hamburger__items__item__link" href={about.url}>{about.name}</a>
                            </li>
                            <li className="hamburger__items__item" aria-label="Projects">
                                <a className="hamburger__items__item__link" href={projects.url}>{projects.name}</a>
                            </li>
                            <li className="hamburger__items__item" aria-label="Contact">
                                <a className="hamburger__items__item__link" href={contact.url}>{contact.name}</a>
                            </li>
                            <li className="hamburger__items__item">
                                <ModeSwitcher/>
                            </li>
                            <li className="hamburger__items__item">
                                <LanguageSwitcher/>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default NavigationBar;