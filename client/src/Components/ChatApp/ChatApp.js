import React, { Component } from 'react';
import SidePanel from './SidePanel';
import Messages from './Messages';
import MessageInput from './MessageInput';
import './ChatApp.css';
import io from 'socket.io-client';

class ChatApp extends Component {

	socket = io('http://10.21.127.237:4000');

	constructor(props){
		super(props);
		this.state = {
			msgs: [],
			contacts: []
		};
	}

	addMsg = (val,cls) => {
		console.log(this.socket);
		var data = {
			cls,
			val,
			id: this.socket.id
		};
		this.setState({msgs: [...this.state.msgs,data]});
		this.socket.emit('newmessage',data);
	};

	componentDidMount() {
		this.socket.on('sendmessages',data => {
			console.log("New Message...");
			if(this.socket.id!==data.id){
				var newMessage = {
					cls:"sent",
					val:data.val
				};
				this.setState({msgs:[...this.state.msgs,newMessage]});
			}
		});
	}
	

    render() {
        return (
            <div id="frame">
                <SidePanel/>
		        <div className="content">
		           	<div className="contact-profile">
		            	<img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
		            	<p>Harvey Specter</p>
		            	<div className="social-media">
		                	<i className="fa fa-github" aria-hidden="true" />
			                <i className="fa fa-linkedin" aria-hidden="true" />
			                <i className="fa fa-google" aria-hidden="true" />
		              	</div>
		            </div>
                    <Messages msgs={this.state.msgs}/>
                    <MessageInput submit={this.addMsg}/>
    	        </div>
	        </div>
        );
    }
}

export default ChatApp;