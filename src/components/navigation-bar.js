import React, {Component} from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';
import {about, projects, contact} from '.././helpers/urls';
import {defaultStrings} from '.././helpers/strings';
import LanguageSwitcher from './language-switcher'
import {ModeSwitcher, onModeChange} from "./mode-switcher";

class NavigationBar extends Component {
    state = { active : false };

    handleClick = () => {
        let { active } = this.state;
        this.setState({ active: !active });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        onModeChange(localStorage.getItem('darkMode'));
    }

    render() {
        return (
            <header className="header">
                <div className="header__title">
                    <a href={about.url} className="header__title__link">{defaultStrings.full_name}</a>
                </div>
                <Navbar active={this.state.active} transparent={false} className="menu">
                    <Navbar.Brand>
                        <Navbar.Burger active={this.state.active.toString()} onClick={this.handleClick} />
                    </Navbar.Brand>
                    <Navbar.Container renderAs="ul">
                        <li className="menu__items__item">
                            <Navbar.Item className="menu__items__item__link" href={about.url}>{about.name}</Navbar.Item>
                        </li>
                        <li className="menu__items__item">
                            <Navbar.Item className="menu__items__item__link" href={projects.url}>{projects.name}</Navbar.Item>
                        </li>
                        <li className="menu__items__item">
                            <Navbar.Item className="menu__items__item__link" href={contact.url}>{contact.name}</Navbar.Item>
                        </li>
                        <li className="menu__items__item">
                            <Navbar.Item active={false} hoverable={false} renderAs="span">
                                <ModeSwitcher/>
                            </Navbar.Item>
                        </li>
                        <li className="menu__items__item">
                            <Navbar.Item active={false} hoverable={false} renderAs="span">
                                <LanguageSwitcher />
                            </Navbar.Item>
                        </li>
                    </Navbar.Container>
                </Navbar>
            </header>
        );
    }
}

export default NavigationBar;