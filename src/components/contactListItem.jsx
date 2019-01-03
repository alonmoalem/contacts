import React, { Component } from "react";
import "../components/contactListItem.css";

class ContactListItem extends Component {
  render() {
    const { contact } = this.props;
    return (
      <div className="contact-info">
        <div className="name">{contact.name}</div>
        <div className="tel">{contact.telephone}</div>
      </div>
    );
  }
}

export default ContactListItem;
