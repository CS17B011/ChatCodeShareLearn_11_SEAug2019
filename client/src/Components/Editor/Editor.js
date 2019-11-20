import React, { Component } from 'react';
import { Controlled as Codemirror } from 'react-codemirror2';
import axios from 'axios';

import './Editor.css';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/apl/apl';
import 'codemirror/mode/asterisk/asterisk';
import 'codemirror/mode/brainfuck/brainfuck';
import 'codemirror/mode/clojure/clojure';
import 'codemirror/mode/cobol/cobol';
import 'codemirror/mode/coffeescript/coffeescript';
import 'codemirror/mode/commonlisp/commonlisp';
import 'codemirror/mode/css/css';
import 'codemirror/mode/d/d';
import 'codemirror/mode/dart/dart';
import 'codemirror/mode/fortran/fortran';
import 'codemirror/mode/haskell/haskell';
import 'codemirror/mode/groovy/groovy';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/swift/swift';
import 'codemirror/mode/vhdl/vhdl';




var defaults = {
	markdown: '',
	javascript: '',
	htmlmixed: '',
	apl: '',
	asterisk: '',
	brainfuck: '',
	clojure: '',
	cobol: '',
	coffeescript: '',
	commonlisp: '',
	css: '',
	d: '',
	dart: '',
	fortran: '',
	haskell: '',
	groovy: '',
	xml: '',
	swift: '',
	vhdl: ''
};


let fr;

export default class Editor extends Component {

	constructor() {
				super();
				this.state = {
					code: defaults.markdown,
					readOnly: false,
					mode: 'markdown'		
				};
			}

	handleFileRead = (e) => {
		e.preventDefault();
		this.setState({code:fr.result});
	}

	onChangeHandler = (e) => {
		e.preventDefault();
		var file = e.target.files[0];
		if(file)
		{
			fr = new FileReader();
			fr.onloadend = this.handleFileRead;
			fr.readAsText(file);
		}
	}

	changeMode = (e) => {
		e.preventDefault();
		var mode = e.target.value;
		this.setState({
			mode: mode,
			code: defaults[mode]+this.state.code
		});
	}

	toggleReadOnly = (e) => {
		this.setState({
			readOnly: !this.state.readOnly
		}, () => this.refs.editor.focus());
	}

	sendMessage = (e) => {
		e.preventDefault();
		this.props.sm(this.state.code);
	}

	render () {
		var options = {
			lineNumbers: true,
			readOnly: this.state.readOnly,
			mode: this.state.mode
		};
		return (
			<div>
				
				<Codemirror
					value={this.state.code}
					options = {{mode: this.state.mode}}
					onBeforeChange={(editor, data, code) => {
						this.setState({ code  : code + data.text[0] });
					}}
				/>
				
				<div style={{ marginTop: 10}}>
					<select className="btn btn-secondary dropdown-toggle" onChange={this.changeMode} value={this.state.mode}>
						<option className="dropdown-item" value="markdown">Markdown</option>
						<option className="dropdown-item" value="javascript">JavaScript</option>
						<option className="dropdown-item" value="htmlmixed">htmlmixed</option>
						<option className="dropdown-item" value="apl">apl</option>
						<option className="dropdown-item" value="asterisk">asterisk</option>
						<option className="dropdown-item" value="brainfuck">brainfuck</option>
						<option className="dropdown-item" value="clojure">clojure</option>
						<option className="dropdown-item" value="coffeescript">coffeescript</option>
						<option className="dropdown-item" value="commonlisp">commonlisp</option>
						<option className="dropdown-item" value="css">css</option>
						<option className="dropdown-item" value="d">d</option>
						<option className="dropdown-item" value="dart">dart</option>
						<option className="dropdown-item" value="fortran">fortran</option>
						<option className="dropdown-item" value="haskell">haskell</option>
						<option className="dropdown-item" value="groovy">groovy</option>
						<option className="dropdown-item" value="xml">xml</option>
						<option className="dropdown-item" value="swift">swift</option>
						<option className="dropdown-item" value="vhdl">vhdl</option>
					</select>
					<div className="file-upload-wrapper">
						<input type="file" name="codefile" id="input-file-now" className="file-upload" onChange={this.onChangeHandler} />
					</div>
					<button className="btn btn-default btn-primary btn-large" onClick={this.sendMessage}>Send</button>
				</div>
			</div>
		);
	}
};

	