import React, {Component} from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';
import {about, contact} from '.././helpers/urls';
import LanguageSwitcher from './language-switcher'

class NavigationBar extends Component {
    state = { active : false };

    handleClick = () => {
        let { active } = this.state;
        this.setState({ active: !active });
    };

    render() {
        return (
            <Navbar color="dark" active={this.state.active} transparent={false} >
                <Navbar.Brand>
                    <Navbar.Burger active={this.state.active.toString()} onClick={this.handleClick} />
                </Navbar.Brand>
                <Navbar.Menu active="true">
                    <Navbar.Container position="start">
                        <Navbar.Item href={about.url}>{about.name}</Navbar.Item>
                        <Navbar.Item href={contact.url}>{contact.name}</Navbar.Item>
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