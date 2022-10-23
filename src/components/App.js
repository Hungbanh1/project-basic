import React, { useState, useRef, useEffect } from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { v4 as uuidv4 } from 'uuid';
import user from '../images/user.png';
import './App.css';

function App() {
    const LOCAL_STORAGE_KEY = 'contacts';

    const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);
    const inputRef = useRef();

    //delete
    const handleDelete = (id) => {
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        });
        setContacts(newContactList);
    };

    // save to local storage key
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);

    // console.log('contacts', contacts);
    return (
        <div className="ui container">
            <Header />
            <AddContact contacts={contacts} setContacts={setContacts} />
            <ContactList contacts={contacts} getContactId={handleDelete} />
        </div>
    );
}

export default App;
