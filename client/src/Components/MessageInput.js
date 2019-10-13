import React, { Component } from 'react';

class MessageInput extends Component {
    render() {
        return (
            <div className="message-input">
                <div className="wrap">
                <form onSubmit={this.submitHandler}>
                    <input type="text" className="message" placeholder="Write your message..." onChange={this.changeHandler} />
                    <i className="fa fa-paperclip attachment" aria-hidden="true" />
                    <button className="submit"><i className="fa fa-paper-plane" aria-hidden="true" /></button>
                </form>
                </div>
            </div>
        );
    }
}

export default MessageInput;