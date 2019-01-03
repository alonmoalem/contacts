import React, { Component } from "react";
import "./App.css";
import ContactList from "./components/contactList";
import ContactCard from "./components/contactCard";

class App extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "roni levi",
        telephone: "050-4675872",
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
        name: "ronit bashan",
        telephone: "052-9587309",
        city: "tel-aviv",
        dateOfBirth: "22/03/1972"
      }
    ]
  };

  handleClickListItem = contact => {
    const contacts = [...this.state.contacts];
    const index = contacts.indexOf(contact);
    const selectdContact = contacts[index];
    this.setState({ selectdContact: selectdContact });
  };

  render() {
    return (
      <div className="App">
        <ContactList
          contacts={this.state.contacts}
          onClickItem={this.handleClickListItem}
        />
        <ContactCard contact={this.state.selectdContact} />
      </div>
    );
  }
}

export default App;
