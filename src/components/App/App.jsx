import React, { Component } from 'react';
import { ContactList } from 'components/ContactList/ContactList';
import { FormNameInput } from 'components/FormNameInput/FormNameInput';
import { nanoid } from 'nanoid';
import { Filter } from 'components/Filter/Filter';
import {Container} from 'components/App/App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    if (this.state.contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is alredy in contacts`);
      return false;
    } else {
      this.setState(() => {
        return {
          contacts: [
            { id: nanoid(), name: data.name, number: data.number },
            ...this.state.contacts,
          ],
        };
      });
    }
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  filteredContacts = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContact();

    return (
      <>
      <Container>
        <h1>Phonebook</h1>
        <FormNameInput addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.filteredContacts} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        /></Container>
      </>
    );
  }
}
