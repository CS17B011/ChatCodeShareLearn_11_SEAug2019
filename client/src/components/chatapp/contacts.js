import React,{Component} from 'react';
import './chatapp.css';
import Contact from './contact'

export default class Contacts extends Component {
	render() {
		return (
			<div id="contacts">
	              <ul>
	                <Contact/>
	              </ul>
	            </div>
	            )
	        }
	    }