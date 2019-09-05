import React,{Component} from 'react';

export default class content extends Component {
	render() {
		return (
			<div className="message-input">
              	<div className="wrap">
                	<input type="text" placeholder="Write your message..." />
                	<i className="fa fa-paperclip attachment" aria-hidden="true" />
                	<button className="submit"><i className="fa fa-paper-plane" aria-hidden="true" /></button>
              	</div>
            </div>
		)
	}
}