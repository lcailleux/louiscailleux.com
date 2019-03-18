import runtimeEnv from '@mars/heroku-js-runtime-env';

class Constants {
    static getConstant(name) {
        const env = runtimeEnv();

        console.log("runtime");
        console.log(env);
        console.log("compiled");
        console.log(process.env);

        /* Runtime variables */
        if (env[name]) {
            console.log(env[name]);
            return env[name]
        }

        /* Node variables */
        if (process.env[name]) {
            console.log(process.env[name]);
            return process.env[name];
        }
        return '';
    }
}

export default Constants;