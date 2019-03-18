import axios from "axios";
import Cookies from "./cookies"

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
        if (process.env.REACT_APP_BACKEND_URL) {
            return process.env.REACT_APP_BACKEND_URL;
        }
        return '';
    }

    /**
     *
     * @returns {string}
     * @constructor
     */
    static get API_PREFIX() {
        return `${this.API_URL}/V1/api/`
    }

    /**
     *
     * @returns {string}
     * @constructor
     */
    static get CONTACT_URL() {
        return `${this.API_PREFIX}contact/`;
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
     * @param language
     * @returns {*}
     */
    static PROJECTS_URL(language) {
        return `${this.API_PREFIX}projects?language=` + language
    }

    /**
     *
     * @param url
     * @param type
     * @param params
     * @returns {*}
     */
    static callApi(url, type, params) {
        let apiKey = process.env.REACT_APP_API_KEY;
        let config = {"Api-Key": apiKey};

        switch (type) {
            case this.TYPE_GET:
                return axios.get(url, {headers: config});
            case this.TYPE_POST:
                config['X-CSRFToken'] = Cookies.getCookie('csrftoken');
                return axios.post(url, params, {headers: config});
            default:
                break;
        }
        return null;
    }
}

export default Api;