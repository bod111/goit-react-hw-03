import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import "./App.css";

function App() {
  const initialValue = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const storage = JSON.parse(localStorage.getItem("contacts"));

  const [contacts, setContacts] = useState(() => storage ?? initialValue);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, { id: nanoid(), ...newContact }];
    });
  };

  const onDeleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));

    // contacts.length > 0
    //   ? localStorage.setItem("contacts", JSON.stringify(contacts))
    //   : localStorage.removeItem("contacts");
  }, [contacts]);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <container className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox inputValue={inputValue} handleChange={handleChange} />
      <ContactList contacts={visibleContacts} onDelete={onDeleteContact} />
    </container>
  );
}

export default App;
