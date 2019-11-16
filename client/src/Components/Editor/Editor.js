import React, { Component } from 'react';
import { Controlled as Codemirror } from 'react-codemirror2';

import './Editor.css';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/javascript/javascript';

var defaults = {
  markdown: '',
  javascript: '',
  htmlmixed: ''
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
          </select>
          <button onClick={this.toggleReadOnly}>Toggle read-only mode (currently {this.state.readOnly ? 'on' : 'off'})</button>
        </div>
      </div>
    );
  }
};

  