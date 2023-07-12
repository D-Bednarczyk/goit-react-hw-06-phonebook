const initialState = {
  contacts: [
    { key: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { key: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { key: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { key: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filters/filterContacts': {
      return { ...state, filter: action.payload };
    }

    case 'tasks/addContact': {
      return { ...state, contacts: [...state.contacts, action.payload] };
    }

    default:
      return state;
  }
};
