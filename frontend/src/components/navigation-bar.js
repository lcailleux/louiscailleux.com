import React, {Component} from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';
import {about, contact} from '.././helpers/urls';
import LanguageSwitcher from './language-switcher'

import i18n from 'i18next'

class NavigationBar extends Component {
    constructor(props){
        super(props);
        this.state = { isOpen: false };
    }

    openDropDown() {
        this.setState({ isOpen: true });
    }

    closeDropDown() {
        this.setState({ isOpen: false });
    }

    toggleDropDown() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        var {open} = this.state;
        return (
            <Navbar color="dark" active={false} transparent={false} >
                <Navbar.Menu active={open}>
                    <Navbar.Container position="start">
                        <Navbar.Item href={about.url}>{i18n.t("About")}</Navbar.Item>
                        <Navbar.Item href={contact.url}>{i18n.t(contact.name)}</Navbar.Item>
                    </Navbar.Container>
                    <Navbar.Container position="end">
                        <Navbar.Item active={false} hoverable={false} renderAs="span">
                            <LanguageSwitcher />
                        </Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        );
    }
}

export default NavigationBar;