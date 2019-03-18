import React, {Component} from 'react';

import ReCAPTCHA from "react-google-recaptcha";

/* React bulma components */
import Field from "react-bulma-components/lib/components/form/components/field";
import Control from "react-bulma-components/lib/components/form/components/control";
import Input from "react-bulma-components/lib/components/form/components/input";
import Help from "react-bulma-components/lib/components/form/components/help";
import Textarea from "react-bulma-components/lib/components/form/components/textarea";
import Button from "react-bulma-components/lib/components/button/button";
import Heading from 'react-bulma-components/lib/components/heading';
import Message from 'react-bulma-components/lib/components/message';

import Api from "../helpers/api"
import {contact} from "../helpers/urls";
import {contactStrings, errorStrings} from "../helpers/strings";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      formErrors: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        captcha: ''
      }
    };

    this.formError = false;
    this.formSuccess = false;
    this.recaptchaRef = React.createRef();
    this.onCaptchaChange = this.onCaptchaChange.bind(this);
  }

  componentWillMount() {
    document.title = contact.documentTitle;
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  resetState() {
    let state = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      formErrors: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        captcha: ''
      }
    };
    this.setState(state);
  }

  onChange = event => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    let formErrors = {...this.state.formErrors};

    formErrors[name] = this.validateField(name, value);

    this.setState({formErrors, [name]: value})
  };

  onCaptchaChange(captchaValue) {
    let formErrors = this.validateCaptcha(captchaValue, {...this.state.formErrors});
    this.setState({formErrors});
  };

  validateCaptcha(captchaValue, formErrors) {
    if (captchaValue.length === 0) {
      formErrors.captcha = errorStrings.required_field;
    } else {
      formErrors.captcha = '';
    }
    return formErrors;
  }

  handleSubmit = event => {
    event.preventDefault();
    let self = this;

    if (this.validate(this.state)) {
      let data = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        subject: this.state.subject,
        message: this.state.message
      };

      let postCall = Api.callApi(Api.CONTACT_URL, Api.TYPE_POST, data);
      if (postCall) {
        postCall.then(res => {
          if (res.status === 201) {
            self.formSuccess = true;
            self.formError = false;

            self.resetState();
            window.grecaptcha.reset();
          } else {
            self.formSuccess = false;
            self.formError = true;
          }
        })
      }
    }
  };

  validate = ({formErrors, ...rest }) => {
    let valid = true;
    let self = this;

    Object.entries(rest).forEach(function (entry) {
      let name = entry[0];
      let value = entry[1];
      formErrors[name] = self.validateField(name, value);
    });

    /* Verifying captcha */
    let captchaValue = window.grecaptcha.getResponse();
    formErrors = this.validateCaptcha(captchaValue, formErrors);

    this.setState({formErrors});

    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });

    Object.values(rest).forEach(val => {
      val === '' && (valid = false);
    });
    return valid;
  };

  validateField = (name, value) => {
    let result = '';

    switch (name) {
      case "email":
        if (value.length < 1) {
          result = errorStrings.required_field;
          break;
        }
        result =
            !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? errorStrings.invalid_email : "";
        break;
      default:
        result =
            value.length < 1 ? errorStrings.required_field: "";
        break;
    }
    return result;
  };

  render() {
    const { formErrors } = this.state;

    return (
        <main className="container-wrap inside-content">
          <Heading size={1}>{contact.name}</Heading>
          <div>
            <div className="form-container">
              <form onSubmit={this.handleSubmit}>
                <fieldset className="form-message">
                  {this.formSuccess === true && (
                      <Message color="success">
                        <Message.Header>
                          {contactStrings.success_message}
                        </Message.Header>
                      </Message>
                  )}
                  {this.formError === true && (
                      <Message color="danger">
                        <Message.Header>
                          {contactStrings.error_message}: {contactStrings.email_address}
                        </Message.Header>
                      </Message>
                  )}
                </fieldset>
                <fieldset className="personal-information">
                  <Field className="row">
                    <Control className="col">
                      <Input type="text" name="name" placeholder={contactStrings.full_name} className={formErrors.name.length > 0 ? 'is-danger' : ''} size="medium" value={this.state.name} onChange={this.onChange.bind(this)}/>
                      {formErrors.name.length > 0 && (
                          <Help color="danger">{formErrors.name}</Help>
                      )}
                    </Control>
                  </Field>
                  <Field className="row">
                    <Control iconLeft className="col">
                      <Input type="email" name="email" placeholder={contactStrings.email} className={formErrors.email.length > 0 ? 'is-danger' : ''} size="medium" value={this.state.email} onChange={this.onChange.bind(this)} />
                      {formErrors.email.length > 0 && (
                          <Help color="danger">{formErrors.email}</Help>
                      )}
                      <span className="icon is-left">
                       <i className="fas fa-envelope"/>
                      </span>
                    </Control>
                  </Field>
                  <Field className="row">
                    <Control iconLeft className="col">
                      <Input type="tel" name="phone" placeholder={contactStrings.phone_number} className={formErrors.phone.length > 0 ? 'is-danger' : ''} size="medium" value={this.state.phone} onChange={this.onChange.bind(this)} />
                      {formErrors.phone.length > 0 && (
                          <Help color="danger">{formErrors.phone}</Help>
                      )}
                      <span className="icon is-left">
                        <i className="fas fa-phone"/>
                      </span>
                    </Control>
                  </Field>
                </fieldset>
                <fieldset className="message-detail">
                  <Field className="row">
                    <Control className="col">
                      <Input type="text" id="subject" name="subject" placeholder={contactStrings.subject} className={formErrors.subject.length > 0 ? 'is-danger' : ''} size="medium" value={this.state.subject} onChange={this.onChange.bind(this)} />
                      {formErrors.subject.length > 0 && (
                          <Help color="danger">{formErrors.subject}</Help>
                      )}
                    </Control>
                  </Field>
                  <Field className="row">
                    <Control className="col">
                      <Textarea name="message" placeholder={contactStrings.message} className={formErrors.message.length > 0 ? 'is-danger' : ''} size="medium" value={this.state.message} onChange={this.onChange.bind(this)} />
                      {formErrors.message.length > 0 && (
                          <Help color="danger">{formErrors.message}</Help>
                      )}
                    </Control>
                  </Field>
                </fieldset>
                <fieldset className="fieldset-captcha">
                  <Field className="row">
                    <Control className="col captcha-col">
                      <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_KEY} onChange={this.onCaptchaChange}/>
                      {formErrors.captcha.length > 0 && (
                          <Help color="danger">{formErrors.captcha}</Help>
                      )}
                    </Control>
                  </Field>
                </fieldset>
                <fieldset className="action">
                  <Control>
                    <Button type="submit" className="submit-button" rounded={false}>{contactStrings.send_message}</Button>
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