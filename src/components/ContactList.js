import React from 'react';
import ContactCard from './ContactCard';
import user from '../images/user.png';

function ContactList(props) {
    console.log('props', props);
    // const deleteConactHandler = (id) => {
    //     props.getContactId(id);
    // };
    const renderContactList = props.contacts.map((contact) => {
        // return <ContactCard contact={contact} clickHander={deleteConactHandler} key={contact.id} />;
        // return contact;
        // console.log(contact);
        const { id, name, email } = contact;
        return (
            <div className="item">
                <img className="ui avatar image" src={user} alt="user" />
                <div className="content">
                    <div className="header">123</div>
                    <div>{email}</div>
                </div>
                <i
                    className="trash alternate outline icon"
                    style={{ color: 'red', marginTop: '7px' }}
                    // onClick={() => deleteConactHandler(id)}
                ></i>
            </div>
        );
        // return <div>123</div>;
    });
    // const renderContactList = props.contacts.map((contact) => {
    //     return <ContactCard contact={contact} clickHander={deleteConactHandler} key={contact.id} />;
    // });
    // return <div className="ui celled list">{renderContactList}</div>;

    // return (
    // <div className="ui celled list">
    //     {contacts.map((item, index) => (
    //         <div key={index} className="item">
    //             <img className="ui avatar image" src={user} alt="user" />
    //             <div className="content">
    //                 <div className="header">{item.name}</div>
    //                 <div className="">{item.email}</div>
    //                 <div className="">{item.id}</div>
    //             </div>
    //             <div>
    //                 <i
    //                     // id={item.id}
    //                     onClick={handleDelete(item.id)}
    //                     className="trash alternate outline icon"
    //                     style={{ color: 'red', marginTop: '7px' }}
    //                 ></i>
    //             </div>
    //         </div>
    //     ))}
    // </div>
    // <div>123</div>;
    // );

    // console.log(contacts);
    // console.log(tests);

    // console.log(tests);
    // const renderContactList = contacts.map((contact) => {
    //     return <ContactCard contact={contact}></ContactCard>;
    // });
    // return <div className="ui celled list">{renderContactList}</div>;
    // console.log(contacts);

    // tests.map((contact) => {
    //     // return contact;
    //     console.log(contact);
    // });
    // if (contacts) {
    // } else {
    //     contacts = [];
    //     // alert('kh co du lieu');
    // }
}

export default ContactList;
