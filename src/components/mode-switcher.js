import React from 'react';
import useDarkMode from 'use-dark-mode';

import Switch from "react-switch";
import Moon from '../images/moon.png';
import Sun from '../images/sun.png';

export const ModeSwitcher = () => {
    const darkMode = useDarkMode(false, {element: document.documentElement});

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