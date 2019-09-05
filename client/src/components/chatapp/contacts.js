import React,{Component} from 'react';
import './chatapp.css';
import Contact from './contact'

export default class contacts extends Component {
	componentDidMount() {
		console.log(this.props.roll);
	}
	render() {
		return (
			<div id="contacts">
	              <ul>
	                <Contact number="8420771531" />
	              </ul>
	            </div>
	            )
	        }
	    }