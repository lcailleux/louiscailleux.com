import React, {Component} from 'react';

import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';

import ProfilePicture from '../images/profile-picture.jpeg'

class Profile extends Component {
    render() {
        return (
            <Card>
                <Card.Content>
                    <Media>
                        <Media.Item renderAs="figure" position="left">
                            <Image renderAs="p" size={64} alt="64x64" src={ProfilePicture}  />
                        </Media.Item>
                        <Media.Item>
                            <div className="profile-info-row">
                                <span className="icon is-left"><i className="fas fa-envelope"/></span>
                                <span className="fa-label">louiscailleux@gmail.com</span>
                            </div>
                            <div className="profile-info-row">
                                <span className="icon is-left"><i className="fas fa-mobile-alt"/></span>
                                <span className="fa-label">(+33) 7 83 64 90 48</span>
                            </div>
                        </Media.Item>
                    </Media>
                </Card.Content>
            </Card>
        )
    }
}

export default Profile;