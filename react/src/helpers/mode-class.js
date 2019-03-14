class ModeClass {
    static getValue() {
        let classNameDark = 'dark-mode';
        let classNameLight = 'light-mode';
        let value = localStorage.getItem('darkMode');
        return value ? classNameDark : classNameLight;
    };
}

export default ModeClass;
