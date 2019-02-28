import React, {Component} from 'react';

//import ReCAPTCHA from "react-google-recaptcha";

/* React bulma components */
import Field from "react-bulma-components/lib/components/form/components/field";
import Label from "react-bulma-components/lib/components/form/components/label";
import Control from "react-bulma-components/lib/components/form/components/control";
import Input from "react-bulma-components/lib/components/form/components/input";
import Help from "react-bulma-components/lib/components/form/components/help";
import Textarea from "react-bulma-components/lib/components/form/components/textarea";
import Button from "react-bulma-components/lib/components/button/button";
import Heading from 'react-bulma-components/lib/components/heading';

import Api from "../helpers/api"
import {contact} from "../helpers/urls";
import {contactStrings, errorStrings} from "../helpers/strings";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      full_name: '',
      email: '',
      phone_number: '',
      subject: '',
      message: '',
      formErrors: {
        full_name: '',
        email: '',
        phone_number: '',
        subject: '',
        message: ''
      }
    };

    this.recaptchaRef = React.createRef();
  }

  componentWillMount() {
    document.title = contact.documentTitle;
  }

  componentDidMount() {
    window.scrollTo(0, 0)
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
          console.log(res);
          console.log(res.data);
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

    this.setState({formErrors})

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
          <div>
            <div className="form-container">
              <Heading size={1}>{contact.name}</Heading>
              <form onSubmit={this.handleSubmit}>
                <fieldset className="personal-information">
                  <Field className="row">
                    <Control className="col">
                      <Input type="text" name="full_name" placeholder={contactStrings.full_name} className={formErrors.full_name.length > 0 ? 'is-danger' : ''} size="medium" value={this.state.full_name} onChange={this.onChange.bind(this)}/>
                      {formErrors.full_name.length > 0 && (
                          <Help color="danger">{formErrors.full_name}</Help>
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
                      <Input type="tel" name="phone_number" placeholder={contactStrings.phone_number} className={formErrors.phone_number.length > 0 ? 'is-danger' : ''} size="medium" value={this.state.phone_number} onChange={this.onChange.bind(this)} />
                      {formErrors.phone_number.length > 0 && (
                          <Help color="danger">{formErrors.phone_number}</Help>
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
                  <Field className="row">
                    <Label />
                    <Control className="col">

                    </Control>
                  </Field>
                </fieldset>
                <fieldset className="action">
                  <Control>
                    <Button type="submit" color="black" rounded={false}>{contactStrings.send_message}</Button>
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