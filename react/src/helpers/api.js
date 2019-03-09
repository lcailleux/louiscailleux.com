import axios from "axios";

class Api {
    /**
     *
     * @returns {string}
     * @constructor
     */
    static get TYPE_GET() {
        return 'get';
    }

    /**
     *
     * @returns {string}
     * @constructor
     */
    static get TYPE_POST() {
        return 'post';
    }

        /**
     *
     * @returns {string}
     * @constructor
     */
    static get API_URL() {
        if (process.env.BACKEND_URL) {
            return process.env.BACKEND_URL;
        }
        return '';
    }

    /**
     *
     * @returns {string}
     * @constructor
     */
    static get API_PREFIX() {
        return `${this.API_URL}V1/api/`
    }

    /**
     *
     * @returns {string}
     * @constructor
     */
    static get CONTACT_URL() {
        return `${this.API_PREFIX}contact`;
    }

    /**
     *
     * @param identifier
     * @param language
     * @returns {*}
     */
    static BLOCK_URL(identifier, language) {
        return `${this.API_PREFIX}block?identifier=` + identifier + '&language=' + language
    }

    /**
     *
     * @param url
     * @param type
     * @param params
     * @returns {*}
     */
    static callApi(url, type, params) {
        switch (type) {
            case this.TYPE_GET:
                return axios.get(url);
            case this.TYPE_POST:
                return axios.post(url, params);
            default:
                break;
        }
        return null;
    }
}

export default Api;