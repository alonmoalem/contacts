import React, { Component } from "react";
import "../components/contactCard.css";

class ContactCard extends Component {
  render() {
    return (
      <div className="contact-card">
        <div className="property">Name: {this.getContactProperty("name")}</div>
        <div className="property">
          Telephone: {this.getContactProperty("telephone")}
        </div>
        <div className="property">City: {this.getContactProperty("city")}</div>
        <div className="property">
          Date of birth: {this.getContactProperty("dateOfBirth")}
        </div>
      </div>
    );
  }
  getContactProperty(propertyName) {
    if (this.props.contact) {
      return this.props.contact[propertyName];
    }
    return "";
  }
}

export default ContactCard;
