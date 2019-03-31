import React from 'react';
import Constants from '../helpers/constants';

export default class Ad extends React.Component {
    componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: Constants.getConstant("REACT_APP_AD_SENSE_CLIENT"),
            enable_page_level_ads: true
        });
    }

    render () {
        return (
            <div className='ad'>
            </div>
        );
    }
}