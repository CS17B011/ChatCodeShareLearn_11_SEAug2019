import React, { Component } from 'react';

class Contacts extends Component {

    render() {
        return (
            <div id="contacts">
                <ul>
                    {
                        this.props.contacts.map( (contact,index) => (
                            <li className="contact" key={index}>
                                <div className="wrap">
                                    <span className="contact-status online" />
                                    <img src="https://picsum.photos/300" alt="" />
                                    <div className="meta">
                                        <p className="name">{contact.username}</p>
                                        <p className="preview">{contact.emailid}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
        );
    }
}

export default Contacts;