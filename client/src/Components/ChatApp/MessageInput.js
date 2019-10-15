import React, { Component } from 'react';

class MessageInput extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            msg: ""
        }
    }

    changeHandler = (e) => {
        this.setState({msg: e.target.value});
    };
    
    submitHandler = (e) => {
        e.preventDefault();
        this.props.submit(this.state.msg);
        this.setState({msg:""});
    }

    render() {
        return (
            <div className="message-input">
                <div className="wrap">
                <form onSubmit={this.submitHandler}>
                    <input type="text" className="message" placeholder="Write your message..." value={this.state.msg} onChange={this.changeHandler}/>
                    <i className="fa fa-paperclip attachment" aria-hidden="true" />
                    <button className="submit" onSubmit={this.submitHandler}><i className="fa fa-paper-plane" aria-hidden="true" /></button>
                </form>
                </div>
            </div>
        );
    }
}

export default MessageInput;