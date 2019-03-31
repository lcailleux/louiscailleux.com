import React, {Component} from 'react';
import Constants from '../helpers/constants';

export default class AdsInitialize extends Component {
    componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: Constants.getConstant("REACT_APP_AD_SENSE_CLIENT"),
            enable_page_level_ads: true
        });
    }

    render () {
        return (
            <div/>
        );
    }
}