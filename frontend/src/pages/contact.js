import React, {Component} from 'react';

import axios from 'axios';

/* React bulma components */
import Field from "react-bulma-components/lib/components/form/components/field";
import Label from "react-bulma-components/lib/components/form/components/label";
import Control from "react-bulma-components/lib/components/form/components/control";
import Input from "react-bulma-components/lib/components/form/components/input";
import Textarea from "react-bulma-components/lib/components/form/components/textarea";
import Help from "react-bulma-components/lib/components/form/components/help";
import Button from "react-bulma-components/lib/components/button/button";

import {contact} from '.././helpers/urls';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }

  componentWillMount() {
    document.title = contact.documentTitle;
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  validate = () => {
    return true;
  }

  handleSubmit = event => {
    event.preventDefault();

    const data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      subject: this.state.subject,
      message: this.state.message
    };


    if (this.validate()) {
      axios.post('api/contact', data)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
  }

  render() {
    return (
      <main className="container-wrap inside-content">
        <article className="container">
          <header className="inside-header row">
            <h1 className="content-title col-sm-12">Contact Me</h1>
          </header>
          <div className="content">
            <form className="form-horizontal cmd-line" onSubmit={this.handleSubmit}>
                <div className="personal-information">
                  <Field>
                    <Label>Name</Label>
                    <Control>
                      <Input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.onChange.bind(this)}/>
                    </Control>
                  </Field>
                  <Field>
                    <Label>Email</Label>
                    <Control>
                      <Input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.onChange.bind(this)} />
                    </Control>
                    <Help color="danger">This email is invalid</Help>
                  </Field>
                  <Field>
                    <Label>Phone</Label>
                    <Control>
                      <Input type="tel" name="phone" placeholder="Phone number" value={this.state.phone} onChange={this.onChange.bind(this)} />
                    </Control>
                    <Help color="danger">This phone number is invalid</Help>
                  </Field>
                </div>
                <div className="message-detail">
                  <Field>
                    <Label>Subject</Label>
                    <Control>
                      <Input type="text" name="subject" placeholder="Subject" value={this.state.subject} onChange={this.onChange.bind(this)} />
                    </Control>
                  </Field>
                  <Field>
                    <Label>Message</Label>
                    <Control>
                      <Textarea name="message" placeholder="Message" value={this.state.message} onChange={this.onChange.bind(this)} />
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