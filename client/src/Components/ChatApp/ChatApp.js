import React, { Component } from 'react';
import SidePanel from './SidePanel';
import Messages from './Messages';
import MessageInput from './MessageInput';
import './ChatApp.css';
import io from 'socket.io-client';
import {NEW_MESSAGE,SEND_MESSAGE,NEW_USER,UPDATE_USERS} from '../chatservice/events';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

class ChatApp extends Component {
	socket = io('http://localhost:4000');
	constructor(props){
		super(props);
		this.state = {
			msgs: [],
			contacts: []
		};
	}

	addMsg = (val,cls) => {
		if(val)
		{
			console.log(this.socket);
			var data = {
				cls,
				val,
				id: this.socket.id
			};
			this.setState({msgs: [...this.state.msgs,data]});
			this.socket.emit(NEW_MESSAGE,{data,username: this.socket.username});
		}
	};

	registerUser = () => {
		const MySwal = withReactContent(Swal);
		MySwal.mixin({
			confirmButtonText: 'Next',
			progressSteps: ['1','2']
		}).queue([
			{
				title: 'User Name :',
				input: 'text',
				inputPlaceholder: 'Enter User Name',
				inputValidator: (username) => {
					if(!username) {
						return 'Enter User Name!!';
					}
				}
			},
			{
				title: 'Email Address :',
				input: 'email',
				inputPlaceholder: 'Enter Your Email Address'
			}
		]).then(result => {
			if(result.value){
				this.socket.emit(NEW_USER,result.value,(success) => {
					if(success){
						MySwal.fire({
							type: 'success',
							title: 'User has been Registered!!',
							timer: 2000
						});
					}
					else{
						MySwal.fire({
							type: 'error',
							title: 'User with same Email id Already Exists...Try Again...',
							timer: 2000
						})
						.then( () => this.registerUser());
					}
				})
			}
			else{
				this.registerUser();
			}
		});
	}

	componentDidMount() {
		this.registerUser();
		this.socket.on(SEND_MESSAGE,(data,username) => {
			console.log("New Message...");
			if(this.socket.id!==data.id){
				var newMessage = {
					cls:"sent",
					val:data.val,
					user: username
				};
				this.setState({msgs:[...this.state.msgs,newMessage]});
			}
		});
		this.socket.on(UPDATE_USERS,users => {
			this.setState({contacts:users});
		});
	}
	

    render() {
        return (
            <div id="frame">
                <SidePanel contacts={this.state.contacts} name={this.socket.username}/>
		        <div className="content">
		           	<div className="contact-profile">
		            	<img src="https://picsum.photos/300" alt="" />
		            	<p>Chat Code Share Learn</p>
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