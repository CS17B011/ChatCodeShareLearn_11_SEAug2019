import React,{Component} from 'react';
import SidePanel from './sidepanel'; 
import './chatapp.css';

export default class chatapp extends Component {
	render() {
		return (
			<div>
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
			            <div className="messages">
			              <ul>
			                <li className="sent">
			                  <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
			                  <p>How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>
			                </li>
			                <li className="replies">
			                  <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
			                  <p>When you're backed against the wall, break the god damn thing down.</p>
			                </li>
			                <li className="replies">
			                  <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
			                  <p>Excuses don't win championships.</p>
			                </li>
			                <li className="sent">
			                  <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
			                  <p>Oh yeah, did Michael Jordan tell you that?</p>
			                </li>
			                <li className="replies">
			                  <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
			                  <p>No, I told him that.</p>
			                </li>
			                <li className="replies">
			                  <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
			                  <p>What are your choices when someone puts a gun to your head?</p>
			                </li>
			                <li className="sent">
			                  <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
			                  <p>What are you talking about? You do what they say or they shoot you.</p>
			                </li>
			                <li className="replies">
			                  <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
			                  <p>Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
			                </li>
			              </ul>
			            </div>
			            <div className="message-input">
			              <div className="wrap">
			                <input type="text" placeholder="Write your message..." />
			                <i className="fa fa-paperclip attachment" aria-hidden="true" />
			                <button className="submit"><i className="fa fa-paper-plane" aria-hidden="true" /></button>
			              </div>
			            </div>
			          </div>
			        </div>
			</div>
		)
	}
}