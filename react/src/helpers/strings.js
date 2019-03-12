import i18n from "../i18n"

export const defaultStrings = {
  full_name: "Louis Cailleux"
};

export const contactStrings = {
  email: i18n.t("Email"),
  subject: i18n.t("Subject"),
  message: i18n.t("Message"),
  full_name: i18n.t("Full Name"),
  phone_number: i18n.t("Phone Number"),
  send_message: i18n.t("Send Message"),
  success_message: i18n.t("Message sent successfully! I will get back to you very soon."),
  error_message: i18n.t("An error occurred. Please contact me at this email address"),
  email_address: "louiscailleux@gmail.com."
};

export const errorStrings = {
  invalid_email: i18n.t("This email is invalid."),
  required_identifier: i18n.t("Block identifier is a required field."),
  required_field: i18n.t("This field is a required field.")
};

export const footerStrings = {
  all_right_reserved: i18n.t("All rights reserved.")
};