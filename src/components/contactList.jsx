import React, { Component } from "react";
import ContactListItem from "./contactListItem";
import "../components/contactList.css";

class ContactList extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "alon moalem",
        telephone: "050-6974746",
        city: "tel-aviv",
        dateOfBirth: "31/01/1983"
      },
      {
        id: 2,
        name: "avi cohen",
        telephone: "054-2837674",
        city: "tel-aviv",
        dateOfBirth: "08/11/1991"
      },
      {
        id: 3,
        name: "alon moalem",
        telephone: "052-9587309",
        city: "tel-aviv",
        dateOfBirth: "22/03/1972"
      }
    ]
  };
  render() {
    return (
      <div className="contact-list">
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>
              <ContactListItem contact={contact} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;
