import i18n from "../i18n"
import React from "react";

export const defaultStrings = {
  full_name: "Louis Cailleux",
  title: "Developer passionate about AI and new technologies",
  not_found: i18n.t("No match found for "),
  loading: i18n.t("Loading...")
};

export const aboutStrings = {
  about_first_paragraph: i18n.t("Passionate about object-oriented programming, I am very fond of languages such as C++, PHP and Python. I began my career as a developer of large e-commerce websites, but I would like to reorient myself towards AI (machine learning, R&D engineering)."),
  about_second_paragraph: i18n.t("I am also trying to integrate and strengthen important development processes (test-driven development, unit and integration testing, coding standards) to my day-to-day development practices."),
  about_third_paragraph: i18n.t("I am a graduate of the European Institute of Information Technology with the title of expert in Information Technology."),
  about_fourth_paragraph: i18n.t("Adventurous and open-minded, I spent two semesters at Chung-Ang University in South Korea. There, I took part in many projects, not only around computer science, with students from diverse countries and cultural backgrounds. I always will bear the mark of this unforgettable experience throughout my career."),
  block_description_identifier: "description_about_block",
  greetings: i18n.t("Hello"),
  description: "Passionate about object-oriented programming, I am very fond of languages such as C++ PHP and Python. I began my career as a developer of large e-commerce websites, but I would like to reorient myself towards AI (machine learning, R&D engineering)."
};

export const projectStrings = {
  github: "Github →",
  more_to_come: i18n.t("More projects coming soon."),
  description: "The list of projects I enjoyed doing during my free time."
};

export const contactStrings = {
  email: i18n.t("Email"),
  subject: i18n.t("Subject"),
  message: i18n.t("Message"),
  full_name: i18n.t("Full Name"),
  phone_number: i18n.t("Phone Number"),
  send_message: i18n.t("Send Message"),
  subtitle: i18n.t("Send me a message!"),
  success_message: i18n.t("Message sent successfully! I will get back to you very soon."),
  error_message: i18n.t("An error occurred. Please contact me at this email address"),
  email_address: "louiscailleux@gmail.com.",
  description: "Please contact me, I am always open to new opportunities."
};

export const errorStrings = {
  invalid_email: i18n.t("This email is invalid."),
  invalid_phone: i18n.t("This phone number is invalid."),
  required_identifier: i18n.t("Block identifier is a required field."),
  required_field: i18n.t("This field is a required field.")
};

export const footerStrings = {
  all_right_reserved: i18n.t("All rights reserved.")
};