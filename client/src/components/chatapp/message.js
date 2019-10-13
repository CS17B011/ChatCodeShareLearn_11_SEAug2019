import React,{Component} from 'react';
import './chatapp.css';

export default class Message extends Component {
	render() {
		return (
			<div>
				<li className="sent">
                  <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                  <p>How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>
                </li>
			</div>
		)
	}
}