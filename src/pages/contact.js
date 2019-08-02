import React, {Component} from "react";

import Recaptcha from "react-google-invisible-recaptcha";
import LoadingOverlay from "react-loading-overlay";

import Field from "react-bulma-components/lib/components/form/components/field";
import Label from "react-bulma-components/lib/components/form/components/label";
import Input from "react-bulma-components/lib/components/form/components/input";
import Help from "react-bulma-components/lib/components/form/components/help";
import Textarea from "react-bulma-components/lib/components/form/components/textarea";
import Button from "react-bulma-components/lib/components/button/button";
import Message from "react-bulma-components/lib/components/message";

import Api from "../helpers/api";
import Constants from "../helpers/constants";
import {about, contact} from "../helpers/urls";
import {aboutStrings, contactStrings, errorStrings} from "../helpers/strings";
import {Helmet} from "react-helmet";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      formError: false,
      formSuccess: false,
      isLoading: false,
      formErrors: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    };
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
      formError: false,
      formSuccess: false,
      formErrors: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    };
    this.setState(state);
  }

  setFormResult(formResult) {
    this.recaptcha.reset();
    this.setState({formSuccess: formResult, formError: !formResult, isLoading: false});
  }

  onChange = event => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    let formErrors = {...this.state.formErrors};

    formErrors[name] = this.validateField(name, value);

    this.setState({formErrors, [name]: value})
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.validate(this.state)) {
      this.recaptcha.execute();
    }
  };

  onResolved = captchaResponse => {
    let self = this;
    let data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      subject: this.state.subject,
      message: this.state.message
    };

    /* Sending recaptcha response for server side verification */
    data["g-recaptcha-response"] = captchaResponse;

    let postCall = Api.callApi(Api.CONTACT_URL, Api.TYPE_POST, data);
    if (postCall) {
      this.setState({isLoading: true});
      postCall.then(res => {
        if (res.status === 201) {
          self.resetState();
          self.setFormResult(true);
        } else {
          self.setFormResult(false);
        }
      }).catch(error => {
        self.setFormResult(false);
      })
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
      case "phone":
        if (value.length < 1) {
          result = errorStrings.required_field;
          break;
        }
        result =
            !value.match(/((?:\+|00)[17](?: |-)?|(?:\+|00)[1-9]\d{0,2}(?: |-)?|(?:\+|00)1-\d{3}(?: |-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |-)[0-9]{3}(?: |-)[0-9]{4})|([0-9]{7}))$/g) ? errorStrings.invalid_phone : "";
        break;
      default:
        result =
            value.length < 1 ? errorStrings.required_field: "";
        break;
    }
    return result;
  };

  render() {
    const {formErrors, formError, formSuccess, isLoading} = this.state;

    return (
        <div>
          <Helmet>
            <meta name="description" content={contactStrings.description} />
            <link rel="canonical" href={contact.production_url} />
          </Helmet>
          <LoadingOverlay active={isLoading} spinner>
            <main className="contact">
              <h1 className="contact__title">{contact.name}</h1>
              <p className="contact__content">{contactStrings.subtitle}</p>
              <form id="contactForm" className="contact__form" onSubmit={this.handleSubmit}>
                <Field className="form-message">
                  {formSuccess === true && (
                      <Message color="success">
                        <Message.Header>
                          {contactStrings.success_message}
                        </Message.Header>
                      </Message>
                  )}
                  {formError === true && (
                      <Message color="danger">
                        <Message.Header>
                          {contactStrings.error_message}: {contactStrings.email_address}
                        </Message.Header>
                      </Message>
                  )}
                </Field>
                <Field className="contact__field contact__field--name">
                  <Label htmlFor="name">{contactStrings.full_name}</Label>
                  <Input type="text" name="name" placeholder={contactStrings.full_name} className={formErrors.name.length > 0 ? 'contact__form__input is-danger' : 'contact__form__input'} size="medium" value={this.state.name} onChange={this.onChange.bind(this)}/>
                  {formErrors.name.length > 0 && (
                      <Help color="danger">{formErrors.name}</Help>
                  )}
                </Field>
                <Field className="contact__field contact__field--email">
                  <Label htmlFor="email">{contactStrings.email}</Label>
                  <Input type="email" name="email" placeholder={contactStrings.email} className={formErrors.email.length > 0 ? 'contact__form__input is-danger' : 'contact__form__input'} size="medium" value={this.state.email} onChange={this.onChange.bind(this)} />
                  {formErrors.email.length > 0 && (
                      <Help color="danger">{formErrors.email}</Help>
                  )}
                </Field>
                <Field className="contact__field contact__field--phone">
                  <Label htmlFor="phone">{contactStrings.phone_number}</Label>
                  <Input type="tel" name="phone" placeholder={contactStrings.phone_number} className={formErrors.phone.length > 0 ? 'contact__form__input is-danger' : 'contact__form__input'} size="medium" value={this.state.phone} onChange={this.onChange.bind(this)} />
                  {formErrors.phone.length > 0 && (
                      <Help color="danger">{formErrors.phone}</Help>
                  )}
                </Field>
                <Field className="contact__field contact__field--subject">
                  <Label htmlFor="subject">{contactStrings.subject}</Label>
                  <Input type="text" id="subject" name="subject" placeholder={contactStrings.subject} className={formErrors.subject.length > 0 ? 'contact__form__input is-danger' : 'contact__form__input'} size="medium" value={this.state.subject} onChange={this.onChange.bind(this)} />
                  {formErrors.subject.length > 0 && (
                      <Help color="danger">{formErrors.subject}</Help>
                  )}
                </Field>
                <Field className="contact__field contact__field--msg">
                  <Label htmlFor="message">{contactStrings.message}</Label>
                  <Textarea name="message" className={formErrors.message.length > 0 ? 'is-danger' : ''} size="medium" value={this.state.message} onChange={this.onChange.bind(this)} />
                  {formErrors.message.length > 0 && (
                      <Help color="danger">{formErrors.message}</Help>
                  )}
                </Field>
                <Field className="contact__field">
                  <Recaptcha
                      ref={ref => this.recaptcha = ref}
                      sitekey={Constants.getConstant("REACT_APP_RECAPTCHA_KEY")}
                      onResolved={this.onResolved}
                  />
                </Field>
                <Field className="contact__field">
                  <Button type="submit" className="ripple-btn submit" rounded={false}>{contactStrings.send_message}</Button>
                </Field>
              </form>
            </main>
          </LoadingOverlay>
        </div>
    )
  }
}

export default Contact;