import React from 'react';
import SidePanel from './sidepanel'; 
import Messages from './messages';
import MessageInput from './message_input';
import './chatapp.css';

export default class ChatApp extends React.Component {
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
	           		<Messages />
	            	<MessageInput />
    	        </div>
	        </div>
		);
	}
}