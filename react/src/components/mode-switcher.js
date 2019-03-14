import React from 'react';
import useDarkMode from 'use-dark-mode';

import Switch from "react-switch";
import Moon from '../images/moon.png';
import Sun from '../images/sun.png';

const ModeSwitcher = () => {
    const classNameDark = 'dark-mode';
    const classNameLight = 'light-mode';

    function onModeChange(val) {
        const elementsToChange = [
            document.documentElement,
            document.getElementsByClassName('card'),
            document.getElementsByClassName('fa-github'),
            document.getElementsByClassName('title'),
            document.getElementsByClassName('inside-content'),
            document.getElementsByClassName('navbar-item'),
            document.getElementsByClassName('submit-button')
        ];

        elementsToChange.map((item) => {
            if (item instanceof HTMLElement) {
                item.classList.add(val ? classNameDark : classNameLight);
                item.classList.remove(val ? classNameLight : classNameDark);
            } else {
                Array.prototype.filter.call(item, function(childItem){
                    childItem.classList.add(val ? classNameDark : classNameLight);
                    childItem.classList.remove(val ? classNameLight : classNameDark);
                });
            }
            return true;
        });
    }
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

export default ModeSwitcher;