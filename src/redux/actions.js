import { nanoid } from 'nanoid';

export const addContact = (name, phone) => {
  return {
    type: 'tasks/addContact',
    payload: {
      key: nanoid(),
      name,
      phone,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'tasks/deleteContact',
    payload: contactId,
  };
};

export const filterContacts = text => {
  return {
    type: 'filters/filterContacts',
    payload: text,
  };
};
