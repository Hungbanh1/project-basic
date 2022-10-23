import React, { useState, useEffect, useRef } from 'react';
import ContactList from './ContactList';
import user from '../images/user.png';
import { v4 as uuidv4 } from 'uuid';

function AddContact(props) {
    const [nameContact, setNameContact] = useState('');
    const [emailContact, setEmailContact] = useState('');
    const inputRef = useRef();

    const handleAdd = (e) => {
        e.preventDefault();

        if (nameContact == '' || emailContact == '') {
            alert('vui lòng điền !!!');
            return;
        }
        const contact = {
            id: uuidv4(),
            name: nameContact,
            email: emailContact,
        };
        console.log('contact trc', contact);

        props.setContacts([
            ...props.contacts,
            {
                name: nameContact,
                email: emailContact,
                id: uuidv4(),
                contact,
            },
        ]);

        //clear input
        setNameContact('');
        setEmailContact('');
        //ref
        inputRef.current.focus();
    };

    return (
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
    );
}

export default AddContact;
