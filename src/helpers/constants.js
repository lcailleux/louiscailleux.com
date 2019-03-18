class Constants {
    static getConstant(name) {
        /* Node variables */
        if (process.env[name]) {
            return process.env[name];
        }
        return '';
    }
}

export default Constants;