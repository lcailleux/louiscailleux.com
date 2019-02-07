import React, {Component} from 'react';

import axios from 'axios';

/* React bulma components */
import Field from "react-bulma-components/lib/components/form/components/field";
import Label from "react-bulma-components/lib/components/form/components/label";
import Control from "react-bulma-components/lib/components/form/components/control";
import Input from "react-bulma-components/lib/components/form/components/input";
import Textarea from "react-bulma-components/lib/components/form/components/textarea";
import Button from "react-bulma-components/lib/components/button/button";
import Heading from 'react-bulma-components/lib/components/heading';

import {contact} from '../helpers/urls';

import i18n from '../i18n'

class Contact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }

  componentWillMount() {
    document.title = i18n.t(contact.documentTitle);
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
      axios.post('V1/api/contact', data)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
    }
  }

  render() {
    return (
        <main className="container-wrap inside-content">
          <div>
            <Heading size={1}>{i18n.t(contact.name)}</Heading>
            <div className="form-container">
              <form onSubmit={this.handleSubmit}>
                <fieldset className="personal-information">
                  <Field className="row">
                    <Label>{i18n.t("Full Name")}</Label>
                    <Control className="col">
                      <Input type="text" name="name" placeholder={i18n.t("Full Name")} size="large" value={this.state.name} onChange={this.onChange.bind(this)}/>
                    </Control>
                  </Field>
                  <Field className="row">
                    <Label>{i18n.t("Email")}</Label>
                    <Control className="col">
                      <Input type="email" name="email" placeholder={i18n.t("Email")} size="large" value={this.state.email} onChange={this.onChange.bind(this)} />
                    </Control>
                  </Field>
                  <Field className="row">
                    <Label>{i18n.t("Phone Number")}</Label>
                    <Control className="col">
                      <Input type="tel" name="phone" placeholder={i18n.t("Phone Number")} size="large" value={this.state.phone} onChange={this.onChange.bind(this)} />
                    </Control>
                  </Field>
                </fieldset>
                <fieldset className="message-detail">
                  <Field className="row">
                    <Label>{i18n.t('Subject')}</Label>
                    <Control className="col">
                      <Input type="text" name="subject" placeholder={i18n.t('Subject')} size="large" value={this.state.subject} onChange={this.onChange.bind(this)} />
                    </Control>
                  </Field>
                  <Field className="row">
                    <Label>{i18n.t('Message')}</Label>
                    <Control className="col">
                      <Textarea name="message" placeholder={i18n.t("Message")} size="large" value={this.state.message} onChange={this.onChange.bind(this)} />
                    </Control>
                  </Field>
                </fieldset>
                <fieldset className="action">
                  <Control>
                    <Button type="primary">{i18n.t('Send Message')}</Button>
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