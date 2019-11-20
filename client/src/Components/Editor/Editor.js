import React, { Component } from 'react';
import { Controlled as Codemirror } from 'react-codemirror2';

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

export default class Editor extends Component {
  
  constructor() {
        super();
        this.state = {
          code: defaults.markdown,
          readOnly: false,
          mode: 'markdown',
        };
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
        
        <div style={{ marginTop: 10 }}>
          <select onChange={this.changeMode} value={this.state.mode}>
            <option value="markdown">Markdown</option>
            <option value="javascript">JavaScript</option>
            <option value="htmlmixed">htmlmixed</option>
            <option value="apl">apl</option>
            <option value="asterisk">asterisk</option>
            <option value="brainfuck">brainfuck</option>
            <option value="clojure">clojure</option>
            <option value="coffeescript">coffeescript</option>
            <option value="commonlisp">commonlisp</option>
            <option value="css">css</option>
            <option value="d">d</option>
            <option value="dart">dart</option>
            <option value="fortran">fortran</option>
            <option value="haskell">haskell</option>
            <option value="groovy">groovy</option>
            <option value="xml">xml</option>
            <option value="swift">swift</option>
            <option value="vhdl">vhdl</option>
          </select>
          <button onClick={this.toggleReadOnly}>Toggle read-only mode (currently {this.state.readOnly ? 'on' : 'off'})</button>
        </div>
      </div>
    );
  }
};

  