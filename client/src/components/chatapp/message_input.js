import React,{Component} from 'react';
import io from 'socket.io-client';

export class message_input extends Component {
	
	socketUrl = "http://localhost:4000";

	state = {
		msg : "",
		socket : null
	}

	submitHandler = (e) => {
		e.preventDefault();
		console.log(this.state.msg);
	}

	changeHandler = (e) => {
		e.preventDefault();
		this.setState({msg:e.target.value},() => {
			console.log(this.state.msg);
		});
	}

	initSocket = () => {
		const socket = io(this.socketUrl, {
			transports: ['websocket', 'polling', 'flashsocket']
		});
		socket.on('connect',() =>{
			console.log("Connected...");
		});
	}

	componentDidMount() {
		this.initSocket();
	}

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
				
		)
	}
}

export default message_input