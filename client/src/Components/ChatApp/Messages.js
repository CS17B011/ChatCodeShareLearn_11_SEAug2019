import React, { Component } from 'react';
import './ChatApp.css';

class Messages extends Component {

    render() {
        return (
            <div className="messages">
                <ul>
                    {
                        this.props.msgs.map( (msg,index) => (
                        <li className={msg.cls} key={index}>
                            <img src="https://picsum.photos/300" alt="" />
                            <p>{msg.val}</p>
                        </li>
                    ))}
                </ul>
          </div>
        );
    }
}

export default Messages;