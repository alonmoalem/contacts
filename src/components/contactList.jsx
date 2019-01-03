import React, { Component } from "react";
import ContactListItem from "./contactListItem";
import "../components/contactList.css";

class ContactList extends Component {
  render() {
    return (
      <div className="contact-list">
        <ul>
          {this.props.contacts.map(contact => (
            <li
              key={contact.id}
              onClick={() => this.props.onClickItem(contact)}
            >
              <ContactListItem contact={contact} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;
