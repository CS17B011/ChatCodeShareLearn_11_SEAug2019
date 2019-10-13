import React from 'react';

export default class MessageInput extends React.Component {

	state = {
		msg : ""
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