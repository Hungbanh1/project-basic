import React from 'react';
import user from '../images/user.png';

function ContactCard(props) {
    console.log('props', props);

    // const { id, name, email } = contacts.contact;
    const { id, name, email } = props.contact;
    // return (
    //     <div className="item">
    //         <img className="ui avatar image" src={user} alt="user" />
    //         <div className="content">
    //             <div className="header">{name}</div>
    //             <div>{email}</div>
    //         </div>
    //         <i
    //             className="trash alternate outline icon"
    //             style={{ color: 'red', marginTop: '7px' }}
    //             onClick={() => props.clickHander(id)}
    //         ></i>
    //     </div>
    // );
    // return (
    //     <div className="item">
    //         <img className="ui avatar image" src={user} alt="user" />
    //         <div className="content">
    //             {/* <div className="header">{name}</div>
    //             <div>{email}</div> */}
    //         </div>
    //         <div>
    //             <i className="trash alternate outline icon" style={{ color: 'red', marginTop: '7px' }}></i>
    //         </div>
    //     </div>
    // );
}

export default ContactCard;
