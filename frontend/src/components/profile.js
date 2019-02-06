import React, {Component} from 'react';

import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';
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
                            <Heading size={4}>Louis Cailleux</Heading>
                        </Media.Item>
                    </Media>
                    <Content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <br />
                    </Content>
                </Card.Content>
            </Card>
        )
    }
}

export default Profile;