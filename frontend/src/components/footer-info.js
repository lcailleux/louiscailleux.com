import React, {Component} from 'react';

import Footer from 'react-bulma-components/lib/components/footer';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Hero from 'react-bulma-components/lib/components/hero';

class FooterInfo extends Component {
  render() {
    return (
     <Hero size="fullheight">
        <Hero.Head renderAs="header" />
        <Hero.Body />
        <Hero.Footer>
          <Footer>
            <Container>
              <Content style={{ textAlign: 'center' }}>
                <p>
                  Copyright © 2019 Louis Cailleux. All rights reserved.
                </p>
              </Content>
            </Container>
          </Footer>
        </Hero.Footer>
     </Hero>
    )
  }
}

export default FooterInfo;