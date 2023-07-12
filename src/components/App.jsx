import { useState, useEffect } from 'react';
import css from './app.module.css';
import { nanoid } from 'nanoid';
import { Form } from './Form';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { key: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { key: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { key: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { key: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  const [filter, setFilter] = useState('');

  console.log(contacts);

  const handleDelete = id => {
    setContacts(contacts.filter(contact => contact.key !== id));
  };

  const handleChange = evt => {
    setFilter(evt.target.value);
    console.log(filter);
  };

  const filterItems = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (contacts.map(el => el.name).includes(name))
      alert(`${name} is already in contacts`);
    else
      setContacts([...contacts, { key: nanoid(), name: name, number: number }]);
    form.reset();
  };

  /* componentDidUpdate() {
    localStorage.setItem('state', JSON.stringify(this.state));
  } */

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.main_div}>
      <h2>Phonebook</h2>
      <Form submitFunc={handleSubmit}></Form>
      <h2>Contacts</h2>
      <Filter filterFunc={handleChange}></Filter>
      <ContactList
        contactFunc={filterItems}
        deleteFunc={handleDelete}
      ></ContactList>
    </div>
  );
};
