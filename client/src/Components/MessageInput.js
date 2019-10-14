import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class MessageInput extends Component {


    onClickHandler = (e) => {
        console.log("Handler");
        e.preventDefault();
        console.log("Redireccting...");
        return <Redirect to='/editor' />
    }

    render() {
        return (
            <div className="message-input">
                <div className="wrap">
                <form onSubmit={this.submitHandler}>
                    <input type="text" className="message" placeholder="Write your message..." onChange={this.changeHandler} />
                    <i className="fa fa-paperclip attachment" aria-hidden="true" />
                    <button className="submit"><i className="fa fa-paper-plane" aria-hidden="true" /></button>
                    <button className="editor"><i className="fa fa-edit" aria-hidden="true" onClick = {this.onClickHandler}/></button>
                    
                </form>
                </div>
            </div>
        );
    }
}

export default MessageInput;