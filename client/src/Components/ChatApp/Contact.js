import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <li className="contact">
                <div className="wrap">
                    <span className="contact-status online" />
                    <img src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
                    <div className="meta">
                        <p className="name">Louis Litt</p>
                        <p className="preview">You just got LITT up, Mike.</p>
                    </div>
                </div>
            </li>
        );
    }
}

export default Contact;