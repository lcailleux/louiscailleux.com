import React, {Component} from 'react';

import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

/* React bulma components */
import Field from "react-bulma-components/lib/components/form/components/field";
import Label from "react-bulma-components/lib/components/form/components/label";
import Control from "react-bulma-components/lib/components/form/components/control";
import Input from "react-bulma-components/lib/components/form/components/input";
import Textarea from "react-bulma-components/lib/components/form/components/textarea";
import Button from "react-bulma-components/lib/components/button/button";
import Heading from 'react-bulma-components/lib/components/heading';

import {contact} from "../helpers/urls";
import {contactStrings} from "../helpers/strings";

class Contact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  constructor(props) {
    super(props);
    this.recaptchaRef = React.createRef();
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
  };

  handleSubmit = event => {
    event.preventDefault();

    const data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      subject: this.state.subject,
      message: this.state.message
    };

    this.recaptchaRef.current.execute();

    if (this.validate()) {
      axios.post('V1/api/contact', data)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
    }
  };

  render() {
    return (
        <main className="container-wrap inside-content">
          <div>
            <Heading size={1}>{contact.name}</Heading>
            <div className="form-container">
              <form onSubmit={this.handleSubmit}>
                <fieldset className="personal-information">
                  <Field className="row">
                    <Label>{contactStrings.full_name}</Label>
                    <Control className="col">
                      <Input type="text" name="name" placeholder={contactStrings.full_name} size="large" value={this.state.name} onChange={this.onChange.bind(this)}/>
                    </Control>
                  </Field>
                  <Field className="row">
                    <Label>{contactStrings.email}</Label>
                    <Control className="col">
                      <Input type="email" name="email" placeholder={contactStrings.email} size="large" value={this.state.email} onChange={this.onChange.bind(this)} />
                    </Control>
                  </Field>
                  <Field className="row">
                    <Label>{contactStrings.phone_number}</Label>
                    <Control className="col">
                      <Input type="tel" name="phone" placeholder={contactStrings.phone_number} size="large" value={this.state.phone} onChange={this.onChange.bind(this)} />
                    </Control>
                  </Field>
                </fieldset>
                <fieldset className="message-detail">
                  <Field className="row">
                    <Label>{contactStrings.subject}</Label>
                    <Control className="col">
                      <Input type="text" name="subject" placeholder={contactStrings.subject} size="large" value={this.state.subject} onChange={this.onChange.bind(this)} />
                    </Control>
                  </Field>
                  <Field className="row">
                    <Label>{contactStrings.message}</Label>
                    <Control className="col">
                      <Textarea name="message" placeholder={contactStrings.message} size="large" value={this.state.message} onChange={this.onChange.bind(this)} />
                    </Control>
                  </Field>
                  <Field className="row">
                    <Label />
                    <Control className="col">
                      <ReCAPTCHA ref={this.recaptchaRef} sitekey="Your client site key"/>
                    </Control>
                  </Field>
                </fieldset>
                <fieldset className="action">
                  <Control>
                    <Button type="primary">{contactStrings.send_message}</Button>
                  </Control>
                </fieldset>
              </form>
            </div>
          </div>
        </main>
    )
  }
}

export default Contact;