import React from 'react';

export default class Ad extends React.Component {
    componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-3540587565126963",
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