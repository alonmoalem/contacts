import React, { Component } from "react";
import "../components/contactListItem.css";

class ContactListItem extends Component {
  render() {
    const { contact } = this.props;
    return (
      <div className="contact-info" onClick={e => this.handleClick(e)}>
        <div className="name">{contact.name}</div>
        <div className="tel">{contact.telephone}</div>
      </div>
    );
  }

  handleClick() {
    alert(
      "My name is " +
        this.props.contact.name +
        " and I live in " +
        this.props.contact.city
    );
  }
}

export default ContactListItem;
