import React, {Component} from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';
import {about, projects, contact} from '.././helpers/urls';
import {defaultStrings} from '.././helpers/strings';
import LanguageSwitcher from './language-switcher'
import ModeSwitcher from "./mode-switcher";

class NavigationBar extends Component {
    state = { active : false };

    handleClick = () => {
        let { active } = this.state;
        this.setState({ active: !active });
    };

    render() {
        return (
            <Navbar active={this.state.active} transparent={false} >
                <Navbar.Brand>
                    <Navbar.Container position="start">
                        <Navbar.Item className="name-item" active={false} hoverable={false}>{defaultStrings.full_name}</Navbar.Item>
                    </Navbar.Container>
                    <Navbar.Burger active={this.state.active.toString()} onClick={this.handleClick} />
                </Navbar.Brand>
                <Navbar.Menu active="true">
                    <Navbar.Container position="end">
                        <Navbar.Item href={about.url}>{about.name}</Navbar.Item>
                        <Navbar.Item href={projects.url}>{projects.name}</Navbar.Item>
                        <Navbar.Item href={contact.url}>{contact.name}</Navbar.Item>
                        <Navbar.Item active={false} hoverable={false} renderAs="span">
                            <LanguageSwitcher />
                        </Navbar.Item>
                        <Navbar.Item active={false} hoverable={false} renderAs="span">
                            <ModeSwitcher/>
                        </Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        );
    }
}

export default NavigationBar;