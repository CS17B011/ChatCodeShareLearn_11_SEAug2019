import React,{Component} from 'react';
import SidePanel from './sidepanel'; 
import Messages from './messages';
import Message_input from './message_input';
import Content from './content';
import './chatapp.css';

export default class chatapp extends Component {
	render() {
		return (
			<div id="frame">
	        	<SidePanel Name="ABCD"/>
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
	            	<Message_input />
    	        </div>
	        </div>
		)
	}
}