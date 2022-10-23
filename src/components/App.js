import React, { useState, useRef } from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { v4 as uuidv4 } from 'uuid';
import user from '../images/user.png';

function App() {
    const LOCAL_STORAGE_KEY = 'contacts';
    const [nameContact, setNameContact] = useState('');
    const [emailContact, setEmailContact] = useState('');
    const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);
    const inputRef = useRef();

    // console.log(contacts);
    const handleAdd = (e) => {
        // const noresetform = e.preventDefault();
        // e.preventDefault();
        // console.log('contacts', contacts);

        const contact = {
            id: uuidv4(),
            name: nameContact,
            email: emailContact,
        };
        console.log('contact trc', contact);
        // contacts
        // console.log(contacts);
        // //bao luu
        // const newContacts = setContacts([...contacts, { id: uuidv4(), ...newContact }]);
        // console.log(contacts);
        // console.log(newContacts);
        setContacts([
            ...contacts,
            {
                name: nameContact,
                email: emailContact,
                contact,
            },
        ]);
        // console.log('contact sau', contact);
        // console.log('contacts', contacts);

        // setContacts((contact) => {
        //     const newContacts = [...contacts, contact];
        //     console.log('contacts', contacts);
        //     //save to local storage
        //     // const jsonNewContacts = JSON.stringify(newContacts);
        //     // localStorage.setItem('contacts', jsonNewContacts);
        //     // prev bao luu

        //     // console.log('newContacts', newContacts);
        //     return newContacts;
        // });
        //clear input
        setNameContact('');
        setEmailContact('');
        //ref
        // inputRef.current.focus();
    };

    // const [contacts, setContacts] = useState([]);

    // const handleDelete = (id) => {
    //     const newContactList = contacts.filter((contact) => {
    //         return contact.id !== id;
    //     });
    //     // console.log(newContactList);
    //     setContacts(newContactList);
    // };
    console.log('contacts', contacts);
    return (
        <div className="ui container">
            <Header />
            {/* <AddContact handleAdd={handleAdd} /> */}
            <div className="ui main">
                <h2>Add Contact </h2>
                <div className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input
                            ref={inputRef}
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={nameContact}
                            onChange={(e) => setNameContact(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={emailContact}
                            onChange={(e) => setEmailContact(e.target.value)}
                        />
                    </div>
                    <button onClick={handleAdd} className="ui button blue">
                        Add
                    </button>
                </div>
            </div>
            {contacts.map((contact) => {
                <div className="item">
                    <img className="ui avatar image" src={user} alt="user" />
                    <div className="content">
                        <div className="header">123</div>
                        <div>{contact.email}</div>
                    </div>
                    <i
                        className="trash alternate outline icon"
                        style={{ color: 'red', marginTop: '7px' }}
                        // onClick={() => deleteConactHandler(id)}
                    ></i>
                </div>;
            })}

            {/* <ContactList contacts={contacts} getContactId={handleDelete} /> */}
            {/* <ContactList contacts={contacts} /> */}
        </div>
    );
}

export default App;
