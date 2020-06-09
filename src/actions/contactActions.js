import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "../actions/types";
import Contact from "../components/contacts/Contact";
export const getContacts = () => {
  return {
    type: GET_CONTACTS,
  };
};
export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};
export const addContact = (Contact) => {
  return {
    type: ADD_CONTACT,
    payload: Contact,
  };
};
