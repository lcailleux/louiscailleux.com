import React, {Component} from 'react';

import ReCAPTCHA from "react-google-recaptcha";

/* React bulma components */
import Field from "react-bulma-components/lib/components/form/components/field";
import Label from "react-bulma-components/lib/components/form/components/label";
import Input from "react-bulma-components/lib/components/form/components/input";
import Help from "react-bulma-components/lib/components/form/components/help";
import Textarea from "react-bulma-components/lib/components/form/components/textarea";
import Button from "react-bulma-components/lib/components/button/button";
import Message from 'react-bulma-components/lib/components/message';

import Api from "../helpers/api";
import Contants from "../helpers/constants";
import {contact} from "../helpers/urls";
import {contactStrings, errorStrings} from "../helpers/strings";

const recaptchaRef = React.createRef();

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
    this.setState({formSuccess: formResult, formError: !formResult});
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
    let self = this;

    if (this.validate(this.state)) {
      recaptchaRef.current.execute();

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
            self.resetState();
            window.grecaptcha.reset();
            self.setFormResult(true);
          } else {
            self.setFormResult(false);
          }
        }).catch(error => {
          window.grecaptcha.reset();
          self.setFormResult(false);
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
    const { formErrors, formError, formSuccess } = this.state;

    return (
        <main className="contact">
          <h1 className="contact__title">{contact.name}</h1>
          <p className="contact__content">Send me a message!</p>
          <form id="contactForm" className="contact__form" onSubmit={this.handleSubmit}>
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
            <Field className="contact__field contact__field--name">
              <Label for="name">{contactStrings.full_name}</Label>
              <Input type="text" name="name" placeholder={contactStrings.full_name} className={formErrors.name.length > 0 ? 'contact__form__input is-danger' : 'contact__form__input'} size="medium" value={this.state.name} onChange={this.onChange.bind(this)}/>
              {formErrors.name.length > 0 && (
                  <Help color="danger">{formErrors.name}</Help>
              )}
            </Field>
            <Field className="contact__field contact__field--email">
              <Label for="name">{contactStrings.email}</Label>
              <Input type="email" name="email" placeholder={contactStrings.email} className={formErrors.email.length > 0 ? 'contact__form__input is-danger' : 'contact__form__input'} size="medium" value={this.state.email} onChange={this.onChange.bind(this)} />
              {formErrors.email.length > 0 && (
                  <Help color="danger">{formErrors.email}</Help>
              )}
            </Field>
            <Field className="contact__field contact__field--phone">
              <Label for="name">{contactStrings.phone_number}</Label>
              <Input type="tel" name="phone" placeholder={contactStrings.phone_number} className={formErrors.phone.length > 0 ? 'contact__form__input is-danger' : 'contact__form__input'} size="medium" value={this.state.phone} onChange={this.onChange.bind(this)} />
              {formErrors.phone.length > 0 && (
                  <Help color="danger">{formErrors.phone}</Help>
              )}
            </Field>
            <Field className="contact__field contact__field--subject">
              <Label for="name">{contactStrings.subject}</Label>
              <Input type="text" id="subject" name="subject" placeholder={contactStrings.subject} className={formErrors.subject.length > 0 ? 'contact__form__input is-danger' : 'contact__form__input'} size="medium" value={this.state.subject} onChange={this.onChange.bind(this)} />
              {formErrors.subject.length > 0 && (
                  <Help color="danger">{formErrors.subject}</Help>
              )}
            </Field>
            <Field className="contact__field contact__field--msg">
              <Label for="name">{contactStrings.message}</Label>
              <Textarea name="message" className={formErrors.message.length > 0 ? 'is-danger' : ''} size="medium" value={this.state.message} onChange={this.onChange.bind(this)} />
              {formErrors.message.length > 0 && (
                  <Help color="danger">{formErrors.message}</Help>
              )}
            </Field>
            <Field className="contact__field">
              <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={Contants.getConstant("REACT_APP_RECAPTCHA_KEY")}
                  size="invisible"
              />
            </Field>
            <Field className="contact__field">
              <Button type="submit" className="ripple-btn submit" rounded={false}>{contactStrings.send_message}</Button>
            </Field>
          </form>
        </main>
    )
  }
}

export default Contact;