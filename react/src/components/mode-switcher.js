import React from 'react';
import useDarkMode from 'use-dark-mode';

import Toggle from './toggle';

const ModeSwitcher = () => {
    const classNameDark = 'dark-mode';
    const classNameLight = 'light-mode';

    function onModeChange(val) {
        const elementsToChange = [
            document.documentElement,
            document.getElementsByClassName('card'),
            document.getElementsByClassName('fa-github')
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
        });
    }
    const darkMode = useDarkMode(false, {onChange: onModeChange});

    return (
        <div>
            <button type="button" onClick={darkMode.disable}>
                ☀
            </button>
            <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
            <button type="button" onClick={darkMode.enable}>
                ☾
            </button>
        </div>
    );
};

export default ModeSwitcher;