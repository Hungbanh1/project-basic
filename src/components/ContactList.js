import React from 'react';
import ContactCard from './ContactCard';
import user from '../images/user.png';

function ContactList(props) {
    console.log('props', props);
    const deleteConactHandler = (id) => {
        props.getContactId(id);
    };
    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact={contact} clickHander={deleteConactHandler} key={contact.id} />;
    });
    return <div className="ui celled list">{renderContactList}</div>;
}
export default ContactList;
