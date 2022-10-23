import React, { useState, useRef } from 'react';
import ContactList from './ContactList';
import user from '../images/user.png';
import { v4 as uuidv4 } from 'uuid';

function AddContact(props) {
    // const storageContact = JSON.parse(localStorage.getItem('contacts'));
    const [nameContact, setNameContact] = useState('');
    const [emailContact, setEmailContact] = useState('');
    //toan tu nullist
    // const [contacts, setContacts] = useState(storageContact ?? []);
    const LOCAL_STORAGE_KEY = 'contacts';

    // const [contacts, setContacts] = useState([]);
    // const [contact, setContact] = useState('');
    const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);

    // console.log(storageContact);

    //ref

    const inputRef = useRef();
    // noresetform;
    // const handleAdd = (e) => {
    //     e.preventDefault();
    //     // console.log('contacts', contacts);

    //     const contact = {
    //         id: uuidv4(),
    //         name: nameContact,
    //         email: emailContact,
    //     };
    //     // console.log('contact trc', contact);
    //     // contacts
    //     // console.log(contacts);
    //     // //bao luu
    //     // const newContacts = setContacts([...contacts, { id: uuidv4(), ...newContact }]);
    //     // console.log(contacts);
    //     // console.log(newContacts);
    //     setContacts([
    //         ...contacts,
    //         {
    //             name: nameContact,
    //             email: emailContact,
    //             contact,
    //         },
    //     ]);
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
    //     setNameContact('');
    //     setEmailContact('');
    //     //ref
    //     inputRef.current.focus();
    // };

    // function handleDelete(id) {
    //     const newContactList = contacts.filter((contact) => {
    //         return contact.id !== id;
    //     });
    //     console.log(newContactList);
    //     setContacts(newContactList);
    // }

    // const handleDelete = (id) => {
    //     const newContactList = contacts.filter((contact) => {
    //         return contact.id !== id;
    //     });
    //     console.log(newContactList);
    //     setContacts(newContactList);
    // };

    return (
        <div>
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
                    <button onClick={props.handleAdd} className="ui button blue">
                        Add
                    </button>
                </div>
                {/* <div className="ui celled list">
                    {contacts.map((item, index) => (
                        <div key={index} className="item">
                            <img className="ui avatar image" src={user} alt="user" />
                            <div className="content">
                                <div className="header">{item.name}</div>
                                <div className="">{item.email}</div>
                                <div className="">{item.id}</div>
                            </div>
                            <div>
                                <i
                                    // id={item.id}
                                    onClick={handleDelete(item.id)}
                                    className="trash alternate outline icon"
                                    style={{ color: 'red', marginTop: '7px' }}
                                ></i>
                            </div>
                        </div>
                    ))}
                </div> */}
                {/* <ul>
                    {contacts.map((item, index) => (
                        <div>
                            <li key={index}>name:{item.name}</li>
                            <li key={index}>email:{item.email}</li>
                        </div>
                    ))}
                </ul> */}
                {/* <ContactList contacts={contacts} /> */}
            </div>
        </div>
    );
}

export default AddContact;
