import React from 'react';
import useDarkMode from 'use-dark-mode';

import Switch from "react-switch";
import Moon from '../images/moon.png';
import Sun from '../images/sun.png';

export const onModeChange = (val) => {
    const classNameDark = 'dark-mode';
    const classNameLight = 'light-mode';
    const elementsToChange = [
        document.documentElement,
        document.getElementsByClassName('card'),
        document.getElementsByClassName('fa-github'),
        document.getElementsByClassName('title'),
        document.getElementsByClassName('inside-content'),
        document.getElementsByClassName('navbar-item'),
        document.getElementsByClassName('navbar-menu'),
        document.getElementsByClassName('navbar-burger'),
        document.getElementsByClassName('submit-button'),
        document.getElementsByClassName('project-link')
    ];

    elementsToChange.map((item) => {
        if (item instanceof HTMLElement) {
            item.classList.add(val ? classNameDark : classNameLight);
            item.classList.remove(val ? classNameLight : classNameDark);
        } else {
            for (let i = (item.length - 1); i >= 0 ; i--) {
                console.log(item[i]);
                item[i].classList.add(val ? classNameDark : classNameLight);
                item[i].classList.remove(val ? classNameLight : classNameDark);
            }
        }
        return true;
    });
};

export const ModeSwitcher = () => {
    const darkMode = useDarkMode(false, {onChange: onModeChange});

    function switchMode(val) {
        darkMode.toggle();
        if (val) {
            darkMode.enable();
        } else {
            darkMode.disable();
        }
    }

    return (
        <Switch
            onChange={switchMode}
            onColor="#3273dc"
            checkedIcon={
                <img src={Moon} alt="moon-icon" />
            }
            uncheckedIcon={
                <img src={Sun} alt="sun-icon" />
            }
            checked={darkMode.value}
        />
    );
};