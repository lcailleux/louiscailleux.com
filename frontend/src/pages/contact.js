import React, {Component} from 'react';
import Field from "react-bulma-components/lib/components/form/components/field";
import Label from "react-bulma-components/lib/components/form/components/label";
import Control from "react-bulma-components/lib/components/form/components/control";
import Input from "react-bulma-components/lib/components/form/components/input";
import Textarea from "react-bulma-components/lib/components/form/components/textarea";
import Help from "react-bulma-components/lib/components/form/components/help";
import Button from "react-bulma-components/lib/components/button/button";

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onChange(event) {
    this.setState({typed: event.target.value})
  }

  render() {
    return (
      <main className="container-wrap inside-content">
        <article className="container">
          <header className="inside-header row">
            <h1 className="content-title col-sm-12">Contact Me</h1>
          </header>
          <div className="content">
            <form className="form-horizontal cmd-line" method="POST" action="my_redirect_url">
                <div className="personal-information">
                  <Field>
                    <Label>Name</Label>
                    <Control>
                      <Input type="text" placeholder="Name" onChange={this.onChange.bind(this)}/>
                    </Control>
                  </Field>
                  <Field>
                    <Label>Email</Label>
                    <Control>
                      <Input type="email" placeholder="Email" onChange={this.onChange.bind(this)} />
                    </Control>
                    <Help color="danger">This email is invalid</Help>
                  </Field>
                  <Field>
                    <Label>Phone</Label>
                    <Control>
                      <Input type="tel" placeholder="Phone number" onChange={this.onChange.bind(this)} />
                    </Control>
                    <Help color="danger">This phone number is invalid</Help>
                  </Field>
                </div>
                <div className="message-detail">
                  <Field>
                    <Label>Subject</Label>
                    <Control>
                      <Input type="text" placeholder="Subject" onChange={this.onChange.bind(this)} />
                    </Control>
                  </Field>
                  <Field>
                    <Label>Message</Label>
                    <Control>
                      <Textarea placeholder="Message" onChange={this.onChange.bind(this)} />
                    </Control>
                  </Field>
                </div>
                <Control>
                    <Button type="primary">Send Message</Button>
                </Control>
            </form>
          </div>
        </article>
      </main>
    )
  }
}

export default Contact;