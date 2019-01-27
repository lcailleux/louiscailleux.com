import React, {Component} from 'react';
import Navbar from "react-bulma-components/lib/components/navbar/navbar";
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
            <div className="nav-wrap nav-flatusual transit-all" id="header">
                <Navbar color="primary" fixed="top" active={true} transparent={false}>
                    <Navbar.Brand>
                        <Navbar.Burger
                            active={open}
                            onClick={() =>
                                this.setState(state => {
                                    open = !state.open;
                                })
                            }
                        />
                    </Navbar.Brand>
                    <Navbar.Menu active={open}>
                        <Navbar.Container>
                            <Navbar.Item href={about.url}>{i18n.t("About")}</Navbar.Item>
                        </Navbar.Container>
                        <Navbar.Container>
                            <LanguageSwitcher />
                        </Navbar.Container>
                        <Navbar.Container position="end">
                            <Navbar.Item href={contact.url}>{i18n.t(contact.name)}</Navbar.Item>
                        </Navbar.Container>
                    </Navbar.Menu>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;