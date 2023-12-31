import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('contacts')) ?? [
  { key: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { key: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { key: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { key: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        setLocalStorage([...state]);
      },
      prepare(name, number) {
        return {
          payload: {
            key: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.key === action.payload);
      state.splice(index, 1);
      setLocalStorage([...state]);
    },
    // Zapis rozszerzony tego co powyzej!
    // deleteTask: {
    //     reducer(state, action) {
    //         const index = state.findIndex(task => task.id === action.payload)
    //         state.splice(index, 1)
    //     },
    //     prepare(taskId) {
    //         return {
    //             payload: taskId
    //         }
    //     }
    // },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

const setLocalStorage = contacts => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};
